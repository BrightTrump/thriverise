"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionAbout2() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <div className="container mx-auto grid gap-5 items-center text-[#183668]">
        <div className="grid gap-2.5">
          <h1 className="text-6xl uppercase font-bold md:text-6xl">
            About ThriveRise Africa
          </h1>
          <p className="md:text-xl lg:max-w-4xl leading-relaxed">
            At ThriveRise, we believe that education and opportunity should
            never be a privilege. We're on a mission to create equitable access
            to learning, growth, and work for underserved children, youth, and
            students across Nigeria and Africa.
          </p>
        </div>
      </div>
    </section>
  );
}
