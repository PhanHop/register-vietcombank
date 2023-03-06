import classNames from "classnames";
import React from "react";

type Props = {
  number?: string;
  money?: string;
  classNameDiv?: string;
} & JSX.IntrinsicElements["input"];

export default function ResultInput({
  number,
  money,
  classNameDiv,
  ...rest
}: Props) {
  return (
    <div>
      <div
        className={classNames(
          "px-4 py-3 flex justify-between rounded-[12px] border-[2px] border-solid border-[#EAEAEA] h-12",
          classNameDiv
        )}
      >
        <div className="flex gap-x-2.5">
          <div className="flex items-center">
            <input
              type="radio"
              disabled={!number}
              className="hover:cursor-pointer"
              {...rest}
            />
          </div>
          <div className="text-base flex items-center">
            {number || "--- --- ---"}
          </div>
        </div>
        <div className="text-sm text-[#6F6F6F]">{money || "0đ"}</div>
      </div>
    </div>
  );
}
