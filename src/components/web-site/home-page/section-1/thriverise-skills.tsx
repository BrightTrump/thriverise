import React from "react";
import Image from "next/image";
import { Button, ButtonVariants } from "@/ui";

export default function ThriveriseSkills() {
  return (
    <div className="grid lg:grid-cols-2 gap-3 lg:gap-24 items-center text-[#183668]">
      <span className="relative w-full aspect-[1/0.7] ">
        <Image
          src={"/website-ui/thriverise-skills.svg"}
          fill
          sizes="1024px"
          alt="Icon"
        />
      </span>

      <div className="grid gap-5 lg:gap-8 text-[#183668] pl-5">
        <div className="grid gap-2.5">
          <h1 className="uppercase font-bold text-2xl md:text-4xl">
            Thrive Skills (SDG 8 Empowerment Track)
          </h1>
          <p className="lg:max-w-sm 2xl:max-w-xl">
            A skills empowerment program for youths, providing vocational
            training, job readiness, and entrepreneurship support.
          </p>
        </div>
        <div>
          <Button variant={ButtonVariants.GreenFilledRounded}>
            Partner With Us
          </Button>
        </div>
      </div>
    </div>
  );
}
