"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionAbout6() {
  return (
    <section className="py-20 layout-spacing bg-[#FDB813]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid gap-12 md:gap-24 text-[#183668]"
      >
        <div className="text-center">
          <h1 className="uppercase font-bold text-center text-4xl lg:text-6xl">
            Our Network
          </h1>
          <p className="md:text-lg">We are powered by a growing network of</p>
        </div>

        {/* Content */}
        <div className="font-bold grid md:grid-cols-2 gap-8 [&_h2]:text-[80px] sm:[&_h2]:text-8xl [&_h2]:text-[#58575754] [&_p]:text-3xl md:[&_p]:text-4xl">
          <div>
            <h2>01</h2>
            <p>Campus ambassadors across Nigerian universities</p>
          </div>
          <div>
            <h2>02</h2>
            <p>Volunteer educators & mentors</p>
          </div>
          <div>
            <h2>03</h2>
            <p>Community gatekeepers in local regions</p>
          </div>
          <div>
            <h2>04</h2>
            <p>
              Partners & supporters in education, tech, and development sectors
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
