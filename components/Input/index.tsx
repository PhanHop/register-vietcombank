import { type } from "os";
import React from "react";

type Props = {
  label?: string;
  placeHolder?: string;
  defaultValue?: number;
  type?: string;
  value?: any;
} & JSX.IntrinsicElements["input"];

export default function Input({
  label,
  value,
  placeHolder,
  defaultValue,
  type = "text",
  ...rest
}: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor="" className="text-sm text-[#000000]">
        {label}
      </label>
      <input
        id={value}
        value={value}
        placeholder={placeHolder}
        type={type}
        className="h-12 px-4 w-full rounded-[12px] border-[2px] border-solid border-[#EAEAEA] focus:outline-[#007A47]"
        {...rest}
      />
      <label htmlFor={value}></label>
    </div>
  );
}
