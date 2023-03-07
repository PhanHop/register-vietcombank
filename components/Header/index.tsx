import React from "react";
import VietNamIcon from "/assets/icon/icon_vietnam.svg";
import ArrowUpIcon from "/assets/icon/arrow_up.svg";
import BankIcon from "/assets/icon/Bank.svg";
import Image from "next/image";
import MyModal from "../Modal";
import Link from "next/link";
import classNames from "classnames";
import styles from "./styles.module.css";
import Logo from "assets/icon/logo.svg";

type Props = {};
const header1 = ["Cá nhân", "Tổ chức", "Khách hàng ưu tiên"];
const header2 = [
  "Về Vietcombank",
  "Nhà đầu tư",
  "Tin tức",
  "ATM & Chi nhánh",
  "Tuyển dụng",
];
const tabHeader = ["Sản phẩm Dịch vụ", "Công cụ tiện ích", "Hỗ trợ 24/7"];
export default function Header() {
  return (
    <div className="border-b-[1px] border-solid">
      <div className="px-8">
        <div className="flex justify-between">
          <div className="flex gap-x-4 py-1">
            {header1?.map((item: string) => {
              if (item === "Tổ chức") {
                return (
                  <MyModal
                    key={item}
                    trigger={
                      <div
                        key={item}
                        className={classNames(
                          "px-[10px] py-2.5 text-[14px] font-semibold text-[#144C27] hover:cursor-pointer",
                          styles.activeBtn
                        )}
                      >
                        {item}
                      </div>
                    }
                  />
                );
              }
              return (
                <div
                  key={item}
                  className={classNames(
                    "px-[10px] py-2.5 text-[14px] flex items-center font-semibold text-[#144C27] hover:cursor-pointer",
                    styles.activeBtn
                  )}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="flex gap-x-4">
            {header2?.map((item: string) => {
              return (
                <div
                  key={item}
                  className={classNames(
                    "px-[10px] py-1 text-[14px] font-semibold flex items-center text-[#144C27] hover:cursor-pointer",
                    styles.activeBtn
                  )}
                >
                  {item}
                </div>
              );
            })}
            <div className="flex items-center gap-x-1">
              <VietNamIcon />
              <ArrowUpIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 flex justify-between pb-[4px]">
        <div className="flex items-center gap-x-8">
          <Link href={"/"}>
            <Logo />
          </Link>
          <div className="flex gap-x-8">
            {tabHeader?.map((item) => {
              return (
                <div key={item} className="flex gap-x-2 items-center">
                  <div className="text-[#000000]">{item}</div>
                  <ArrowUpIcon />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex gap-x-2 px-8 py-[12px] bg-[#D4F156] rounded-[12px]">
            <BankIcon />
            <div className="flex gap-x-1">
              <div className="text-[16px] leading-5 font-medium">Đăng nhập</div>
              <div className="text-[16px] leading-5 text-[#34984a] font-medium">
                Ngân hàng số
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
