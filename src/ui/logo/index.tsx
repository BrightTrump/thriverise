"use client";

import React from "react";
import { LogoProps } from "./types";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";

export function Logo({ type, variant, className, width, height }: LogoProps) {
  const isAuth = Boolean(Cookies.get("token"));

  const logoSrc =
    type === "collapsed"
      ? variant === "white"
        ? ""
        : variant === "blue"
        ? "/website-ui/thriverise-logo.svg"
        : variant === "black"
        ? ""
        : ""
      : variant === "colored"
      ? "/website-ui/thriverise-logo.svg"
      : variant === "white"
      ? "/website-ui/thriverise-logo.svg"
      : "/website-ui/thriverise-logo.svg";

  return (
    <Link
      href={"/"}
      className={`relative grid ${
        type === "collapsed" ? "aspect-[1/1]" : "aspect-[1/0.25]"
      } ${className || "w-32"}`}
    >
      <Image
        src={logoSrc}
        alt="Thriverise Logo"
        fill
        className="object-contain"
        sizes="300px"
      />
    </Link>
  );
}
