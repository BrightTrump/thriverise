import { useCounter } from "@/hooks/counter.hooks";
import React from "react";
export default function Section2() {
  const { count, countRef } = useCounter(1000, 5000);
  return (
    <section className="py-24 layout-spacing">
      <div className="container mx-auto grid gap-16.5 sm:gap-20 place-items-center text-[#183668]">
        <div className="max-w-xl grid">
          <h1 className="uppercase font-bold text-center text-3xl">
            Our Impact So Far
          </h1>
        </div>

        {/* Content */}
        <div
          ref={countRef}
          className="px-5 mx-auto grid sm:grid-cols-2 xl:grid-cols-4 gap-5 text-center xl:text-left [&>div]:grid [&>div]:gap-4 [&>div]:items-start [&>div]:justify-items-center [&>div]:place-items-center [&>div]:xl:justify-items-start [&_span]:text-3xl sm:[&_span]:text-5xl [&_span]:font-bold"
        >
          <div>
            <span>{count}+</span>
            <p>Students Reached through resource drives & events</p>
          </div>
          <div>
            <span>100+</span>
            <p>Volunteer Hours contributed by teachers & mentors</p>
          </div>
          <div>
            <span>1</span>
            <p>Active Learning Center with more on the way</p>
          </div>
          <div>
            <span>15</span>
            <p>University Ambassadors driving awareness nationwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
