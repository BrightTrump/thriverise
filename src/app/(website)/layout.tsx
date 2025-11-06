import Footer from "@/components/web-site/_shared/footer";
import Header from "@/components/web-site/_shared/header";

export default function WebSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[radial-gradient(circle_at_top,#FAFAFA_6%,#E4EAFB_8%)] sm:bg-[radial-gradient(circle_at_top,#FAFAFA_5%,#E4EAFB_15%)] lg:bg-[radial-gradient(circle_at_top,#FAFAFA_12%,#E4EAFB_15%)] 2xl:bg-[radial-gradient(circle_at_top,#FAFAFA_12%,#E4EAFB_50%)] overflow-hidden">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
