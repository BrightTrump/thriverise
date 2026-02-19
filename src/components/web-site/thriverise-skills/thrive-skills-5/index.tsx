import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";

import React from "react";

export default function ThriveSkills5() {
  return (
    <section className="py-10 sm:py-20 layout-spacing grid gap-24 items-center">
      <div className="container mx-auto max-w-6xl px-12 grid gap-8 bg-[#183668] rounded-4xl py-16">
        <div className="grid gap-2.5 text-white [&>p]:max-w-sm [&>p]:md:max-w-lg [&>p]:lg:max-w-xl [&>p]:md:text-lg">
          <h1 className="uppercase font-bold text-4xl md:text-6xl">
            Get Involved
          </h1>
          <p>
            Whether you&apos;re a student, educator, or professional, you can
            contribute by donating academic resources, volunteering your
            expertise, or spreading the word.
          </p>
        </div>
        <div className="grid sm:grid-cols-[auto_1fr] gap-5 sm:gap-2 items-center">
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSePx3k6-oCZ2uo6w9r1oh2zxq9sD_oWBXq_4hzxlkHgRfeqeg/viewform"
            }
            target="_blank"
          >
            <Button variant={ButtonVariants.SkyBlueFilledRounded}>
              Request Resources
            </Button>
          </Link>
          <Link
            href={
              "https://docs.google.com/forms/d/1UBYb_oTB21N8etqDTqS1CbWJx5gpBnQcUMSELpzvsuw/viewform"
            }
            target="_blank"
          >
            <Button variant={ButtonVariants.SkyBlueFilledRounded}>
              Donate Materials
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
