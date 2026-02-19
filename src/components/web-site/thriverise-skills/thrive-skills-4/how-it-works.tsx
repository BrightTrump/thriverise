import React from "react";
export default function HowItWorks() {
  return (
    <div className="grid gap-8 md:gap-14 text-[#183668]">
      <div className="text-center">
        <h1 className="uppercase font-bold text-center text-4xl lg:text-6xl">
          How it works
        </h1>
      </div>

      {/* Content */}
      <div className="font-bold grid md:grid-flow-col gap-3 [&_span]:font-bold [&_span]:text-[80px] sm:[&_span]:text-8xl [&_span]:text-[#183668]/20 [&_p]:text-3xl md:[&_p]:text-4xl">
        <div>
          <span>01</span>
          <p>Submit your request through our Library request form.</p>
        </div>
        <div>
          <span>02</span>
          <p>Our team searches and sources materials.</p>
        </div>
        <div>
          <span>03</span>
          <p>We deliver the resources directly to you.</p>
        </div>
      </div>
    </div>
  );
}
