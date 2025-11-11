"use client";

import { useSubscribe } from "@/hooks/contact-support/subscribe.hook";
import { Button, ButtonVariants } from "@/ui";
import React from "react";

export default function SubscribeForm() {
  const { subscribe, formRef, isSuccess, isLoading } = useSubscribe();

  return (
    <form
      ref={formRef}
      onSubmit={subscribe}
      className="relative grid grid-cols-[1fr_auto] gap-1 w-full sm:w-[512px] xl:w-[412px]"
    >
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
        className="w-full px-2.5 bg-[#202020] rounded-xl placeholder:text-white outline-none"
      />
      <span
        className={`block w-max rounded-xl p-[1px] bg-[linear-gradient(278.64deg,_#FFC0CB_16.15%,_#FE8AFE_43.13%,_#7070CA_63.49%,_#EEAACC_83.85%)] ${
          isSuccess && "opacity-50"
        }`}
      >
        <span className="block bg-white w-max rounded-xl">
          <Button
            type="submit"
            variant={ButtonVariants.WhiteFilledRounded}
            disabled={isLoading || isSuccess}
            isLoading={isLoading}
            className="w-28 h-10 bg-white"
          >
            Subscribe
          </Button>
        </span>
      </span>

      {isSuccess && (
        <span className="absolute top-full mt-1 pl-3 text-green-400">
          Successfully subscribed to newsletter.
        </span>
      )}
    </form>
  );
}
