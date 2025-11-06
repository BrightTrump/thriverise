import React from "react";
import { Icon, Icons } from "@/ui";
import { BENEFITS_CARD } from "@/constants/home-page/cards.constant";

export default function Section2() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div className="max-w-xl grid gap-2.5 [&>h1]:text-2xl sm:[&>h1]:text-[40px] [&>h1]:text-[#020912] [&>p]:text-[#000000]">
          <h1>
            <span className="font-bold">Welcome to the</span>{" "}
            <span className="italic">Future</span>{" "}
            <span className="font-bold">of Insurance. Welcome to Rakisi.</span>{" "}
          </h1>
          <p>
            Choosing the right technology partner is one of the most important
            decisions an insurance business can make. It&apos;s more than
            software, it&apos;s about building the foundation that will carry
            your operations into the future. With Rakisi, the only question
            isn&apos;t if you&apos;ll grow, but just how far we can help you go.
          </p>
        </div>

        {/* Bigger Card */}
        <div className="px-5 py-12 sm:p-12 bg-[url(/website-ui/benefits-glance.png)] bg-no-repeat bg-[#475467] bg-cover bg-center rounded-4xl">
          <div className="max-w-2xl sm:max-w-2xs text-[#FFFFFF] text-2xl sm:text-4xl pb-6 sm:pb-12">
            <h1>
              <span className="font-bold">Future</span>{" "}
              <span className="italic">Benefits</span>{" "}
              <span className="font-bold">at a Glance</span>{" "}
            </h1>
          </div>

          {/* Content with Icons */}
          <div className="grid gap-4 [&_p]:text-[#FFFFFF] text-sm sm:text-base">
            {BENEFITS_CARD.map((card, index) => (
              <div
                key={index}
                className="grid grid-cols-[auto_1fr] gap-2 items-center w-full"
              >
                <div className="w-6 h-6 grid place-items-center rounded-full bg-white">
                  <Icon type={Icons.Check} size={16} color="#000000" />
                </div>
                <p>{card.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
