"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, ButtonVariants } from "@/ui";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid lg:grid-cols-2 gap-3 lg:gap-24 items-center text-[#183668]"
    >
      <div className="grid gap-2.5 text-white order-2 lg:order-none pl-5">
        <h1 className="uppercase font-bold text-2xl md:text-4xl">WHO WE ARE</h1>
        <p className="lg:max-w-sm 2xl:max-w-xl">
          ThriveRise Africa is a youth-led, nonprofit organization committed to
          advancing SDG 4 (Quality Education) and SDG 8 (Decent Work and
          Economic Growth) from the grassroots. We work with communities,
          schools, and institutions to reach out-of-school children, underserved
          university students, and unemployed youth, delivering programs that
          restore hope and build futures.
        </p>
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
