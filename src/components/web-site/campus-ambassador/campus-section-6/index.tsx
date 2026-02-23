import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";

import React from "react";

export default function CampusSection6() {
  return (
    <section className="py-10 sm:py-20 layout-spacing grid gap-24 items-center">
      <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-12 grid gap-8 bg-[#183668] rounded-4xl py-16">
        <div className="grid gap-2.5 text-white [&>p]:max-w-sm [&>p]:md:max-w-lg [&>p]:lg:max-w-xl [&>p]:md:text-lg">
          <h1 className="uppercase font-bold text-4xl md:text-6xl">
            Ready to Lead Change?
          </h1>
          <p>
            If you&apos;re ready to inspire and empower your campus community,
            we’d love to have you join us!
          </p>
        </div>

        <Link
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSePx3k6-oCZ2uo6w9r1oh2zxq9sD_oWBXq_4hzxlkHgRfeqeg/viewform"
          }
          target="_blank"
        >
          <Button variant={ButtonVariants.SkyBlueFilledRounded}>
            Become a Campus Ambassador
          </Button>
        </Link>
      </div>
    </section>
  );
}
