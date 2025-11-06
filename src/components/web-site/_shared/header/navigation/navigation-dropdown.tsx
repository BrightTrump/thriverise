import { Icon, Icons } from "@/ui";
import React, { useState } from "react";
import NavigationDropdownItem from "./navigation-dropdown-item";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavigationItem from "./navigation-item";
import { usePathname, useRouter } from "next/navigation";
import { useTopLoader } from "nextjs-toploader";
import { handleSmoothScroll } from "@/utils/website.util";

interface NavigationDropdownProps {
  title: string;
  navigations: { title: string; url?: string; scrollTo?: string }[];
}

export default function NavigationDropdown({
  title,
  navigations,
}: NavigationDropdownProps) {
  const loader = useTopLoader();
  const router = useRouter();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (url?: string, scrollTo?: string) => {
    setIsOpen(false);
    url && router.push(url);
    url && loader.start();
    scrollTo && handleSmoothScroll(scrollTo);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DropdownMenuTrigger
        asChild
        className="text-[#000000] font-medium cursor-pointer hidden lg:grid"
      >
        <span>
          <NavigationItem>
            {title}
            <Icon
              type={!isOpen ? Icons.ChevronDown : Icons.ChevronUp}
              size={20}
              color="#141414"
            />
          </NavigationItem>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-max hidden bg-white lg:grid grid-cols-[auto_330px] p-2.5 mt-2 left-0"
      >
        <div className="border-r border-[#E9E9E9]  pr-2.5 gap-2.5 grid">
          {navigations.map((navigation, index) => (
            <NavigationDropdownItem
              key={index}
              title={navigation.title}
              onClick={() => handleClick(navigation?.url, navigation?.scrollTo)}
              className={
                path !== "/coming-soon" && path === navigation.url
                  ? "lg:bg-[#FAFAFA] lg:border-[#E7E7E7]"
                  : ""
              }
            />
          ))}
        </div>

        <div className="pl-2.5">
          <NavigationDropdownItem
            // onClick={() => window.open(RAKISI_REQUEST_A_DEMO_LINK, "_blank")}
            title="Request a Demo"
            description="Let us show you how Rakisi makes the difference!"
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
