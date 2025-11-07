import React from "react";
import Image from "next/image";

export default function Section1() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <div className="container mx-auto grid gap-2.5 items-center">
        <div>Our Latest Projects</div>
        <div className="container mx-auto grid lg:grid-cols-2 gap-2.5 items-center">
          <div className="grid gap-2.5 text-[#183668]">
            <h1 className="uppercase font-bold text-6xl ">
              <span className="">Improving</span> Lives, One <span>Impact</span>{" "}
              at a Time
            </h1>
            <p className="md:max-w-sm">
              Empowering out-of-school children, underserved youth, and students
              across Africa with free education, skills, and lifelong
              opportunities.
            </p>
          </div>

          <div className="relative w-full aspect-[4/3]">
            <Image
              src={"/website-ui/hero-image.png"}
              alt="Hero Image"
              fill
              className=""
              sizes="300px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
