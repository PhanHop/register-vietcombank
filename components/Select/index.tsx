import React from "react";

type Props = {
  label?: string;
  value?: string;
  placeHolder?: string;
};

export default function Select({ label, value, placeHolder, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor="" className="text-sm text-[#000000]">
        {label}
      </label>
      <select
        name="cars"
        id="cars"
        className="h-12 px-4 w-full rounded-[12px] border-[2px] border-solid border-[#EAEAEA] outline-none"
      >
        <option value="Tổ chức có tư cách pháp nhânvo" className="">
          Tổ chức có tư cách pháp nhân
        </option>
      </select>
    </div>
  );
}
