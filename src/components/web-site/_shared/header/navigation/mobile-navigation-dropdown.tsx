import React, { useState } from "react";
import NavigationDropdownItem from "./navigation-dropdown-item";
import NavigationItem from "./navigation-item";
import { Icon, Icons } from "@/ui";
import { useRouter } from "next/navigation";
import { useTopLoader } from "nextjs-toploader";
import { handleSmoothScroll } from "@/utils/website.util";

interface MobileNavigationDropdownProps {
  title: string;
  navigations: { title: string; url?: string; scrollTo?: string }[];
  toggleMenu?: () => void;
}

export default function MobileNavigationDropdown({
  title,
  navigations,
  toggleMenu,
}: MobileNavigationDropdownProps) {
  const loader = useTopLoader();
  const router = useRouter();
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const handleClick = (url?: string, scrollTo?: string) => {
    toggleMenu?.();
    setIsMobileDropdownOpen(false);
    url && router.push(url);
    url && loader.start();
    scrollTo && handleSmoothScroll(scrollTo);
  };

  return (
    <div className="lg:hidden">
      <NavigationItem
        className="w-full text-left justify-between"
        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
      >
        {title}
        <Icon
          type={isMobileDropdownOpen ? Icons.ChevronUp : Icons.ChevronDown}
          size={32}
          color="#141414"
        />
      </NavigationItem>

      <div
        className={`overflow-hidden transition-all ${
          isMobileDropdownOpen ? "max-h-max" : "max-h-0"
        }`}
      >
        {navigations.map((navigation, index) => (
          <NavigationDropdownItem
            key={index}
            title={navigation.title}
            onClick={() => handleClick(navigation?.url, navigation?.scrollTo)}
          />
        ))}
      </div>
    </div>
  );
}
