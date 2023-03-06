import Header from "@/components/Header";
import HeaderVideo from "@/components/Header/HeaderVideo";
import classNames from "classnames";
import React from "react";
import styles from "./styles.module.css";
import HeadPhoneIcon from "assets/icon/ic_24system_headphone_outlined_ink1.svg";
import PrivacyIcon from "assets/icon/ic_24system_privacy_policy_outlined_ink1.svg";
import BillIcon from "assets/icon/Billpayment.svg";
import HandIcon from "assets/icon/ic_24system_handcash_outlined_ink1.svg";
import MoneyIcon from "assets/icon/c.svg";
import CurrentIcon from "assets/icon/Current_account2.svg";
import ContentItem from "./ContentItem";
type Props = {};

export default function index({}: Props) {
  return (
    <div className="w-full relative">
      <div className="w-full">
        <HeaderVideo />
        <div className={classNames("px-8 pt-8 relative w-full")}>
          <div
            className={classNames(
              "w-full aspect-[1340/760] h-full flex flex-col rounded-[12px] px-8 pt-8 pb-10",
              styles.bgImag
            )}
          >
            <div className="flex justify-center mt-4 relative">
              <ContentItem content="Quản lý Tài khoản" icon={<PrivacyIcon />} />
            </div>
            <div className="flex justify-center absolute bottom-12 left-0 w-[calc(100%)] ">
              <ContentItem content="Quản lý Thanh khoản" icon={<HandIcon />} />
            </div>
            <div className="flex justify-center absolute bottom-[150px] left-[15%]">
              <ContentItem
                content="Quản lý Khoản phải trả"
                icon={<BillIcon />}
              />
            </div>
            <div className="flex justify-center absolute bottom-[150px] right-[15%] ">
              <ContentItem
                content="Quản lý Khoản phải thu"
                icon={<MoneyIcon />}
              />
            </div>
          </div>
        </div>
        <div className="w-full fixed bottom-0 bg-[#ffffff]">
          <div className="w-full flex justify-between items-center px-8 py-4 border-t-[1px] border-solid border-[#EAEAEA]">
            <div>
              <span className="text-[#6F6F6F]">© Bản quyền thuộc về</span>{" "}
              Vietcombank
            </div>
            <div className="flex gap-x-[56px]">
              <div className="flex gap-x-[10px]">
                <div>
                  <HeadPhoneIcon />
                </div>
                <div className="text-base text-[#000000]">1900 54 62 12</div>
              </div>
              <div className="flex gap-x-[10px]">
                <div>
                  <CurrentIcon />
                </div>
                <div className="text-base text-[#000000]">
                  Điều kiện&điều khoản
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
