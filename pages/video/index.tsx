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
import LogoVideoIcon from "assets/icon/LogoVideo.svg";
import ArrowUp from "assets/icon/Arrow_Up_Video.svg";
import ArrowDownSmall from "assets/icon/Arrow-Down_Small.svg";
import ArrowDown from "assets/icon/Arrow-Down.svg";
import ArrowLeft from "assets/icon/Arrow-Left.svg";
import CardLeft from "assets/icon/card-1.svg";
import CardRight from "assets/icon/card_video.svg";
import ModalVideo from "@/components/Modal/ModalVideo";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="w-full relative">
      <div className="w-full">
        <HeaderVideo />
        <div className={classNames("px-8 pt-8 relative w-full")}>
          <div
            className={classNames(
              "w-full aspect-[1340/760] h-full flex flex-col rounded-[12px] px-8 pt-8 pb-[120px]",
              styles.bgImag
            )}
          >
            <div className="w-full h-full flex justify-center items-center pb-20">
              <div className="flex flex-col gap-y-0">
                <div className="flex flex-col gap-y-3 items-center mb-[-60px]">
                  <ModalVideo
                    urlVideo=" https://youtu.be/5ptadhqhVwo"
                    trigger={
                      <ContentItem
                        content="Quản lý Tài khoản"
                        icon={<PrivacyIcon />}
                      />
                    }
                  />
                  <ArrowUp />
                </div>
                <div className="w-full flex gap-x-3 justify-center items-center">
                  <div className="relative">
                    <CardRight />
                    <div className="flex justify-center absolute flex-col items-center left-[-45px] gap-y-3">
                      <ArrowDown />
                      <ModalVideo
                        urlVideo=" https://youtu.be/zhUaBjYRZac"
                        trigger={
                          <ContentItem
                            content="Quản lý Khoản phải trả"
                            icon={<BillIcon />}
                          />
                        }
                      />
                    </div>
                  </div>
                  <ArrowLeft />
                  <div className="relative">
                    <LogoVideoIcon />
                    <div className="flex justify-center absolute flex-col items-center top-[230px] gap-y-3">
                      <ArrowDown />
                      <ModalVideo
                        urlVideo="https://youtu.be/JcpvZ-5qB7Y"
                        trigger={
                          <ContentItem
                            content="Quản lý Thanh khoản"
                            icon={<BillIcon />}
                          />
                        }
                      />
                    </div>
                  </div>
                  <ArrowLeft />
                  <div className="relative">
                    <CardLeft />
                    <div className="flex justify-center absolute flex-col items-center left-[-45px] gap-y-3">
                      <ArrowDown />
                      <ModalVideo
                        urlVideo=" https://youtu.be/yUJKOsJJdnU"
                        trigger={
                          <ContentItem
                            content="Quản lý Khoản phải thu"
                            icon={<BillIcon />}
                          />
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
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
