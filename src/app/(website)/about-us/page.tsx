import SectionAbout1 from "@/components/web-site/about-us/section-abt-1";
import SectionAbout2 from "@/components/web-site/about-us/section-abt-2";
import SectionAbout3 from "@/components/web-site/about-us/section-abt-3";
import SectionAbout4 from "@/components/web-site/about-us/section-abt-4";
import JoinOurTeam from "@/components/web-site/about-us/section-abt-5";
import SectionAbout6 from "@/components/web-site/about-us/section-abt-6";

export default function Page() {
  return (
    <main className="overflow-hidden grid gap-8">
      <SectionAbout1 />
      <SectionAbout2 />
      <SectionAbout3 />
      <SectionAbout4 />
      <JoinOurTeam />
      <SectionAbout6 />
    </main>
  );
}
