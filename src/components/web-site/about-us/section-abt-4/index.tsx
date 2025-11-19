import Image from "next/image";
import React from "react";

export default function SectionAbout4() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <div className="container mx-auto grid gap-16.5 sm:gap-20 place-items-center text-[#183668]">
        <div className="max-w-xl grid gap-2 text-center">
          <h1 className="uppercase font-bold text-4xl md:text-6xl">Team</h1>
          <p className="md:text-[20px]">
            Meet the passionate people driving the movement.
          </p>
        </div>
        {/* Images Section */}
        <div className="relative grid md:grid-flow-col gap-8 md:gap-16 items-start">
          {/* Left Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/website-ui/abt-img-2.svg"
              alt="Smiling child"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Right Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/website-ui/abt-img-3.svg"
              alt="Children learning"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
