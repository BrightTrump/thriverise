import { TextAreaInputProps } from "./text-area-input";

export type InputProps<T> = {
  type: T;
} & (T extends Inputs.TextArea ? TextAreaInputProps : InputBaseProps);

export type InputBaseProps = {
  required?: boolean;
  label?: string;
  description?: string;
  id: string;
  placeholder?: string;
  name: string;
  className?: string;
  value?: string;
  defaultValue?: any;
  onChange?: (e: any) => void;
  onInput?: (e: any) => void;
  readonly?: boolean;
};

export interface RequiredFieldProps {
  label: string;
}

export enum Inputs {
  Email = "Email",
  Text = "Text",
  TextArea = "TextArea",
}
