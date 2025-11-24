"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionAbout8() {
  return (
    <section className="py-20 layout-spacing">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-12 md:gap-24 text-[#183668]"
      >
        <div className="text-center">
          <h1 className="uppercase font-bold text-center text-4xl lg:text-6xl">
            Recognitions for Our Work
          </h1>
          <div className="max-w-xl md:text-lg">
            <p>We are proud of the early impact our work is making.</p>
            <p>Though we are still growing, ThriveRise has already received:</p>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 font-bold [&_h2]:text-[80px] sm:[&_h2]:text-8xl [&_h2]:text-[#58575754] [&_p]:text-3xl md:[&_p]:text-4xl">
          <div>
            <h2>01</h2>
            <p>Positive feedback from communities and local education boards</p>
          </div>
          <div>
            <h2>02</h2>
            <p>
              Recognition by student groups and institutions for our resource
              drive
            </p>
          </div>
          <div>
            <h2>03</h2>
            <p>
              Collaboration requests from education advocates and tech platforms
            </p>
          </div>
          <div>
            <h2>04</h2>
            <p>Featured mentions in social impact networks</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
