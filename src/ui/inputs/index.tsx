"use client";

import React, { JSX } from "react";
import "./index.css";
import { InputBaseProps, InputProps, Inputs } from "./types";
import { TextInput } from "./text-input";
import { EmailInput } from "./email-input";
import { TextAreaInput } from "./text-area-input";

export function Input<T extends Inputs>(props: InputProps<T>): JSX.Element {
  const { type } = props;
  const inputBaseProps = props as InputBaseProps;

  switch (type) {
    case Inputs.Email:
      return <EmailInput {...inputBaseProps} />;

    case Inputs.TextArea:
      return <TextAreaInput {...inputBaseProps} />;

    case Inputs.Text:
      return <TextInput {...inputBaseProps} />;

    default:
      return <p>Pick an Input Type from &quot;Inputs&quot; Enum.</p>;
  }
}
