import React from "react";
import Image from "next/image";
import { Button, ButtonVariants } from "@/ui";

export default function ThriveriseCommunity() {
  return (
    <div className="grid lg:grid-cols-2 gap-3 lg:gap-24 items-center text-[#183668]">
      <span className="relative w-full aspect-[1/0.7] ">
        <Image
          src={"/website-ui/thriverise-community.svg"}
          fill
          sizes="1024px"
          alt="Icon"
        />
      </span>

      <div className="grid gap-5 lg:gap-8 text-[#183668] pl-5">
        <div className="grid gap-2.5">
          <h1 className="uppercase font-bold text-2xl md:text-4xl">
            ThriveRise Community Learning Centers
          </h1>
          <p className="lg:max-w-sm 2xl:max-w-xl">
            We&apos;ve launched a grassroots education initiative providing free
            basic education to out-of-school children in underserved
            communities.
          </p>
        </div>
        <div>
          <Button variant={ButtonVariants.YellowFilledRounded}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
