import React from "react";
import { Button, ButtonVariants } from "@/ui";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="py-28.5 sm:pt-28.5 sm:pb-60 layout-spacing"
    >
      <div className="container mx-auto max-w-4xl grid gap-5 text-center place-items-center [&>h1]:text-[#020912] [&>h1]:text-3xl sm:[&>h1]:text-4xl [&>h1]:lg:text-4xl sm:[&>h1]:lg:text-5xl">
        <h1 className="w-full max-w-2xl font-bold">
          The Digital Backbone of
          <br className="hidden sm:block" />
        </h1>
        <h1 className="max-w-4xl ">
          <span className="font-bold">Nigeria&apos;s</span>{" "}
          <span className="italic">Insurance </span>{" "}
          <span className="font-bold">Industry</span>
        </h1>

        <p className="max-w-2xl text-[#374456] text-sm sm:text-lg font-medium">
          We deliver modern software solutions for insurers, brokers, agents,
          service providers, and policyholders, helping your entire ecosystem
          work smarter, faster, and more transparently.
        </p>

        {/* cta */}
        <div className="grid grid-cols-2 w-full max-w-xs gap-2 place-items-center [@media(min-width:_0px)_and_(max-width:_376px)]:grid-cols-1">
          <Link href="" target="_blank">
            <Button type="button" variant={ButtonVariants.PrimaryFilledRounded}>
              Request a Demo
            </Button>
          </Link>
          <Link href="" target="_blank">
            <Button type="submit" variant={ButtonVariants.BabyBlueFilled}>
              <span className="text-[#0052FE]">Explore Solutions</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
