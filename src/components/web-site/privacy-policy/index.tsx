import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";
import React from "react";
export default function PrivacyPolicy() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <div className="container mx-auto max-w-6xl grid gap-3 items-center place-items-center text-[#183668]">
        <div className="grid gap-2.5 order-2 lg:order-none pl-5">
          <h1 className="uppercase font-bold text-2xl md:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="">
            Your privacy is important to us at ThriveRise Africa. Here's how we
            handle your data:
          </p>
          <p>Your donation supports:</p>

          <div className="grid gap-2.5 [&>div]:grid [&>div]:grid-cols-[auto_1fr] [&>div]:gap-2 [&>div]:items-center pb-4">
            <div>
              <Icon type={Icons.Dot} size={18} color="#027EBE" />
              <p>Free school supplies & educational materials</p>
            </div>
            <div>
              <Icon type={Icons.Dot} size={18} color="#027EBE" />
              <p>Digital resources for university students</p>
            </div>
            <div>
              <Icon type={Icons.Dot} size={18} color="#027EBE" />
              <p>Vocational training for underserved youth</p>
            </div>
            <div>
              <Icon type={Icons.Dot} size={18} color="#027EBE" />
              <p>Safe learning spaces in low-income communities</p>
            </div>
          </div>
          <div>
            <Link
              href={
                "https://docs.google.com/forms/d/1jUh68bTubd-SKx_iU__CB-6V4OAHhAjuKwiJdlaCpJI/viewform"
              }
              target="_blank"
            >
              <Button variant={ButtonVariants.SkyBlueWhiteFilledRounded}>
                Make a Donation Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
