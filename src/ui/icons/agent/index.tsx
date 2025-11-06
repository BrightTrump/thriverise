import React from "react";
import { IconProps } from "../types";

export default function Agent({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 8C12.1569 8 13.5 6.65685 13.5 5C13.5 3.34315 12.1569 2 10.5 2C8.84315 2 7.5 3.34315 7.5 5C7.5 6.65685 8.84315 8 10.5 8Z"
        fill={color}
      />
      <path
        d="M3.96517 14.4935C3.77029 15.0016 3.94435 15.571 4.3742 15.9046C6.06656 17.218 8.19202 18 10.5001 18C12.8106 18 14.938 17.2164 16.6312 15.9006C17.0608 15.5667 17.2345 14.9971 17.0393 14.4892C16.0301 11.8635 13.4842 10 10.5031 10C7.52032 10 4.97329 11.8656 3.96517 14.4935Z"
        fill={color}
      />
    </svg>
  );
}
