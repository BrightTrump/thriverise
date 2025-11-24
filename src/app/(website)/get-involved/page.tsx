import SectionGetInv1 from "@/components/web-site/get-involved/section-get-inv-1";
import SectionGetInv2 from "@/components/web-site/get-involved/section-get-inv-2";
import SectionGetInv3 from "@/components/web-site/get-involved/section-get-inv-3";

export default function Page() {
  return (
    <main className="overflow-hidden grid gap-8">
      <SectionGetInv1 />
      <SectionGetInv2 />
      <SectionGetInv3 />
    </main>
  );
}
