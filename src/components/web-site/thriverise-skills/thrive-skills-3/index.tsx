import React from "react";
import WhatWeDo from "./what-we-do";
import WhyItMatters from "./why-it-matters";

export default function ThriveSkills3() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-[#183668]">
      <div className="container mx-auto grid gap-14 lg:gap-48">
        <WhyItMatters />
        <WhatWeDo />
      </div>
    </section>
  );
}
