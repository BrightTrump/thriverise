import React from "react";
import { Icon, Icons } from "@/ui";
import {
  CHALLENGE_CARD,
  CHALLENGE_CARD_2,
} from "@/constants/home-page/cards.constant";

export default function Section4() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-white ">
      <div className="container mx-auto max-w-screen-2xl  grid gap-24 items-center place-items-center">
        <div className="max-w-2xl grid [&>h1]:text-2xl [&>h1]:text-center [&>h1]:sm:text-3xl [&>h1]:text-[#020912] font-bold">
          <h1>
            Why Rakisi Would Be The Best Decision Your Insurance Business Could
            Ever Make
          </h1>
        </div>

        <div className="max-w-5xl container mx-auto grid lg:grid-flow-col gap-12 items-center p-2 bg-[#E6EEFF] rounded-4xl">
          <div className="p-5 sm:p-12 rounded-4xl">
            <div className="max-w-2xs text-[#0052FE] font-bold text-2xl pb-7">
              <h1>Challenge</h1>
            </div>

            <div className="grid gap-4 [&_p]:text-[#0052FE] text-sm sm:text-base">
              {CHALLENGE_CARD.map((card, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[auto_1fr] gap-2 items-center w-full"
                >
                  <div className="w-6 h-6 grid place-items-center rounded-full bg-[#0052FE]">
                    <Icon type={Icons.Wrong} size={16} color="#FFFFFF" />
                  </div>
                  <p>{card.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 sm:p-12 bg-[#0052FE] rounded-4xl">
            <div className="max-w-2xs text-[#FFFFFF] text-2xl pb-7">
              <h1 className="font-bold">With Rakisi</h1>
            </div>

            {/* Content with Icons */}
            <div className="grid gap-4 [&_p]:text-[#FFFFFF] text-sm sm:text-base">
              {CHALLENGE_CARD_2.map((card, index) => (
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
      </div>
    </section>
  );
}
