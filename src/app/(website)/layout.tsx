import Footer from "@/components/web-site/_shared/footer";
import Header from "@/components/web-site/_shared/header";

export default function WebSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#FFF8EB]">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
