"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button, ButtonVariants } from "@/ui";
import Image from "next/image";
import Link from "next/link";
export default function Section4() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="container 2xl:mx-auto lg:max-w-6xl py-10 sm:py-20 ml-7 sm:ml-auto bg-[#FDB813] rounded-bl-[60px] md:rounded-bl-[100px]"
    >
      {/* Content */}
      <div className="">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center text-[#183668]">
          <div className="grid gap-5 lg:gap-8 text-[#183668] order-2 lg:order-none pl-5">
            <div className="grid gap-2.5">
              <h1 className="uppercase font-bold text-2xl md:text-4xl">
                Become a Campus Ambassador
              </h1>
              <p className="lg:max-w-md 2xl:max-w-xl pr-5 md:pr-0">
                Are you passionate about education and student access? Join the
                ThriveRise Campus Ambassadors Program and become a voice for
                change in your university.
              </p>
            </div>
            <div>
              <Link
                href={"campus-ambassador"}
                // href={
                //   "https://docs.google.com/forms/d/1J0RqmPMn4Tek6jYBNRxef5WP4gUqGDGZanzDppYqDJ4/viewform"
                // }
              >
                <Button variant={ButtonVariants.SkyBlueFilledRounded}>
                  Join as a Campus Ambassador
                </Button>
              </Link>
            </div>
          </div>
          {/* <span className="relative w-full aspect-[1/0.7] mx-auto order-1 lg:order-none">
            <Image
              src={"/website-ui/campus-ambassador.svg"}
              fill
              sizes="1024px"
              alt="Icon"
            />
          </span> */}
          <div className="relative w-full aspect-[1/0.8] max-w-sm sm:max-w-full order-1 lg:order-none">
            <Image
              src="/website-ui/campus-ambassador.svg"
              fill
              alt="Campus Ambassador Illustration"
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {/* <span>
            <Image
              src={"/website-ui/campus-ambassador.svg"}
              width={500}
              height={500}
              className="w-full mx-auto order-1 lg:order-none"
              alt="Hero Image"
            />
          </span> */}
        </div>
      </div>
    </motion.section>
  );
}
