import React from "react";
import AnnualHighlights from "./annual-highlights";
import Link from "next/link";
import { Button, ButtonVariants } from "@/ui";

export default function SectionThrive3() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-[#183668]">
      <div className="container mx-auto grid gap-12 lg:gap-16 items-center place-items-center">
        <div className="max-w-4xl text-white text-center">
          <h1 className="uppercase font-bold text-center text-4xl md:text-6xl pb-3">
            Reports: Transparency & Progress
          </h1>
          <p>
            At ThriveRise, we are committed to transparency and impact tracking.
          </p>
          <p>
            Here you&apos;ll find our program reports, financial overviews, and
            impact assessments that detail what we&apos;ve done, and where
            we&apos;re going.
          </p>
        </div>
        <div id="reports-section" className="grid gap-8 lg:gap-12">
          <AnnualHighlights />
          <div className="mx-auto">
            <Link href={""}>
              <Button variant={ButtonVariants.SkyBlueWhiteFilledRounded}>
                Download Reports
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
