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
  CreamFilledRounded = "cream-filled-rounded",
  Default = "default",
  GreenFilledRounded = "green-filled-rounded",
  YellowFilledRounded = "yellow-filled-rounded",
  SkyBlueFilledRounded = "sky-blue-filled-rounded",
  SkyBlueWhiteFilledRounded = "sky-blue-white-filled-rounded",
}
