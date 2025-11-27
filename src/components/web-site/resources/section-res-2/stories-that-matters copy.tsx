"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";

export default function StoriesThatMatters() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid lg:grid-flow-col gap-3 lg:gap-10 items-start text-[#183668]
      [&>div]:border-2 [&>div]:border-[#183668] [&>div]:rounded-lg
      [&>div]:h-[520px] [&>div]:grid [&>div]:grid-rows-[auto_1fr]"
    >
      {/* Card 1 */}
      <div>
        <Image
          src="/website-ui/resources-2.svg"
          width={400}
          height={400}
          className="w-full"
          alt="Saudat"
        />

        <div className="grid content-between gap-2.5 px-2.5 py-3">
          <p className="font-bold text-xl md:text-2xl">
            Bringing Books to the Streets The Journey of Our Campus Resource
            Drive
          </p>

          <div className="grid grid-cols-[1fr_auto] items-center">
            <Link href={""} className="md:text-lg">
              Read more
            </Link>
            <Link href={""}>
              <Button
                variant={ButtonVariants.YellowNoBgFilledRounded}
                className="cursor-pointer"
              >
                <Icon type={Icons.ArrowRight} size={20} color="#183668" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div>
        <Image
          src="/website-ui/resources-3.svg"
          width={400}
          height={280}
          className="w-full"
          alt="Saudat"
        />

        <div className="grid content-between gap-2.5 px-2.5 py-3">
          <p className="font-bold text-xl md:text-2xl">
            What It's Like Volunteering at the ThriveRise Learning Center
          </p>

          <div className="grid grid-cols-[1fr_auto] items-center">
            <Link href={""} className="md:text-lg">
              Read more
            </Link>
            <Link href={""}>
              <Button
                variant={ButtonVariants.YellowNoBgFilledRounded}
                className="cursor-pointer"
              >
                <Icon type={Icons.ArrowRight} size={20} color="#183668" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div>
        <Image
          src="/website-ui/resources-4.svg"
          width={400}
          height={400}
          className="w-full"
          alt="Saudat"
        />

        <div className="grid content-between gap-2.5 px-2.5 py-3">
          <p className="font-bold text-xl md:text-2xl">
            Why Access to Education Still Isn&apos;t Equal — and What We&apos;re
            Doing About It
          </p>

          <div className="grid grid-cols-[1fr_auto] items-center">
            <Link href={""} className="md:text-lg">
              Read more
            </Link>
            <Link href={""}>
              <Button
                variant={ButtonVariants.YellowNoBgFilledRounded}
                className="cursor-pointer"
              >
                <Icon type={Icons.ArrowRight} size={20} color="#183668" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
