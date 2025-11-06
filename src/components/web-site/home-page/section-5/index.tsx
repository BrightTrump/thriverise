import { Icon, Icons } from "@/ui";

import React from "react";

export default function Section5() {
  return (
    <section className="py-10 sm:py-20 grid gap-24 items-center bg-[#FFFFFF]">
      <div className="container mx-auto max-w-5xl p-12 grid gap-5 text-center text-[#000000] bg-[#FAFAFA] rounded-4xl">
        <h2 className="text-3xl sm:text-4xl">
          <span className="font-bold">Frequently Asked</span>{" "}
          <span className="italic">Questions </span>{" "}
        </h2>
        <p className="text-[#586272]">
          Find answers to common queries and concerns.
        </p>

        {/* FAQ Card */}
        <div className="grid gap-2.5 [&>div]:">
          <div className="w-full max-w-4xl bg-[#FFFFFF] flex justify-between items-center rounded-xl p-2">
            <p>What is Rakisi?</p>
            <Icon type={Icons.ChevronDown} size={18} color="#000000" />
          </div>
          <div className="w-full max-w-4xl bg-[#FFFFFF] flex justify-between items-center rounded-xl p-2">
            <p>What is Rakisi?</p>
            <Icon type={Icons.ChevronDown} size={18} color="#000000" />
          </div>
          <div className="w-full max-w-4xl bg-[#FFFFFF] flex justify-between items-center rounded-xl p-2">
            <p>What is Rakisi?</p>
            <Icon type={Icons.ChevronDown} size={18} color="#000000" />
          </div>
          <div className="w-full max-w-4xl bg-[#FFFFFF] flex justify-between items-center rounded-xl p-2">
            <p>What is Rakisi?</p>
            <Icon type={Icons.ChevronDown} size={18} color="#000000" />
          </div>
        </div>
      </div>
    </section>
  );
}
