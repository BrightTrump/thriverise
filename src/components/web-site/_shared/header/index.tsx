"use client";
import React from "react";
import Navigation from "./navigation";
import { Button, ButtonVariants, Logo } from "@/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="container mx-auto py-5 px-5 z-20 sticky top-0 left-0 w-full bg-[#FFF8EB]">
      <div className="grid grid-flow-col justify-between lg:grid-cols-[auto_auto] items-center gap-8 lg:gap-16">
        {/* Logo */}
        <Link href="/" target="_blank" className="grid whitespace-nowrap">
          <Logo className="w-32" />
        </Link>

        {/* Navigation  */}
        <Navigation />

        <div className="hidden lg:grid grid-cols-2 gap-3">
          <Link href={"/login"} className="grid">
            <Button
              className="whitespace-nowrap border border-[#141414] rounded-xl"
              variant={ButtonVariants.BlackOutlinedRounded}
            >
              Sign in
            </Button>
          </Link>
          <Link
            href={"/"}
            target="_blank"
            className="grid whitespace-nowrap"
          >
            <Button variant={ButtonVariants.BlackFilledRounded}>
              See Entobo
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
