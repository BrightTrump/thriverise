import Features from "@/components/web-site/home-page/features";
import HeroSection from "@/components/web-site/home-page/hero-section";
import Section1 from "@/components/web-site/home-page/section-1";
import Section2 from "@/components/web-site/home-page/section-2";
import Section3 from "@/components/web-site/home-page/section-3";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <Features />
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <Section4 />
      <Section5 /> */}
    </main>
  );
}
