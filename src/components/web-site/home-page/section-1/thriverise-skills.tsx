"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, ButtonVariants } from "@/ui";
import Link from "next/link";

export default function ThriveriseSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid lg:grid-cols-2 gap-3 lg:gap-24 items-center text-[#183668]"
    >
      <span className="relative w-full aspect-[1/0.7] ">
        <Image
          src={"/website-ui/thriverise-skills.svg"}
          fill
          sizes="1024px"
          alt="Icon"
        />
      </span>

      <div className="grid gap-5 lg:gap-8 text-[#183668] pl-5">
        <div className="grid gap-2.5">
          <h1 className="uppercase font-bold text-2xl md:text-4xl">
            Thrive Skills (SDG 8 Empowerment Track)
          </h1>
          <p className="lg:max-w-sm 2xl:max-w-xl">
            A skills empowerment program for youths, providing vocational
            training, job readiness, and entrepreneurship support.
          </p>
        </div>
        <div>
          <Link
            href={
              "https://docs.google.com/forms/d/1jUh68bTubd-SKx_iU__CB-6V4OAHhAjuKwiJdlaCpJI/viewform"
            }
            target="_blank"
            className="lg:hidden xl:block"
          >
            <Button variant={ButtonVariants.GreenFilledRounded}>
              Partner With Us
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
