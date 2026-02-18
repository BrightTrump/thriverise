"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./navigation";
import { Button, ButtonVariants, Logo } from "@/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleHeaderScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleHeaderScroll);
    return () => window.removeEventListener("scroll,", handleHeaderScroll);
  }, []);

  return (
    <header
      className={`layout-spacing py-14 lg:py-5 z-20 sticky top-0 left-0 w-full bg-[#FFF8EB] ${isScrolled ? "py-10" : "py-14"}`}
    >
      <div className="container mx-auto grid grid-flow-col justify-between lg:grid-cols-[auto_auto_auto] items-center gap-8 lg:gap-16">
        {/* Logo */}
        <Logo className="w-14 h-14 lg:w-20 lg:h-20" />

        {/* Navigation  */}
        <Navigation />

        <div className="hidden lg:grid grid-flow-col gap-2.5">
          <Link
            href={"get-involved#volunteer-section"}
            className="lg:hidden xl:block"
          >
            <Button className="" variant={ButtonVariants.CreamFilledRounded}>
              Join Us
            </Button>
          </Link>
          <Link href={"get-involved#donate-section"}>
            <Button variant={ButtonVariants.SkyBlueFilledRounded}>
              Donate Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
