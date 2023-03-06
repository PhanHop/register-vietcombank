import React, { ReactNode } from "react";
import ShareIcon from "assets/icon/Share.svg";
import classNames from "classnames";
import styles from "./styles.module.css";
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
    <div className={classNames("flex flex-col gap-y-2 bg-white")}>
      <label htmlFor="" className="text-sm text-[#000000]">
        {label}
      </label>
      <div className={classNames("flex gap-x-2 hover:cursor-pointer")}>
        <div
          className={classNames(
            "h-14 px-4 w-full rounded-[12px] border-[2px] border-solid border-[#EAEAEA] flex gap-x-2 items-center",
            styles.hoverInput
          )}
        >
          <div>{value && icon}</div>
          {value}
        </div>
        <div
          className="rounded-[12px] min-w-[56px] border-[2px] border-solid flex items-center justify-center border-[#09A061] hover:bg-bg-linear-blue hover:cursor-pointer"
          onClick={clickFile}
        >
          <ShareIcon />
        </div>
      </div>
    </div>
  );
}
