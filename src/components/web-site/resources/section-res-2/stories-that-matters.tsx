"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";

export default function StoriesGrid() {
  const stories = [
    {
      id: 1,
      title:
        "Bringing Books to the Streets The Journey of Our Campus Resource Drive",
      img: "/website-ui/resources-2.svg",
    },
    {
      id: 2,
      title: "What It's Like Learning at the ThriveRise Learning Center",
      img: "/website-ui/resources-3.svg",
    },
    {
      id: 3,
      title:
        "Why Access to Education Still Isn't Equal — and What We're Doing About It",
      img: "/website-ui/resources-4.svg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full"
    >
      <div id="blog-section" className="grid md:grid-cols-3 gap-8 px-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className="grid gap-2 border-2 border-[#183668] rounded-lg pb-4 bg-white overflow-hidden text-[#183668]"
          >
            {/* Image */}
            <div className="w-full h-[250px] relative">
              <Image
                src={story.img}
                alt={story.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <div className="px-2 min-h-[110px]">
              <h2 className="text-[22px] md:text-[26px] font-extrabold leading-tight">
                {story.title}
              </h2>
            </div>

            {/* Footer */}
            <div className="px-4 flex items-center justify-between pt-4">
              <p className="text-[16px] font-medium">Read more</p>
              <Link href={""}>
                <Button variant={ButtonVariants.YellowNoBgFilledRounded}>
                  <Icon type={Icons.ArrowRight} size={20} color="#183668" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
