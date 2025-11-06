import React from "react";
import { ButtonProps, ButtonVariants } from "./types";
import PrimaryFilled from "./primary-filled";
import PrimaryOutlined from "./primary-outlined";
import DangerOutlined from "./danger-outlined";
import Default from "./default";
import DangerFilled from "./danger-filled";
import Neutral from "./neutral";
import BlackFilled from "./black-filled";
import BlackOutlined from "./black-outlined";
import PrimaryFilledRounded from "./primary-filled-rounded";
import BabyBlueFilled from "./baby-blue-filled";
import WhiteFilledRounded from "./white-filled-rounded";
import WhiteFilled from "./white-filled";

export function Button(props: ButtonProps) {
  switch (props.variant) {
    case ButtonVariants.BabyBlueFilled:
      return <BabyBlueFilled {...props} />;

    case ButtonVariants.BlackFilled:
      return <BlackFilled {...props} />;

    case ButtonVariants.BlackOutlined:
      return <BlackOutlined {...props} />;

    case ButtonVariants.DangerFilled:
      return <DangerFilled {...props} />;

    case ButtonVariants.DangerOutlined:
      return <DangerOutlined {...props} />;

    case ButtonVariants.Neutral:
      return <Neutral {...props} />;

    case ButtonVariants.PrimaryFilledRounded:
      return <PrimaryFilledRounded {...props} />;

    case ButtonVariants.PrimaryFilled:
      return <PrimaryFilled {...props} />;

    case ButtonVariants.PrimaryOutlined:
      return <PrimaryOutlined {...props} />;

    case ButtonVariants.WhiteFilled:
      return <WhiteFilled {...props} />;

    case ButtonVariants.WhiteFilledRounded:
      return <WhiteFilledRounded {...props} />;

    default:
      return <Default {...props} />;
  }
}
