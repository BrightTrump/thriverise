import React from "react";
import { Icon, Logo } from "@/ui";
import Link from "next/link";
import { SOCIALS_SCHEMA } from "@/constants/footer.constant";

export default function Footer() {
  return (
    <footer className="py-20 sm:pb-2 layout-spacing overflow-hidden bg-[url(/website-ui/footer-figure-image.png)] bg-no-repeat sm:bg-cover bg-right bg-[#0052FE] text-white">
      <div className="grid gap-5 w-full justify-center">
        {/* Logo */}
        <Logo variant="colored" className="w-36" />
        {/* Socials */}
        <div className="grid grid-flow-col gap-2 justify-center align-middle items-center">
          {SOCIALS_SCHEMA.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              className="w-7 h-7 rounded-full bg-opacity-15 grid place-content-center"
            >
              <Icon type={social.icon} size={18} color="#FFFFFF" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
