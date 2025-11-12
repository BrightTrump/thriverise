import React from "react";
import { Icon, Icons, Logo } from "@/ui";
import Link from "next/link";

const SOCIALS_SCHEMA = [
  { icon: Icons.Instagram, url: "" },
  { icon: Icons.Twitter, url: "" },
  { icon: Icons.Facebook, url: "" },
  { icon: Icons.Linkedin, url: "" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden layout-spacing text-[#183668] pb-32 md:pb-56 2xl:pb-72">
      <div className="w-full container mx-auto relative grid gap-10 sm:gap-20 [@media(min-width:_480px)_and_(max-width:_768px)]:top-16 top-32 xl:top-40">
        <div className="grid lg:grid-flow-col lg:justify-between items-start gap-20">
          <div className="grid gap-5 w-full md:w-max">
            {/* Logo */}
            <Logo variant="white" className="w-32 h-32" />

            {/* Support Email */}
            {/* <div className="grid gap-1 max-w-xs">
              <h3 className="text-2xl">Have questions? We have answers.</h3>
              <p className="font-medium opacity-70">
                Send us an email via{" "}
                <Link
                  href={"mailto:support@thriverise.com"}
                  className="underline"
                >
                  support@thriverise.com
                </Link>
              </p>
            </div> */}

            <div className="grid gap-3">
              {/* Socials */}
              <div className="grid grid-flow-col pt-2 pb-1 gap-4 w-max items-center">
                {SOCIALS_SCHEMA.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    className="w-7 h-7 rounded-full border border-[#183668] bg-[#01AED9] bg-opacity-15 grid place-content-center"
                  >
                    <Icon type={social.icon} size={16} color="#183668" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <nav className="grid sm:grid-flow-col [&>div]:grid [&>div]:gap-5 [&_h3]:text-lg [&_h3]:uppercase [&_h3]:font-bold gap-10 items-center">
            <div>
              <h3>About Thriverise</h3>
              <Link href={"/about-us"}>About Us</Link>
              <Link href={"/terms-of-services"}>Terms of Services</Link>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </div>
            <div>
              <h3>Get Involved</h3>
              <Link href={"/pricing"}>Pricing</Link>
              <Link href={"/contact-us"}>Contact Us</Link>
              <Link href={"/coming-soon"}>Features</Link>
            </div>
            <div>
              <h3>Resources</h3>
              <Link href={"/coming-soon"}>Integrations</Link>
              <Link href={"/coming-soon"}>Documentation</Link>
              <Link href={"/coming-soon"}>Blog</Link>
            </div>
          </nav>
        </div>

        {/* Copy Right and Links */}
        <div className="grid sm:grid-flow-col justify-between gap-7">
          <div className="grid order-2 sm:order-none">
            <p className="text-center opacity-70">
              © 2025 ThriveRise Africa. All Rights Reserved.
            </p>
          </div>
          <div className="grid grid-flow-col sm:grid-cols-[auto_1fr] sm:gap-2 justify-between order-1 sm:order-none">
            <Link href={""}>Privacy Policy</Link>
            <Link href={""}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
