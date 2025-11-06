import { Icon, Icons } from "@/ui";
import React from "react";

interface NavigationDropdownItemProps {
  title: string;
  description?: string;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function NavigationDropdownItem({
  title,
  description,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: NavigationDropdownItemProps) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`w-full text-left cursor-pointer grid grid-cols-[1fr_auto] gap-3 items-center rounded-lg py-3.5 lg:px-2.5 border border-transparent transition-all lg:hover:bg-[#F6F6F6] lg:hover:border-[#E7E7E7] ${className}`}
    >
      <div className="grid gap-1">
        <h3 className="font-medium lg:font-bold w-max">{title}</h3>
        {description && (
          <p className="text-sm text-[#555555] font-medium">{description}</p>
        )}
      </div>
      <span className="hidden lg:grid">
        <Icon type={Icons.ChevronRight} size={16} color="#141414" />
      </span>
    </button>
  );
}
