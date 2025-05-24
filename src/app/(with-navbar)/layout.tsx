import "@/shared/api/axios/interceptors.browser";
import { PageContent } from "@/shared/ui/page/PageContent";
import { NavBar } from "@/widgets/nav-sidebar/ui";
import "@styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-row h-screen w-full">
      <NavBar />
      <PageContent>{children}</PageContent>
    </div>
  );
}
