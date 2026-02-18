"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, ButtonVariants } from "@/ui";
import Link from "next/link";

export default function ThriveriseCommunity() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid lg:grid-cols-2 gap-3 lg:gap-24 items-center text-[#183668]"
    >
      <span className="relative w-full aspect-[1/0.7] ">
        <Image
          src={"/website-ui/thriverise-community.svg"}
          fill
          sizes="1024px"
          alt="Icon"
        />
      </span>

      <div className="grid gap-5 lg:gap-8 text-[#183668] pl-5">
        <div className="grid gap-2.5">
          <h1 className="uppercase font-bold text-2xl md:text-4xl 2xl:text-5xl">
            ThriveRise Community Learning Centers
          </h1>
          <p className="lg:max-w-sm 2xl:max-w-xl">
            We&apos;ve launched a grassroots education initiative providing free
            basic education to out-of-school children in underserved
            communities.
          </p>
        </div>
        <div>
          <Link href={"thriverise-community"}>
            <Button variant={ButtonVariants.YellowFilledRounded}>
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
