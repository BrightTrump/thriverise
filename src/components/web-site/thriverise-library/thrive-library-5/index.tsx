import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";

import React from "react";

export default function ThriveLibrary5() {
  return (
    <section className="py-10 sm:py-20 layout-spacing grid gap-24 items-center">
      <div className="container mx-auto max-w-6xl px-12 grid gap-8 bg-[#183668] rounded-4xl py-16">
        <div className="grid gap-2.5 text-white [&>p]:max-w-sm [&>p]:md:max-w-lg [&>p]:lg:max-w-xl [&>p]:md:text-lg">
          <h1 className="uppercase font-bold text-4xl md:text-6xl">
            Get Involved
          </h1>
          <p>
            You can support the Learning Centers by volunteering, donating
            learning materials, or partnering with us to expand into more
            communities.
          </p>
        </div>
        <div className="grid sm:grid-cols-[auto_1fr] gap-5 sm:gap-2 items-center">
          <Link href={"get-involved#volunteer-section"}>
            <Button variant={ButtonVariants.SkyBlueFilledRounded}>
              Volunteer
            </Button>
          </Link>
          <Link href={"get-involved#donate-section"}>
            <Button variant={ButtonVariants.SkyBlueFilledRounded}>
              Donate
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
