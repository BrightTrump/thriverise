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

          <nav className="grid sm:grid-flow-col items-start [&>div]:grid [&>div]:gap-5 [&_h3]:text-lg [&_h3]:uppercase [&_h3]:font-bold gap-10">
            <div>
              <h3>About Thriverise</h3>
              <Link href={"/about-us"}>About Us</Link>
              <Link href={"/our-work"}>Our Work</Link>
              <Link href={"/our-impact"}>Our Impact</Link>
            </div>

            <div>
              <h3>Get Involved</h3>
              <Link
                href={
                  "https://docs.google.com/forms/d/1pEjrGav1yRNVdfsIQvWyBx9JeeNtoqO_llAMyC34VaI/viewform"
                }
                target="_blank"
              >
                Volunteer
              </Link>
              <Link
                href={
                  "https://docs.google.com/forms/d/1k52tfwcK-_ZZik_RgSZJm4IIIByB_Nj9fovUBTT-eGM/viewform"
                }
                target="_blank"
              >
                Donate
              </Link>
              <Link
                href={
                  "https://docs.google.com/forms/d/1jUh68bTubd-SKx_iU__CB-6V4OAHhAjuKwiJdlaCpJI/viewform"
                }
                target="_blank"
              >
                Partner With Us
              </Link>
              <Link
                href={
                  "https://docs.google.com/forms/d/1J0RqmPMn4Tek6jYBNRxef5WP4gUqGDGZanzDppYqDJ4/viewform"
                }
                target="_blank"
              >
                Campus Ambassador Program
              </Link>
            </div>

            <div>
              <h3>Resources</h3>
              <Link href={"/coming-soon"}>Blog</Link>
              <Link href={"/coming-soon"}>Reports</Link>
              <Link href={"/coming-soon"}>Press Releases</Link>
              <Link href={"/coming-soon"}>Media & Press</Link>
            </div>
          </nav>
        </div>

        {/* Copy Right and Links */}
        <div className="w-full grid sm:grid-flow-col justify-between gap-7">
          <div className="grid order-2 sm:order-none">
            <p className="opacity-70">
              © 2025 ThriveRise Africa. All Rights Reserved.
            </p>
          </div>
          <div className="grid grid-flow-col gap-2 justify-between order-1 sm:order-none">
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
            <Link href={"/terms-of-services"}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
