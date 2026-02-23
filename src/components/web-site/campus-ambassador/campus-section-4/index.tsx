"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CampusSection4() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-[#007DBC]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
      >
        <span className="relative w-full aspect-[1/0.7] mx-auto">
          <Image
            src={"/website-ui/campus-ambassador-4.svg"}
            fill
            sizes="1024px"
            alt="Icon"
          />
        </span>

        <div className="grid gap-2.5 text-[#FFF8EB]">
          <h1 className="uppercase font-bold text-2xl md:text-4xl">
            What You&apos;ll Do
          </h1>

          <ul className="space-y-3">
            {[
              "Advocate for quality education (SDG 4) and decent work (SDG 8) among your peers.",
              "Help organize and promote ThriveRise events, workshops, and webinars on your campus.",
              "Serve as a link between students and ThriveRise, sharing resources like our Library, Tech Skills Initiative, and Academy.",
              "Build a community of students passionate about social impact, innovation, and leadership.",
              "Support outreach and awareness campaigns both online and offline.",
            ].map((text, index) => (
              <li
                key={index}
                className="grid grid-cols-[16px_1fr] items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#183668] justify-self-center"></span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
