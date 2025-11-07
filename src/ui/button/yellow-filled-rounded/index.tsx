import React from "react";
import { ButtonProps } from "../types";

export default function YellowFilledRounded({
  children,
  className,
  disabled,
  isLoading,
  onClick,
  type,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`grid grid-flow-col gap-2 items-center justify-center 
        font-bold text-lg rounded-4xl border border-[#183668] bg-[#FDB813] text-[#183668] px-5 py-3 transition-all duration-200
        ${
          disabled
            ? "opacity-60 cursor-not-allowed"
            : "cursor-pointer active:translate-y-0.5"
        }
        ${className}`}
      style={{
        boxShadow: "4px 4px 0 #183668",
      }}
    >
      {isLoading ? (
        <span className="block border-2 border-[#183668] border-b-transparent w-4 h-4 rounded-full animate-spin"></span>
      ) : (
        children
      )}
    </button>
  );
}
