import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";

import React from "react";

export default function ThriveSkills5() {
  return (
    <section className="py-10 sm:py-20 layout-spacing grid gap-24 items-center">
      <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-12 grid gap-8 bg-[#183668] rounded-4xl py-16">
        <div className="grid gap-2.5 text-white [&>p]:max-w-sm [&>p]:md:max-w-lg [&>p]:lg:max-w-xl [&>p]:md:text-lg">
          <h1 className="uppercase font-bold text-4xl md:text-6xl">
            Get Involved
          </h1>
          <p>
            We invite businesses, mentors, and organizations to collaborate with
            us in training, hiring, and supporting youth.
          </p>
        </div>

        <Link href={"get-involved#partner-section"}>
          <Button variant={ButtonVariants.SkyBlueFilledRounded}>
            Partner with us
          </Button>
        </Link>
      </div>
    </section>
  );
}
