"use client";

import type { JSX } from "react";
import type { InputProps } from "./_types";
import { Inputs } from "./_types";
import { EmailInput } from "./email-input";
import type { EmailInputProps } from "./email-input/_types";
import { NumberInput } from "./number-input";
import type { NumberInputProps } from "./number-input/_types";
import { PasswordInput } from "./password-input";
import type { PasswordInputProps } from "./password-input/_types";
import { PhoneInput } from "./phone-input";
import type { PhoneInputProps } from "./phone-input/_types";
import { TextareaInput } from "./textarea-input";
import type { TextareaInputProps } from "./textarea-input/_types";
import { TextInput } from "./text-input";
import type { TextInputProps } from "./text-input/_types";

export function Input<T extends Inputs>(props: InputProps<T>): JSX.Element {
  const { type } = props;

  switch (type) {
    case Inputs.Email:
      return <EmailInput {...(props as EmailInputProps)} />;

    case Inputs.Number:
      return <NumberInput {...(props as NumberInputProps)} />;

    case Inputs.Password:
      return <PasswordInput {...(props as PasswordInputProps)} />;
    
    case Inputs.Phone:
      return <PhoneInput {...(props as PhoneInputProps)} />;

    case Inputs.Textarea:
      return <TextareaInput {...(props as TextareaInputProps)} />;

    case Inputs.Text:
      return <TextInput {...(props as TextInputProps)} />;

    default:
      return <p>Pick an Input Type from &quot;Inputs&quot; Enum.</p>;
  }
}
