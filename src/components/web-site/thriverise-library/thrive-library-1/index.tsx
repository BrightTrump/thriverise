"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button, ButtonVariants } from "@/ui";
export default function ThriveLibrary1() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid lg:grid-cols-2 gap-3 items-center text-[#183668]"
      >
        <div className="grid">
          <div className="grid gap-2.5 text-[#183668] pl-2 [&>h1]:uppercase [&>h1]:font-bold [&>h1]:text-5xl [&>h1]:lg:text-[45px] [&>h1]:2xl:text-[58px]">
            <h1 className="">Breaking Barriers to Knowledge</h1>
            <p className="">
              A digital library where African students can request and access
              free academic resources.
            </p>
          </div>
          <div className="grid sm:grid-cols-[auto_1fr] gap-5 sm:gap-2 items-center">
            <Link href={"get-involved#volunteer-section"}>
              <Button variant={ButtonVariants.SkyBlueFilledRounded}>
                Volunteer
              </Button>
            </Link>
            <Link href={"get-involved#donate-section"}>
              <Button variant={ButtonVariants.SkyBlueFilledRounded}>
                Donate
              </Button>
            </Link>
          </div>
        </div>

        <span className="relative w-full aspect-[1/0.7] mx-auto">
          <Image
            src={"/website-ui/thriverise-community.svg"}
            fill
            sizes="1024px"
            alt="Icon"
          />
        </span>
      </motion.div>
    </section>
  );
}
