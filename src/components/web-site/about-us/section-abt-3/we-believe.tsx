"use client";
import React from "react";
import { motion } from "framer-motion";
export default function WeBelieve() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-8 text-[#FFF8EB]"
    >
      <div className="text-center">
        <h1 className="uppercase font-bold text-center text-4xl lg:text-6xl">
          We Believe
        </h1>
      </div>

      {/* Content */}
      <div className="grid md:grid-flow-col justify-between [&>div]:grid [&>div]:gap-1 [&_span]:text-[80px] sm:[&_span]:text-8xl [&_span]:text-[#ffffff54] [&_span]:font-bold [&_p]:text-3xl md:[&_p]:text-[40px]">
        <div>
          <span>01</span>
          <p>Everyone deserves a chance to learn.</p>
        </div>
        <div>
          <span>02</span>
          <p>Communities can rise when empowered.</p>
        </div>
        <div>
          <span>03</span>
          <p>Small efforts lead to big change.</p>
        </div>
      </div>
    </motion.div>
  );
}
