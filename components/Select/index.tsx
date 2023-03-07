import React from "react";
import { Select } from "antd";
import styles from "./styles.module.css";
import ArrowDownIcon from "assets/icon/ic_24system_arrow_down_ink1.svg";
type SelectProps = {
  value?: string;
};
type Props = {
  label?: string;
  value?: SelectProps[];
  placeHolder?: string;
  clickProvice?: () => void;
  defaultValue?: string;
};

export default function SelectOption({
  label,
  value,
  placeHolder,
  clickProvice,
  defaultValue,
  ...rest
}: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor="" className="text-sm text-[#000000]">
        {label}
      </label>
      <Select
        suffixIcon={<ArrowDownIcon className={styles.icon}/>}
        placeholder={placeHolder}
        className={styles.customSelect}
        size="large"
        defaultValue={defaultValue}
        style={{ width: "100%", height: "48px" }}
        options={value}
        onChange={clickProvice}
      />
    </div>
  );
}
