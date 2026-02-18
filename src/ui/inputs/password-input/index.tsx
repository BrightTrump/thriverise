import type { PasswordInputProps } from "./_types";
import {
  InputConStyles,
  InputLabelStyles,
  InputRequiredStyles,
} from "../styles";
import { cn } from "@/lib/utils";
import { Icon } from "../../icons";
import { useState } from "react";
import { Icons } from "@/ui/icons/types";

export function PasswordInput({
  label,
  name,
  value,
  readonly,
  required,
  placeholder,
  onChange,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid gap-2 content-start z-10">
      {label && (
        <label className={cn(InputLabelStyles)}>
          {label}{" "}
          {required && <span className={cn(InputRequiredStyles)}>*</span>}
        </label>
      )}

      <div className={cn(InputConStyles, "relative flex items-center")}>
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          className="w-full bg-transparent outline-none text-black placeholder:text-[#BBBBBB] pr-10"
          value={value}
          placeholder={placeholder}
          readOnly={readonly}
          onChange={onChange}
          required={required}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 focus:outline-none cursor-pointer"
        >
          <Icon
            type={showPassword ? Icons.ArrowRight : Icons.ArrowRight}
            className="text-black text-xl"
          />
        </button>
      </div>
    </div>
  );
}
