"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";
export default function SectionGetInv3() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-[#183668]">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid lg:grid-cols-2 gap-3 items-center text-white"
      >
        <div className="grid gap-2.5 order-2 lg:order-none pl-5">
          <h1 className="uppercase font-bold text-2xl md:text-4xl lg:text-5xl">
            Donate to Support Education Access
          </h1>
          <p className="">
            Every ₦1000, $1, or £1 you give helps us reach another learner with
            the tools they need to rise.
          </p>
          <p>Your donation supports:</p>

          <div className="grid gap-2.5 [&>div]:grid [&>div]:grid-cols-[auto_1fr] [&>div]:gap-2 [&>div]:items-center pb-4">
            <div>
              <Icon type={Icons.Dot} size={18} color="#027EBE" />
              <p>Free school supplies & educational materials</p>
            </div>
            <div>
              <Icon type={Icons.Dot} size={18} color="#027EBE" />
              <p>Digital resources for university students</p>
            </div>
            <div>
              <Icon type={Icons.Dot} size={18} color="#027EBE" />
              <p>Vocational training for underserved youth</p>
            </div>
            <div>
              <Icon type={Icons.Dot} size={18} color="#027EBE" />
              <p>Safe learning spaces in low-income communities</p>
            </div>
          </div>
          <div>
            <Link
              href={
                "https://docs.google.com/forms/d/1jUh68bTubd-SKx_iU__CB-6V4OAHhAjuKwiJdlaCpJI/viewform"
              }
              target="_blank"
            >
              <Button variant={ButtonVariants.SkyBlueWhiteFilledRounded}>
                Make a Donation Now
              </Button>
            </Link>
          </div>
        </div>

        <span className="relative w-full aspect-[1/0.7] mx-auto order-1 lg:order-none">
          <Image
            src={"/website-ui/donate-support.svg"}
            fill
            sizes="1024px"
            alt="Icon"
          />
        </span>
      </motion.div>
    </section>
  );
}
