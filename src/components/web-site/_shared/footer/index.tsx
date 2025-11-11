import React from "react";
import { Icon, Icons, Logo } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import Subscribe from "./subscribe";

const SOCIALS_SCHEMA = [
  { icon: Icons.Instagram, url: "https://www.instagram.com/entobohq/" },
  { icon: Icons.Twitter, url: "https://x.com/EntoboHQ" },
  { icon: Icons.Facebook, url: "https://www.facebook.com/entobohq/" },
  { icon: Icons.Linkedin, url: "https://www.linkedin.com/company/entobohq" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#141414] layout-spacing text-white">
      <div className="container mx-auto relative grid gap-10 sm:gap-20 top-10 [@media(min-width:_480px)_and_(max-width:_768px)]:top-16 md:top-20 lg:top-32 xl:top-40">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:justify-between items-start gap-20">
          <div className="grid gap-5 w-full">
            {/* Logo */}
            <Logo variant="white" className="w-36" />
            <div className="flex gap-2 [&>span]:relative [&>span]:w-6 [&>span]:h-6">
              <span>
                <Image
                  src={"/website-ui/footer-uk-icon.svg"}
                  fill
                  sizes="24px"
                  priority
                  alt="UK Icon"
                />
              </span>
              <span>
                <Image
                  src={"/website-ui/footer-9ja-icon.svg"}
                  fill
                  sizes="24px"
                  priority
                  alt="9ja Icon"
                />
              </span>
            </div>

            <div className="grid gap-1 max-w-xs">
              <h3 className="text-2xl">Have questions? We have answers.</h3>
              <p className="font-medium opacity-70">
                Send us an email via{" "}
                <Link href={"mailto:sales@entobo.com"} className="underline">
                  sales@entobo.com
                </Link>
              </p>
            </div>

            <div className="grid gap-3">
              {/* Socials */}
              <div className="grid grid-flow-col pt-2 pb-1 gap-4 w-max items-center">
                {SOCIALS_SCHEMA.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    className="w-7 h-7 rounded-full bg-white bg-opacity-15 grid place-content-center"
                  >
                    <Icon type={social.icon} size={16} color="#FFFFFF" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <nav className="w-max grid [&>div]:grid [&>div]:gap-5 [@media(max-width:_480px)]:grid-cols-[repeat(2,_auto)] grid-cols-[repeat(3,_auto)] gap-10 items-center">
            <div>
              <Link href={"/about-us"}>About Us</Link>
              <Link href={"/terms-of-services"}>Terms of Services</Link>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </div>
            <div>
              <Link href={"/pricing"}>Pricing</Link>
              <Link href={"/contact-us"}>Contact Us</Link>
              <Link href={"/coming-soon"}>Features</Link>
            </div>
            <div>
              <Link href={"/coming-soon"}>Integrations</Link>
              <Link href={"/coming-soon"}>Documentation</Link>
              <Link href={"/coming-soon"}>Blog</Link>
            </div>
          </nav>

          <Subscribe />
        </div>

        {/* Copy Right and Links */}
        <div className="grid border-t border-[#808080] pt-5">
          <p className="text-center opacity-70">
            All rights reserved. © 2025 Entobo.
          </p>
        </div>

        {/* Watermark */}
        <span className="relative opacity-10 aspect-[4/1] grid">
          <Image
            src={"/logo-white.svg"}
            fill
            sizes="(max-width:640px) 640px, (max-width:768px) 768px, 1500px"
            alt="Entobo Logo"
          />
        </span>
      </div>
    </footer>
  );
}
