export interface ButtonProps {
  type?: "reset" | "submit" | "button";
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: ButtonVariants;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export enum ButtonVariants {
  BabyBlueFilled = "baby-blue-filled",
  BlackFilled = "black-filled",
  BlackOutlined = "black-outlined",
  DangerFilled = "danger-filled",
  DangerOutlined = "danger-outlined",
  Default = "default",
  Neutral = "neutral",
  PrimaryFilled = "primary-filled",
  PrimaryFilledRounded = "primary-filled-rounded",
  PrimaryOutlined = "primary-outlined",
  WhiteFilled = "white-filled",
  WhiteFilledRounded = "white-filled-rounded",
}
