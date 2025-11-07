import React from "react";
import Image from "next/image";
import { Button, ButtonVariants } from "@/ui";

export default function Section1() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <div className="container mx-auto  grid gap-12 lg:gap-16 items-center place-items-center text-[#183668]">
        <div className="">
          <h1 className="uppercase font-bold text-center text-3xl">
            Our Latest Projects
          </h1>
        </div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-3 lg:gap-24 items-center">
          <div>
            <Image
              src={"/website-ui/hero-image.png"}
              alt="Hero Image"
              width={300}
              height={300}
              className="w-full"
            />
          </div>
          <div className="grid gap-5 lg:gap-8 text-[#183668]">
            <div className="grid gap-2.5">
              <h1 className="uppercase font-bold text-2xl md:text-5xl">
                ThriveRise Community Learning Centers
              </h1>
              <p className="">
                We&apos;ve launched a grassroots education initiative providing
                free basic education to out-of-school children in underserved
                communities.
              </p>
            </div>
            <div>
              <Button variant={ButtonVariants.SkyBlueFilledRounded}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
