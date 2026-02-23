"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function CampusSection1() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid lg:grid-cols-2 gap-3 items-center text-[#183668]"
      >
        <div className="grid gap-2.5 text-[#183668] pl-2 [&>h1]:uppercase [&>h1]:font-bold [&>h1]:text-5xl [&>h1]:lg:text-[45px] [&>h1]:2xl:text-[58px]">
          <h1 className="">Become a Campus </h1>
          <h1 className="">Ambassador</h1>
          <p className="">
            Are you passionate about education, youth empowerment, and equal
            access to opportunities?
          </p>
        </div>

        <span className="relative w-full aspect-[1/0.7] mx-auto">
          <Image
            src={"/website-ui/thriverise-community.svg"}
            fill
            sizes="1024px"
            alt="Icon"
          />
        </span>
      </motion.div>
    </section>
  );
}
