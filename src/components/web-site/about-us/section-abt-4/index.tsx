import React from "react";
import WhoWeAre from "./who-we-are";
import WeBelieve from "./we-believe";

export default function SectionAbout4() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <div className="container mx-auto grid gap-16.5 sm:gap-20 place-items-center text-[#183668]">
        <div className="max-w-xl grid">
          <h1 className="uppercase font-bold text-center text-3xl">
            Our Impact So Far
          </h1>
        </div>
        <div className="container mx-auto grid gap-14 lg:gap-48">
          <WhoWeAre />
          <WeBelieve />
        </div>
      </div>
    </section>
  );
}
