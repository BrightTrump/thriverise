import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";

import React from "react";

export default function JoinOurTeam() {
  return (
    <section className="py-10 sm:py-20 layout-spacing grid gap-24 items-center">
      <div className="container mx-auto max-w-4xl px-12 grid gap-8 place-items-center bg-[#183668] rounded-4xl py-24">
        <h1 className="uppercase font-bold text-[40px] md:text-6xl text-white text-center">
          Join Our Team
        </h1>

        <div className="">
          <Link
            href={
              "https://docs.google.com/forms/d/1k52tfwcK-_ZZik_RgSZJm4IIIByB_Nj9fovUBTT-eGM/viewform"
            }
            target="_blank"
          >
            <Button variant={ButtonVariants.SkyBlueFilledRounded}>
              Volunteer Here
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
