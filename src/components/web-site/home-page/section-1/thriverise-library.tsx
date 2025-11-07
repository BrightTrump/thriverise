import React from "react";
import Image from "next/image";
import { Button, ButtonVariants } from "@/ui";

export default function ThriveriseLibrary() {
  return (
    <div className="grid lg:grid-cols-2 gap-3 lg:gap-24 items-center  text-[#183668]">
      <div className="grid gap-5 lg:gap-8 text-[#183668]">
        <div className="grid gap-2.5">
          <h1 className="uppercase font-bold text-2xl md:text-4xl">
            ThriveRise Community Learning Centers
          </h1>
          <p className="">
            We&apos;ve launched a grassroots education initiative providing free
            basic education to out-of-school children in underserved
            communities.
          </p>
        </div>
        <div>
          <Button variant={ButtonVariants.SkyBlueFilledRounded}>
            Request Resources
          </Button>
        </div>
      </div>
      <span className="relative w-full aspect-[1/0.7]">
        <Image
          src={"/website-ui/thriverise-library.svg"}
          fill
          sizes="1024px"
          alt="Icon"
        />
      </span>
    </div>
  );
}
