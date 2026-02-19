"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";

export default function PressRelease() {
  const stories = [
    {
      id: 1,
      title: "ThriveRise Launches Community Learning Center in Tanke, Ilorin",
      img: "/website-ui/resources-5.svg",
      link: "https://www.linkedin.com/posts/boluwatifemercyadeleke_yesterday-on-behalf-of-thriverise-i-paid-activity-7369315972509286402-6fOZ?utm_source=share&utm_medium=member_ios&rcm=ACoAADbnGKsBvDZDsJvjlNoAEfX7dyr0fPiPl6I",
    },
    {
      id: 2,
      title:
        "Partnership Announced with Kwara State Ministry of Education and Human Capital Development",
      img: "/website-ui/resources-6.svg",
      link: "https://www.linkedin.com/posts/thriverise_we-are-thrilled-to-announce-our-partnership-activity-7369345076935692290-2CgL?utm_source=share&utm_medium=member_ios&rcm=ACoAADbnGKsBvDZDsJvjlNoAEfX7dyr0fPiPl6I",
    },
    {
      id: 3,
      title:
        "ThriveRise Recognized Among Top Youth-Driven NGOs to Watch in 2025",
      img: "/website-ui/resources-7.svg",
      link: "",
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
      <div className="grid md:grid-cols-3 gap-8 px-4">
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
            <Link
              href={story.link}
              target="_blank"
              className="px-4 flex items-center justify-between pt-4"
            >
              <p className="text-[16px] font-medium">Read more</p>

              <Button variant={ButtonVariants.YellowNoBgFilledRounded}>
                <Icon type={Icons.ArrowRight} size={20} color="#183668" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
