"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionTeam3() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-[#183668]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid gap-16 text-white"
      >
        <div className="text-center">
          <h1 className="uppercase font-bold text-3xl sm:text-4xl lg:text-5xl">
            Our Directors
          </h1>
        </div>
        <div className="grid lg:grid-flow-col gap-7 lg:gap-12 lg:px-24">
          <Image
            src="/website-ui/abt-img-3.svg"
            width={400}
            height={400}
            className="w-full"
            alt="Saudat"
          />

          <div className="pl-2">
            <p>
              Saudat Imam is the Director of Education at ThriveRise, where she
              leads the design and execution of innovative learning strategies
              that bridge education and technology. With expertise in product
              management, curriculum design, and digital learning, she drives
              programs that empower learners and educators while ensuring
              scalable impact. Passionate about inclusive and future-ready
              education, Saudat focuses on creating transformative learning
              experiences that prepare individuals and communities for the
              evolving world of work.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
