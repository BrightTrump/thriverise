import React from "react";
import Cards from "./cards";
export default function Section1() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-white">
      <div className="container mx-auto grid gap-12 place-items-center">
        <div className="max-w-2xl grid [&>h1]:text-[27px] [&>h1]:text-center [&>h1]:sm:text-3xl [&>h1]:text-[#020912]">
          <h1>
            <span className="font-bold">We Offer both immediate</span>{" "}
            <span className="italic">tools</span>{" "}
            <span className="font-bold">
              and long-term platforms to support every stakeholder.
            </span>{" "}
          </h1>
        </div>

        {/* Cards Content */}
        <Cards />
      </div>
    </section>
  );
}
