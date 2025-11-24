import React from "react";
import { motion } from "framer-motion";

export default function SectionAbout6() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-[#FDB813]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 text-[#183668]"
      >
        <div className="text-center">
          <h1 className="uppercase font-bold text-center text-4xl lg:text-6xl">
            Our Network
          </h1>
          <p className="md:text-lg">We are powered by a growing network of</p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 justify-between [&>div]:grid [&>div]:gap-1 [&_span]:text-[80px] sm:[&_span]:text-8xl [&_span]:text-[#ffffff54] [&_span]:font-bold [&_p]:text-3xl md:[&_p]:text-[40px]">
          <div>
            <span>01</span>
            <p>Campus ambassadors across Nigerian universities</p>
          </div>
          <div>
            <span>02</span>
            <p>Volunteer educators & mentors</p>
          </div>
          <div>
            <span>03</span>
            <p>Community gatekeepers in local regions</p>
          </div>
          <div>
            <span>04</span>
            <p>
              Partners & supporters in education, tech, and development sectors
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
