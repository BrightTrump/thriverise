import React from "react";

export default function Section4() {
  return (
    <section className="py-10 sm:py-20 grid gap-24 items-center place-items-center bg-[#000000]">
      <div className="container mx-auto px-2 py-12 sm:p-0 max-w-2xl lg:max-w-4xl grid gap-5 text-center place-items-center text-white bg-[url(/website-ui/why-rakisi.png)] bg-no-repeat bg-cover bg-center">
        <h1 className="font-bold text-[#020912]">
          Why Rakisi?
          <br />
        </h1>

        <p className="text-2xl sm:text-4xl">
          <span className="font-bold">Nigeria&apos;s</span>{" "}
          <span className="italic">Insurance </span>{" "}
          <span className="font-bold">market is</span>{" "}
          <span className="italic">evolving,</span>{" "}
          <span className="font-bold">your</span>{" "}
          <br className="hidden lg:block" />
          <span className="italic">tools</span>{" "}
          <span className="font-bold">should too</span>{" "}
        </p>

        <p className="text-sm sm:text-base">
          Recent reforms have opened new opportunities, but also increased
          operational demands on brokers. Rakisi brings everything you need into
          one intuitive platform, helping you meet compliance requirements,
          speed up processes, and deliver better service to your clients.
        </p>
      </div>
    </section>
  );
}
