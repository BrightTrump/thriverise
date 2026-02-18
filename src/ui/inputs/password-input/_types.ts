import { InputBaseProps } from "../_types";

export interface PasswordInputProps extends InputBaseProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
