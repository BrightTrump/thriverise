import React from "react";
export default function Features() {
  return (
    <section className="py-24 layout-spacing bg-white rounded-tl-4xl rounded-tr-4xl sm:rounded-tl-[90px] sm:rounded-tr-[90px]">
      <div className="container mx-auto grid gap-16.5 sm:gap-20 place-items-center">
        <div className="max-w-xl grid [&>h1]:text-2xl [&>h1]:text-center [&>h1]:text-[#020912] [&>h1]:sm:text-3xl">
          <h1>
            <span className="font-bold">We are not just a</span>{" "}
            <span className="italic">single</span>{" "}
            <span className="font-bold">product, We are an</span>{" "}
            <span className="italic">evolving</span>{" "}
            <span className="font-bold">ecosystem!</span>
          </h1>
        </div>

        {/* Content */}
        <div className="mx-auto grid sm:grid-cols-2 xl:grid-cols-4 gap-5 text-center xl:text-left [&>div]:grid [&>div]:gap-4 [&>div]:items-start [&>div]:justify-items-center [&>div]:place-items-center [&>div]:xl:justify-items-start [&_h3]:text-2xl sm:[&_h3]:text-[40px] [&_h3]:text-[#020912] [&_h3]:font-bold [&_p]:text-[#374456] ">
          {/* Unified Operations */}
          <div>
            <div>
              <h3>Unified</h3>
              <h3>Operations</h3>
            </div>
            <p>
              A centralized quoting, policy, billing, claims, and reporting.
            </p>
          </div>

          {/* Compliance Ready */}
          <div>
            <div>
              <h3>Compliance</h3>
              <h3>Ready</h3>
            </div>
            <p>Always stay aligned with NAICOM and industry regulations.</p>
          </div>

          {/* Every Stakeholder */}
          <div>
            <div>
              <h3>For Every</h3>
              <h3>Stakeholder</h3>
            </div>
            <p>
              Get solutions tailored for insurers, brokers, service providers,
              and policyholders.
            </p>
          </div>

          {/* Future-Proof Technology */}
          <div>
            {/* Desktop */}
            <div className="">
              <h3>Future-Proof</h3>
              <h3>Technology</h3>
            </div>
            {/* Mobile */}
            {/* <div className="">
              <h3>Future-Proof</h3>
              <h3>Technology</h3>
            </div> */}
            <p>
              Scalable, secure, and designed for Nigeria&apos;s growing market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
