"use client";
import React, { useState } from "react";
import { Icon, Icons } from "@/ui";
import {
  INDUSTRY_CARDS,
  INDUSTRY_CARDS_TABS,
} from "@/constants/home-page/cards.constant";

export default function Cards() {
  const [activeIndex, setActiceIndex] = useState(0);
  return (
    <div className="max-w-4xl mx-auto grid gap-3 content-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Card tabs */}
        {INDUSTRY_CARDS_TABS.map((card, index) => (
          <div
            key={index}
            onClick={() => setActiceIndex(index)}
            className={`grid grid-cols-[auto_1fr] items-center cursor-pointer gap-2 p-3 rounded-xl transition-all duration-300 ${
              card.cardBg
            } ${
              activeIndex === index
                ? "scale-100"
                : "opacity-80 hover:opacity-100"
            } ${
              index === 0
                ? "order-1"
                : index === 1
                ? "order-3"
                : index === 2
                ? "order-4"
                : "order-5"
            }
              sm:order-none`}
          >
            <div
              className={`w-6 h-6 grid place-items-center rounded-full ${card.iconBg}`}
            >
              <Icon type={Icons[card.icon]} size={16} color="#FFFFFF" />
            </div>
            <p className="text-[#000000] font-bold text-sm">{card.title}</p>
          </div>
        ))}

        {/* Main cards */}
        <div
          className={`container mx-auto grid lg:grid-flow-col gap-4 lg:gap-16 px-4 sm:px-16 py-24 bg-[url(${INDUSTRY_CARDS[activeIndex].cardBgSvg})] bg-no-repeat ${INDUSTRY_CARDS[activeIndex].cardBg} bg-cover bg-center rounded-4xl order-2 sm:order-none col-span-full transition-all duration-300`}
        >
          <div className="text-[#000000] max-w-sm sm:max-w-4xl text-2xl sm:text-4xl font-bold">
            <h2>{INDUSTRY_CARDS[activeIndex].headline}</h2>
          </div>
          <p className="font-semibold text-sm sm:text-base text-[#000000]">
            {INDUSTRY_CARDS[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}
