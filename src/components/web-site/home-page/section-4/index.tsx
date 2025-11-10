"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button, ButtonVariants } from "@/ui";
import Image from "next/image";
import Link from "next/link";
export default function Section4() {
  return (
    <section className="py-10 sm:py-20">
      <div className="container mx-auto pl-5 md:pl-52">
        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 pl-5 py-24 items-center bg-[#FDB813] rounded-bl-[60px] md:rounded-bl-[100px] text-[#183668]"
        >
          <div className="grid gap-5 lg:gap-8 text-[#183668] order-2 lg:order-none pl-5">
            <div className="grid gap-2.5">
              <h1 className="uppercase font-bold text-2xl md:text-4xl">
                Become a Campus Ambassador
              </h1>
              <p className="lg:max-w-sm 2xl:max-w-xl">
                Are you passionate about education and student access? Join the
                ThriveRise Campus Ambassadors Program and become a voice for
                change in your university.
              </p>
            </div>
            <div>
              <Link
                href={
                  "https://docs.google.com/forms/d/1J0RqmPMn4Tek6jYBNRxef5WP4gUqGDGZanzDppYqDJ4/viewform"
                }
                target="_blank"
              >
                <Button variant={ButtonVariants.SkyBlueFilledRounded}>
                  Join as a Campus Ambassador
                </Button>
              </Link>
            </div>
          </div>
          <span className="relative w-full aspect-[1/0.7] mx-auto order-1 lg:order-none">
            <Image
              src={"/website-ui/campus-ambassador.svg"}
              fill
              sizes="1024px"
              alt="Icon"
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
