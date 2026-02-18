import type { PhoneInputProps } from "./_types";
import {
  InputConStyles,
  InputLabelStyles,
  InputRequiredStyles,
} from "../styles";
import { cn } from "@/lib/utils";

export function PhoneInput({
  label,
  name,
  value,
  readonly,
  required,
  placeholder,
  onChange,
}: PhoneInputProps) {
  return (
    <div className="grid gap-2 content-start z-10">
      {label && (
        <label className={cn(InputLabelStyles)}>
          {label}{" "}
          {required && <span className={cn(InputRequiredStyles)}>*</span>}
        </label>
      )}

      <div className={cn(InputConStyles)}>
        <input
          type="tel"
          name={name}
          className="w-full bg-transparent outline-none text-black placeholder:text-[#BBBBBB]"
          value={value}
          placeholder={placeholder}
          readOnly={readonly}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
}
