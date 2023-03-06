import React from "react";

type Props = {
  label?: string;
  value?: string;
  placeHolder?: string;
} & JSX.IntrinsicElements["input"];

export default function Input({ label, value, placeHolder, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor="" className="text-sm text-[#000000]">
        {label}
      </label>
      <input
        placeholder={placeHolder}
        value={value}
        type="text"
        className="h-12 px-4 w-full rounded-[12px] border-[2px] border-solid border-[#EAEAEA]"
        {...rest}
      />
    </div>
  );
}
