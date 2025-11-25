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
      className="grid lg:grid-flow-col gap-3 lg:gap-10 items-center text-[#183668] [&>div]:border-2 [&>div]:border-[#183668] [&>div]:rounded-lg [&>div]:h-fit"
    >
      <div>
        {/* <Image
          src={"/website-ui/thriverise-skills.svg"}
          fill
          sizes="1024px"
          alt="Icon"
        /> */}
        <Image
          src="/website-ui/resources-2.svg"
          width={400}
          height={400}
          className="w-full"
          alt="Saudat"
        />
        <div className="grid gap-2.5 px-2.5 py-3">
          <p className="font-bold text-xl md:text-2xl">
            Bringing Books to the Streets The Journey of Our Campus Resource
            Drive
          </p>
          <div className="grid grid-cols-[1fr_auto]  items-center">
            <Link href={""} className="md:text-lg">
              Read more
            </Link>
            <div>
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
      </div>

      {/* Image 2 */}
      <div>
        <Image
          src="/website-ui/resources-3.svg"
          width={400}
          height={400}
          className="w-full"
          alt="Saudat"
        />
        <div className="grid gap-2.5 px-2.5 py-3">
          <p className="font-bold text-xl md:text-2xl">
            What It's Like Volunteering at the ThriveRise Learning Center
          </p>
          <div className="grid grid-cols-[1fr_auto]  items-center">
            <Link href={""} className="md:text-lg">
              Read more
            </Link>
            <div>
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
      </div>

      {/* Image 3 */}
      <div>
        <Image
          src="/website-ui/resources-4.svg"
          width={400}
          height={400}
          className="w-full"
          alt="Saudat"
        />
        <div className="grid gap-2.5 px-2.5 py-3">
          <p className="font-bold text-xl md:text-2xl">
            Why Access to Education Still Isn&apos;t Equal — and What We&apos;re
            Doing About It
          </p>
          <div className="grid grid-cols-[1fr_auto]  items-center">
            <Link href={""} className="md:text-lg">
              Read more
            </Link>
            <div>
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
      </div>
    </motion.div>
  );
}
