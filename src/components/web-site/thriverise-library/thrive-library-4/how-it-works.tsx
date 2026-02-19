import React from "react";
export default function HowItWorks() {
  return (
    <div className="grid gap-8 md:gap-14 text-[#FFF8EB]">
      <div className="text-center">
        <h1 className="uppercase font-bold text-center text-4xl lg:text-6xl">
          How it works
        </h1>
      </div>

      {/* Content */}
      <div className="font-bold grid md:grid-flow-col gap-3 [&_span]:font-bold [&_span]:text-[80px] sm:[&_span]:text-8xl [&_span]:text-[#ffffff54] [&_p]:text-3xl md:[&_p]:text-4xl">
        <div>
          <span>01</span>
          <p>Everyone deserves a chance to learn.</p>
        </div>
        <div>
          <span>02</span>
          <p>Communities can rise when empowered.</p>
        </div>
        <div>
          <span>03</span>
          <p>Small efforts lead to big change.</p>
        </div>
      </div>
    </div>
  );
}
