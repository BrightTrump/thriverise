import Image from "next/image";
import React from "react";

export default function SectionAbout4() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <div className="container mx-auto grid gap-12 md:gap-[70px] md:place-items-center text-[#183668]">
        <div className="max-w-xl grid gap-2 text-center place-items-center">
          <h1 className="uppercase font-bold text-4xl md:text-6xl">Team</h1>
          <p className="md:text-[20px]">
            Meet the passionate people driving the movement.
          </p>
        </div>

        {/* Images Section */}
        <div className="relative grid md:grid-cols-2 gap-2.5">
          {/* Left Image */}

          <div className="">
            <Image
              src="/website-ui/abt-img-2.svg"
              width={500}
              height={500}
              className="w-full"
              alt="Tife"
            />
          </div>

          {/* Right Image */}
          <div className="">
            <Image
              src="/website-ui/abt-img-3.svg"
              width={500}
              height={500}
              className="w-full"
              alt="Saudat"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
