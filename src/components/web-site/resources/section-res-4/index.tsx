import React from "react";
import Link from "next/link";
import { Button, ButtonVariants } from "@/ui";
import PressRelease from "./press-release";

export default function SectionResources4() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <div className="container mx-auto grid gap-12 lg:gap-16 items-center place-items-center">
        <div className="max-w-3xl text-[#183668] text-center">
          <h1 className="uppercase font-bold text-center text-4xl md:text-6xl">
            Press Releases & Media
          </h1>
          <p>
            Catch up on official announcements, media features, and external
            recognitions.
          </p>
        </div>

        <div id="press-media-section" className="grid gap-8 lg:gap-12">
          <PressRelease />
          <div className="mx-auto">
            <Link href={""}>
              <Button variant={ButtonVariants.SkyBlueFilledRounded}>
                View Press Releases
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
