import React, { ReactNode } from "react";
import ShareIcon from "assets/icon/Share.svg";
type Props = {
  label?: string;
  value?: string;
  placeHolder?: string;
  icon?: ReactNode;
  clickFile?: () => void;
};

export default function FileInputIcon({
  label,
  value,
  icon,
  clickFile,
}: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor="" className="text-sm text-[#000000]">
        {label}
      </label>
      <div className="flex gap-x-2">
        <div className="h-14 px-4 w-full rounded-[12px] border-[2px] border-solid border-[#EAEAEA] flex gap-x-2 items-center">
          <div>{value && icon}</div>
          {value}
        </div>
        <div
          className="rounded-[12px] w-[56px] border-[2px] border-solid flex items-center justify-center border-[#09A061] hover:bg-bg-linear-blue hover:cursor-pointer"
          onClick={clickFile}
        >
          <ShareIcon />
        </div>
      </div>
    </div>
  );
}
