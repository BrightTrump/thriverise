import React from "react";
import { ButtonProps, ButtonVariants } from "./types";
import Default from "./default";
import Neutral from "./neutral";
import SkyBlueFilledRounded from "./sky-blue-filled-rounded";
import CreamFilledRounded from "./cream-filled-rounded";

export function Button(props: ButtonProps) {
  switch (props.variant) {
    case ButtonVariants.SkyBlueFilledRounded:
      return <SkyBlueFilledRounded {...props} />;

    case ButtonVariants.CreamFilledRounded:
      return <CreamFilledRounded {...props} />;
    
    case ButtonVariants.Neutral:
      return <Neutral {...props} />;

    default:
      return <Default {...props} />;
  }
}
