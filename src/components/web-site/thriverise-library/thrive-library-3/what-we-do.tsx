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
          The ThriveRise Library is our digital access initiative designed to
          close this gap. Through the Library, students can:
        </p>
      </div>

      {/* Content */}
      <div className="font-bold grid md:grid-cols-2 gap-11 [&>div]:grid md:[&>div]:place-items-center md:[&>div]:mx-auto [&_span]:font-bold [&_span]:text-[80px] sm:[&_span]:text-8xl [&_span]:text-[#ffffff54] [&_p]:text-3xl md:[&_p]:text-4xl md:[&_p]:text-center ">
        <div>
          <span>01</span>
          <p>Request Free Academic Resources tailored to their needs</p>
        </div>
        <div>
          <span>02</span>
          <p>Host Helpful Events & Webinars to help students across Africa</p>
        </div>
        <div>
          <span>03</span>
          <p>
            Build a Culture of Knowledge Sharing by contributing useful
            materials.
          </p>
        </div>
        <div>
          <span>04</span>
          <p>
            Access Donated Study Materials and Research Tools sourced by our
            team and partners.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
