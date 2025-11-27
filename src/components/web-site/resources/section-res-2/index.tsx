import React from "react";
import StoriesThatMatters from "./stories-that-matters";

export default function SectionResources2() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <div className="container mx-auto grid gap-12 lg:gap-16 items-center place-items-center">
        <div className="max-w-3xl text-[#183668] text-center">
          <h1 className="uppercase font-bold text-center text-4xl md:text-6xl">
            Stories That Matter
          </h1>
          <p>
            Dive into inspiring stories from our volunteers, educators,
            community members, and students. Our blog highlights the people and
            purpose behind everything we do.
          </p>
        </div>

        <div className="">
          <StoriesThatMatters />
        </div>
      </div>
    </section>
  );
}
