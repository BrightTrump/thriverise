"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, ButtonVariants } from "@/ui";
import Link from "next/link";

export default function SectionGetInv2() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-[#01AED9]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid lg:grid-cols-2 gap-3 lg:gap-24 items-center text-[#183668]"
      >
        <span className="relative w-full aspect-[1/0.7] ">
          <Image
            src={"/website-ui/volunteer.svg"}
            fill
            sizes="1024px"
            alt="Icon"
          />
        </span>

        <div className="grid gap-5 lg:gap-8 text-[#183668] pl-5">
          <div className="grid gap-2.5">
            <h1 className="uppercase font-bold text-2xl md:text-4xl">
              Volunteer With Us
            </h1>
            <p className="lg:max-w-md 2xl:max-w-xl">
              Be a part of something meaningful. We&apos;re always looking for
              passionate volunteers , teachers, creatives, project coordinators,
              tech folks, and social changemakers, to help bring our work to
              life.
            </p>
          </div>
          <div>
            <Link
              href={
                "https://docs.google.com/forms/d/1jUh68bTubd-SKx_iU__CB-6V4OAHhAjuKwiJdlaCpJI/viewform"
              }
              target="_blank"
            >
              <Button variant={ButtonVariants.YellowFilledRounded}>
                Sign Up to Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
