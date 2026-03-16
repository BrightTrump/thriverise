"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function SectionContact2() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-[#183668]">
      <div className="container mx-auto max-w-4xl grid gap-4">
        <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Can I donate books or learning materials?
            </AccordionTrigger>
            <AccordionContent>
              Yes! Reach out via email or DM, and we&apos;ll guide you on what’s
              most needed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Where can I volunteer?</AccordionTrigger>
            <AccordionContent>
              You can volunteer virtually or in person (currently in Kwara
              State)or <br /> Visit our{" "}
              <Link href={"/get-involved"}>Get Involved</Link> page to sign up.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How do I become a Campus Ambassador?
            </AccordionTrigger>
            <AccordionContent>
              Visit the ThriveRise{" "}
              <Link href={"/campus-ambassador"}>Campus Ambassador </Link>
              page or click here{" "}
              <Link href={"/campus-ambassador#ambassador"}>
                Become an Ambassador
              </Link>{" "}
              to apply.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
