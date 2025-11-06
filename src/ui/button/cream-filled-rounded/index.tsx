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
      className={`grid grid-flow-col gap-2 bg-[#FFF8EB] cursor-pointer border border-[#183668] text-[#183668] rounded-4xl items-center justify-center font-semibold text-lg px-5 py-2 ${
        disabled && "opacity-60"
      } ${className}`}
    >
      {isLoading && (
        <span className="block border-2 border-[#183668] border-b-transparent w-4 h-4 rounded-full animate-spin"></span>
      )}

      {!isLoading && children}
    </button>
  );
}
