import React from "react";
import WhoWeAre from "./who-we-are";
import WeBelieve from "./we-believe";

export default function SectionAbout3() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-[#279B48]">
      <div className="container mx-auto grid gap-14 lg:gap-48">
        <WhoWeAre />
        <WeBelieve />
      </div>
    </section>
  );
}
