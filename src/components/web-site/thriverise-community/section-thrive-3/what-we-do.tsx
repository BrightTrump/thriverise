"use client";
import React from "react";
import { motion } from "framer-motion";
export default function WhatWeDo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-8 md:gap-14 text-[#FFF8EB]"
    >
      <div className="max-w-lg grid gap-2.5 place-items-center mx-auto text-center">
        <h1 className="uppercase font-bold text-center text-4xl lg:text-6xl">
          What We Do
        </h1>
        <p>
          The ThriveRise Community Learning Centers bring education directly to
          underserved neighborhoods by offering:
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto font-bold grid md:grid-cols-2 gap-11 [&>div]:grid md:[&>div]:place-items-center md:[&>div]:mx-auto [&_span]:font-bold [&_span]:text-[80px] sm:[&_span]:text-8xl [&_span]:text-[#ffffff54] [&_p]:text-3xl md:[&_p]:text-4xl md:[&_p]:text-center ">
        <div>
          <span>01</span>
          <p>Free Basic Education for out-of-school children.</p>
        </div>
        <div>
          <span>02</span>
          <p>
            Safe Learning Spaces supported by volunteer teachers and mentors.
          </p>
        </div>
        <div>
          <span>03</span>
          <p>Small efforts lead to big change.</p>
        </div>
        <div>
          <span>04</span>
          <p>Small efforts lead to big change.</p>
        </div>
      </div>
    </motion.div>
  );
}
