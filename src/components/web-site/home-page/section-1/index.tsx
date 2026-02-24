import React from "react";
import ThriveriseCommunity from "./thriverise-community";
import ThriveriseLibrary from "./thriverise-library";
import ThriveriseSkills from "./thriverise-skills";

export default function Section1() {
  return (
    <section id="our-work" className="py-10 sm:py-20 layout-spacing">
      <div className="container mx-auto grid gap-12 lg:gap-16 items-center place-items-center">
        <div className="text-[#183668]">
          <h1 className="uppercase font-bold text-center text-3xl">
            Our Latest Projects
          </h1>
        </div>

        <div className="grid gap-10">
          <ThriveriseCommunity />
          <ThriveriseLibrary />
          <ThriveriseSkills />
        </div>
      </div>
    </section>
  );
}
