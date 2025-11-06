import { Button, ButtonVariants, Icon, Icons, Logo } from "@/ui";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavigationItem from "./navigation-item";
import { AnimatePresence, motion, Variants } from "motion/react";
import MobileNavigationDropdown from "./mobile-navigation-dropdown";
import { SOLUTIONS_NAVIGATIONS } from "@/constants/home-page/navigation.constant";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const variants: Variants = {
    initial: () => ({
      height: 0,
      opacity: 0,
    }),
    animate: {
      height: "100%",
      opacity: 1,
    },
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <button className="lg:hidden" onClick={handleToggle}>
        <Icon type={Icons.Hamburger} size={32} color="#141414" />
      </button>

      {isOpen && (
        <AnimatePresence>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-white w-full h-[100svh] grid py-5 overflow-hidden"
          >
            <div className="grid gap-16 content-start overflow-hidden">
              {/* Logo and Close button */}
              <div className="px-5">
                <div className="container mx-auto grid grid-flow-col items-center justify-between">
                  <Logo variant="black" className="w-32 mx-auto" />

                  <button onClick={handleToggle}>
                    <Icon type={Icons.Close} size={32} color="#141414" />
                  </button>
                </div>
              </div>

              {/* Navigations */}
              <div className="overflow-y-auto custom-scroll-bar px-5">
                <div className="grid gap-8 container mx-auto">
                  <MobileNavigationDropdown
                    title="Features"
                    navigations={SOLUTIONS_NAVIGATIONS}
                    toggleMenu={handleToggle}
                  />

                  <NavigationItem url="/pricing" onClick={handleToggle}>
                    Pricing
                  </NavigationItem>
                  <NavigationItem url="/pricing" onClick={handleToggle}>
                    Pricing
                  </NavigationItem>
                </div>
              </div>

              {/* Call to actions */}
              <div className="px-5">
                <Link
                  href=""
                  target="_blank"
                  className="grid whitespace-nowrap"
                >
                  <Button variant={ButtonVariants.PrimaryFilled}>
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
