import classNames from "classnames";
import React from "react";

type Props = {
  text?: string;
  className?: string;
};

export default function Button({ text, className }: Props) {
  return (
    <div
      className={classNames(
        "bg-[#D4F156] flex justify-center py-[14px] text-[16px] leading-5 text-[#000000] rounded-[12px] w-[200px] hover:cursor-pointer",
        className
      )}
    >
      {text}
    </div>
  );
}
