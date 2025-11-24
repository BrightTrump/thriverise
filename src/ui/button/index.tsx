import React from "react";
import { ButtonProps, ButtonVariants } from "./types";
import Default from "./default";
import CreamFilledRounded from "./cream-filled-rounded";
import YellowFilledRounded from "./yellow-filled-rounded";
import SkyBlueFilledRounded from "./sky-blue-filled-rounded";
import GreenFilledRounded from "./green-filled-rounded";
import SkyBlueWhiteFilledRounded from "./sky-blue-white-filled-rounded copy";

export function Button(props: ButtonProps) {
  switch (props.variant) {
    case ButtonVariants.CreamFilledRounded:
      return <CreamFilledRounded {...props} />;

    case ButtonVariants.GreenFilledRounded:
      return <GreenFilledRounded {...props} />;

    case ButtonVariants.YellowFilledRounded:
      return <YellowFilledRounded {...props} />;

    case ButtonVariants.SkyBlueFilledRounded:
      return <SkyBlueFilledRounded {...props} />;

    case ButtonVariants.SkyBlueWhiteFilledRounded:
      return <SkyBlueWhiteFilledRounded {...props} />;

    default:
      return <Default {...props} />;
  }
}
