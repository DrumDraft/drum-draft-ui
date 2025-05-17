import { Header } from '@/widgets/header/ui/Header';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col m-auto w-full h-screen">
      <Header />
      <main className="w-full flex-grow">
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}
