"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";

export default function SectionTeam4() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-[#FDB813]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid lg:grid-cols-2 gap-3 lg:gap-24 items-center text-[#183668]"
      >
        <span className="relative w-full aspect-[1/0.7] ">
          <Image
            src={"/website-ui/partner-with.svg"}
            fill
            sizes="1024px"
            alt="Icon"
          />
        </span>
        <div className="grid gap-2.5 order-2 lg:order-none pl-5">
          <h1 className="uppercase font-bold text-2xl md:text-4xl lg:text-5xl">
            Partner With Us
          </h1>
          <p className="">
            Are you an organization, brand, foundation, or institution
            passionate about youth empowerment and access to education? <br />{" "}
            Let&apos;s work together!
          </p>
          <p>We&apos;re open to:</p>

          <div className="grid gap-2.5 [&>div]:grid [&>div]:grid-cols-[auto_1fr] [&>div]:gap-2 [&>div]:items-center pb-4">
            <div>
              <Icon type={Icons.Dot} size={18} color="#027EBE" />
              <p>In-kind donations (books, tech, materials)</p>
            </div>
            <div>
              <Icon type={Icons.Dot} size={18} color="#027EBE" />
              <p>Internship & mentorship opportunities for students</p>
            </div>
            <div>
              <Icon type={Icons.Dot} size={18} color="#027EBE" />
              <p>Grant support for our library or learning centers</p>
            </div>
            <div>
              <Icon type={Icons.Dot} size={18} color="#027EBE" />
              <p>Awareness partnerships with student groups or CSR teams</p>
            </div>
          </div>
          <div>
            <Link
              href={
                "https://docs.google.com/forms/d/1jUh68bTubd-SKx_iU__CB-6V4OAHhAjuKwiJdlaCpJI/viewform"
              }
              target="_blank"
            >
              <Button variant={ButtonVariants.SkyBlueFilledRounded}>
                Request a Partnership Proposal
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
