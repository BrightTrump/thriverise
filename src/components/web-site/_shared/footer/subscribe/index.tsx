import { Button, ButtonVariants, Logo } from "@/ui";
import React from "react";
import SubscribeForm from "./subscribe-form";

export default function Subscribe() {
  return (
    <section id="subscribe" className="grid">
      <div className="container grid gap-5 sm:gap-10 text-white">
        <h2 className="text-2xl font-bold max-w-sm">
          Subscribe to our Newsletter for updates!
        </h2>

        <SubscribeForm />
      </div>
    </section>
  );
}
