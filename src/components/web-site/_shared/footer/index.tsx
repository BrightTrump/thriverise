import React from "react";
import { Icon, Logo } from "@/ui";
import Link from "next/link";
import { SOCIALS_SCHEMA } from "@/constants/footer.constant";

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

          <nav className="grid sm:grid-flow-col items-start [&>div]:grid [&>div]:gap-5 [&_h3]:text-lg [&_h3]:uppercase [&_h3]:font-bold gap-10">
            <div>
              <h3>About ThriveRise Foundation for Educational Development</h3>
              <Link href={"/about-us"}>About Us</Link>
              <Link href={"#our-work"}>Our Work</Link>
              <Link href={"resources"}>Our Impact</Link>
            </div>

            <div>
              <h3>Get Involved</h3>
              <Link href={"get-involved#volunteer-section"}>Volunteer</Link>
              <Link href={"get-involved#donate-section"}>Donate</Link>
              <Link href={"get-involved#partner-section"}>Partner With Us</Link>
              <Link href={"campus-ambassador"}>Campus Ambassador Program</Link>
            </div>

            <div>
              <h3>Resources</h3>
              <Link href={"resources#blog-section"}>Blog</Link>
              <Link href={"resources#reports-section"}>Reports</Link>
              <Link href={"resources#press-media-section"}>Press Releases</Link>
              <Link href={"resources#press-media-section"}>Media & Press</Link>
            </div>
          </nav>
        </div>

        {/* Contact Info + Copyright */}
        <div className="w-full grid gap-6">
          {/* Contact details row */}
          <div className="grid sm:grid-flow-col sm:justify-start gap-5 sm:gap-10 text-sm opacity-80">
            {/* Address */}
            <div className="flex items-start gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 13-8 13S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>No. 2, Adeyinka Odukoya Street,<br />Amikanle, Alagbado, Lagos State, Nigeria</span>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.88a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
              </svg>
              <a href="tel:+2347025201857" className="hover:opacity-100">+234 702520 1857</a>
            </div>
            {/* Email */}
            <div className="flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <a href="mailto:hello@thriverisefoundation.org" className="hover:opacity-100">hello@thriverisefoundation.org</a>
            </div>
          </div>

          {/* Copyright, CAC, Legal */}
          <div className="w-full grid sm:grid-flow-col justify-between gap-4">
            <div className="grid gap-1 order-2 sm:order-none">
              <p className="opacity-70 text-sm">
                © 2026 ThriveRise Foundation for Educational Development. All Rights Reserved.
              </p>
              <p className="opacity-70 text-sm font-medium">
                CAC Registration No: 9442836
              </p>
              <p className="text-xs opacity-50">
                thriverisefoundation.org is the official website owned and operated by ThriveRise Foundation for Educational Development.
              </p>
            </div>
            <div className="grid grid-flow-col gap-4 justify-start sm:justify-end items-start order-1 sm:order-none text-sm">
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
              <Link href={"/terms-of-use"}>Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
