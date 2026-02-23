import CampusSection1 from "@/components/web-site/campus-ambassador/campus-section-1";
import CampusSection2 from "@/components/web-site/campus-ambassador/campus-section-2";
import CampusSection3 from "@/components/web-site/campus-ambassador/campus-section-3";
import CampusSection4 from "@/components/web-site/campus-ambassador/campus-section-4";
import CampusSection5 from "@/components/web-site/campus-ambassador/campus-section-5";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <CampusSection1 />
      <CampusSection2 />
      <CampusSection3 />
      <CampusSection4 />
      <CampusSection5 />
    </main>
  );
}
