"use client";
import { useCounter } from "@/hooks/counter.hooks";
import { Icon, Icons } from "@/ui";
import React from "react";
export default function Section3() {
  const { count: studentsCount, countRef: refStudent } = useCounter(1000, 5000);
  const { count: hourCount, countRef: refHour } = useCounter(100, 5000);
  const { count: countCenters, countRef: refCenters } = useCounter(1, 5000);
  const { count: countAmbassadors, countRef: refAmbassadors } = useCounter(
    15,
    5000
  );

  return (
    <section className="py-24 layout-spacing bg-[#02558B]">
      <div className="container mx-auto grid gap-16.5 sm:gap-20 place-items-center text-[#183668]">
        <div className="max-w-xl grid">
          <h1 className="uppercase font-bold text-center text-3xl text-white">
            Impact Stories
          </h1>
        </div>

        {/* Content */}
        <div className="px-5 mx-auto grid md:grid-cols-3 gap-5 [&>div]:bg-white [&>div]:rounded-lg [&>div]:p-5 [&_span]:px-1 [&_span]:pt-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:uppercase [&_div]:grid [&_div]:gap-2.5 [&_p]:text-lg">
          <div>
            <span className="pb-16">
              <Icon type={Icons.Quote} size={24} color="#183668" />
            </span>
            <div>
              <p>
                Before ThriveRise, I had no books for my final year project.
                Their library saved me.
              </p>
              <h2>Chidinma, Final-Year Student, UNILORIN</h2>
            </div>
          </div>

          <div>
            <span className="pb-24">
              <Icon type={Icons.Quote} size={24} color="#183668" />
            </span>
            <div>
              <p>
                Teaching at the Community Learning Center changed my life. I saw
                what access really means.
              </p>
              <h2>Peace, Volunteer Teacher</h2>
            </div>
          </div>

          <div>
            <span className="pb-24">
              <Icon type={Icons.Quote} size={24} color="#183668" />
            </span>
            <div>
              <p>
                We started small, but ThriveRise is creating a big wave for
                children like mine.
              </p>
              <h2>Local Parent, Tanke</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
