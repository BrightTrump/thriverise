import React from "react";
import { ButtonProps } from "../types";

export default function CreamFilledRounded({
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
      className={`relative grid grid-flow-col gap-2 items-center justify-center 
        font-bold text-lg rounded-full transition-all duration-200
        ${
          disabled
            ? "opacity-60 cursor-not-allowed"
            : "cursor-pointer active:translate-y-0.5"
        }
        ${className}`}
    >
      {/* main button */}
      <span
        className={`relative inline-block px-5 py-2 rounded-full border border-[#183668] bg-[#01AED9] text-[#183668]`}
        style={{
          boxShadow: "4px 4px 0 #183668", // <-- solid offset shadow
        }}
      >
        {isLoading ? (
          <span className="block border-2 border-[#183668] border-b-transparent w-4 h-4 rounded-full animate-spin"></span>
        ) : (
          children
        )}
      </span>
    </button>
  );
}
