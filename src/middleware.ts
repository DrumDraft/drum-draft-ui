import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

// Список публичных маршрутов, которые не требуют аутентификации
const publicRoutes = ["/login", "/register"];

// Список защищенных маршрутов
const protectedRoutes = ["/profile", "/admin", "/library", "/settings"];

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Пропускаем публичные маршруты
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Проверяем, является ли маршрут защищенным
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Если маршрут не защищенный, пропускаем
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // Получаем токен из cookie
  const accessToken = req.cookies.get("access_token")?.value;

  // Если токена нет, редиректим на страницу логина
  if (!accessToken) {
    const loginUrl = new URL("/login", req.url);
    // Сохраняем оригинальный URL для редиректа после логина
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    // Здесь можно добавить проверку JWT токена
    // const { payload } = await jwtVerify(
    //   token,
    //   new TextEncoder().encode(process.env.JWT_SECRET)
    // );

    // Добавляем информацию о пользователе в заголовки
    const requestHeaders = new Headers(req.headers);
    // requestHeaders.set('x-user-id', payload.sub as string);

    // Продолжаем запрос с обновленными заголовками
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    // Если токен невалидный, очищаем cookie и редиректим на логин
    const response = NextResponse.redirect(new URL("/login", req.url));
    response.cookies.delete("accessToken");
    return response;
  }
}
