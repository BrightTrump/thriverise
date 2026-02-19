"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, ButtonVariants } from "@/ui";
import Link from "next/link";

export default function ThriveriseLibrary() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid lg:grid-cols-2 gap-3 lg:gap-24 items-center text-[#183668]"
    >
      <div className="grid gap-5 lg:gap-8 text-[#183668] order-2 lg:order-none pl-5">
        <div className="grid gap-2.5">
          <h1 className="uppercase font-bold text-2xl md:text-4xl">
            ThriveRise Library
          </h1>
          <p className="lg:max-w-sm 2xl:max-w-xl">
            A digital library offering free access to academic resources,
            research papers, and tools for university students across Nigeria.
          </p>
        </div>
        <div>
          <Link href={"thriverise-library"}>
            <Button variant={ButtonVariants.SkyBlueFilledRounded}>
              Request Resources
            </Button>
          </Link>
        </div>
      </div>
      <span className="relative w-full aspect-[1/0.7] mx-auto order-1 lg:order-none">
        <Image
          src={"/website-ui/thriverise-library.svg"}
          fill
          sizes="1024px"
          alt="Icon"
        />
      </span>
    </motion.div>
  );
}
