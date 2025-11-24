"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icon, Icons } from "@/ui";
export default function SectionGetInv3() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid lg:grid-cols-2 gap-3 items-center text-[#183668]"
      >
        <div className="grid gap-2.5 text-[#183668] order-2 lg:order-none pl-5">
          <h1 className="uppercase font-bold text-2xl md:text-4xl lg:text-5xl">
            Donate to Support Education Access
          </h1>
          <p className="">
            Every ₦1000, $1, or £1 you give helps us reach another learner with
            the tools they need to rise.
          </p>
          <p>Your donation supports:</p>

          <div>
            <div>
              <Icon type={Icons.Check} size={16} color="#183668" />
              <p>Free school supplies & educational materials</p>
            </div>
          </div>
        </div>

        <span className="relative w-full aspect-[1/0.7] mx-auto order-1 lg:order-none">
          <Image
            src={"/website-ui/thriverise-moment.svg"}
            fill
            sizes="1024px"
            alt="Icon"
          />
        </span>
      </motion.div>
    </section>
  );
}
