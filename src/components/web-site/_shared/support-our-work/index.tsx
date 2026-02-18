import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";

import React from "react";

export default function SupportOurWork() {
  return (
    <section className="py-10 sm:py-20 layout-spacing grid gap-24 items-center">
      <div className="container mx-auto max-w-6xl px-12 grid gap-8 bg-[#183668] rounded-4xl py-16">
        <div className="grid gap-2.5 text-white [&>p]:max-w-sm [&>p]:md:max-w-lg [&>p]:lg:max-w-xl [&>p]:md:text-lg">
          <h1 className="uppercase font-bold text-4xl md:text-6xl">
            Support Our Work
          </h1>
          <p>
            Every donation, partnership, or material support helps us reach more
            children and youth in need.
          </p>
          <p>
            You can give a child a classroom, a student a research paper, or a
            youth a skill for life.
          </p>
        </div>
        <div className="grid sm:grid-cols-[auto_1fr] gap-5 sm:gap-2 items-center">
          <Link href={"get-involved#donate-section"}>
            <Button variant={ButtonVariants.SkyBlueFilledRounded}>
              Donate Now
            </Button>
          </Link>
          <Link href={"get-involved#partner-section"}>
            <Button variant={ButtonVariants.SkyBlueFilledRounded}>
              Become A Partner
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
