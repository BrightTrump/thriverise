import type { NumberInputProps } from "./_types";
import {
  InputConStyles,
  InputLabelStyles,
  InputRequiredStyles,
} from "../styles";
import { cn } from "@/lib/utils";

export function NumberInput({
  label,
  name,
  value,
  readonly,
  required,
  placeholder,
  onChange,
}: NumberInputProps) {
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
          type="number"
          name={name}
          className="w-full bg-transparent outline-none text-black placeholder:text-[#BBBBBB]"
          value={value}
          placeholder={placeholder}
          readOnly={readonly}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
