import classNames from "classnames";
import React, { ReactNode } from "react";
import styles from "./styles.module.css";
type Props = {
  content?: string;
  icon?: ReactNode;
};

export default function ContentItem({ content, icon }: Props) {
  return (
    <div
      className={classNames(
        "w-[284px] h-[118px] flex flex-col gap-y-2 items-center justify-center hover:cursor-pointer",
        styles.contentItem
      )}
    >
      <div className="flex w-14 h-14 rounded-[40px] bg-[#ffffff] items-center justify-center">
        {icon}
      </div>
      <div className={classNames(styles.textItem)}>{content}</div>
    </div>
  );
}
