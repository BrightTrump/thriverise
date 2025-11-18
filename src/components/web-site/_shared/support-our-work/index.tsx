import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";

import React from "react";

export default function SupportOurWork() {
  return (
    <section className="py-10 sm:py-20 layout-spacing grid gap-24 items-center">
      <div className="container mx-auto max-w-6xl px-12 grid gap-8 bg-[#183668] rounded-4xl py-24">
        <div className="grid gap-2.5 text-white">
          <h1 className="uppercase font-bold text-2xl md:text-4xl">
            Support Our Work
          </h1>
          <p className="max-w-sm md:max-w-lg lg:max-w-xl text-lg">
            Every donation, partnership, or material support helps us reach more
            children and youth in need. You can give a child a classroom, a
            student a research paper, or a youth a skill for life.
          </p>
        </div>
        <div className="grid sm:grid-cols-[auto_1fr] gap-5 sm:gap-2 items-center">
          <Link
            href={
              "https://docs.google.com/forms/d/1k52tfwcK-_ZZik_RgSZJm4IIIByB_Nj9fovUBTT-eGM/viewform"
            }
            target="_blank"
          >
            <Button variant={ButtonVariants.SkyBlueFilledRounded}>
              Donate Now
            </Button>
          </Link>
          <Link
            href={
              "https://docs.google.com/forms/d/1jUh68bTubd-SKx_iU__CB-6V4OAHhAjuKwiJdlaCpJI/viewform"
            }
            target="_blank"
          >
            <Button variant={ButtonVariants.SkyBlueFilledRounded}>
              Become A Partner
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
