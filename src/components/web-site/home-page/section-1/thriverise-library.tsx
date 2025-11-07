import React from "react";
import Image from "next/image";
import { Button, ButtonVariants } from "@/ui";

export default function ThriveriseLibrary() {
  return (
    <div className="grid lg:grid-cols-2 gap-3 lg:gap-24 items-center  text-[#183668]">
      <div className="grid gap-5 lg:gap-8 text-[#183668] order-1 lg:order-none">
        <div className="grid gap-2.5">
          <h1 className="uppercase font-bold text-2xl md:text-4xl">
            ThriveRise Library
          </h1>
          <p className="lg:max-w-sm 2xl:max-w-xl">
            A digital library offering free access to academic resources,
            research papers, and tools for university students across Nigeria.
          </p>
        </div>
        <div>
          <Button variant={ButtonVariants.SkyBlueFilledRounded}>
            Request Resources
          </Button>
        </div>
      </div>
      <span className="relative w-full aspect-[1/0.7] order-2 lg:order-none">
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
