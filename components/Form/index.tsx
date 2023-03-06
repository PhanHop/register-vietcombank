import classNames from "classnames";
import React, { useState } from "react";
import styles from "./styles.module.css";
import GroupIcon from "assets/icon/Group_465982.svg";
import ChevronIcon from "assets/icon/ic_16inline_check_outlined_ink1.svg";
import HeadPhoneIcon from "assets/icon/ic_24system_headphone_outlined_ink1.svg";
import CurrentIcon from "assets/icon/Current_account2.svg";
import ArchivedICon from "assets/icon/Archived.svg";
import Link from "next/link";
type Props = React.PropsWithChildren<{
  activeIndex: number[];
  classname?: string;
}>;
const Steps = [
  {
    title: "Tìm doanh nghiệp",
    value: "Khách hàng nhập mã số thuế và kiểm tra thông tin doanh nghiệp ",
    step: 1,
  },
  {
    title: "Chọn số tài khoản",
    value: "Linh hoạt lựa chọn tài khoản số đẹp theo nhu cầu của Quý khách",
    step: 2,
  },
  {
    title: "Tải hồ sơ doanh nghiệp",
    value: "Khách hàng lựa chọn và tải hồ sơ doanh nghiệp lên hệ thống",
    step: 3,
  },
  {
    title: "Xác nhận thông tin doanh nghiệp",
    value: "Khách hàng kiểm tra và xác nhận thông tin đăng ký",
    step: 4,
  },
  {
    title: "Đặt lịch hẹn > Hoàn thành đăng ký trực tuyến",
    value:
      "Khách hàng lựa chọn chi nhánh phục vụ và lịch hẹn phù hợp để hoàn thành đăng ký",
    step: 5,
  },
];
const Footer = [
  { icon: <HeadPhoneIcon />, title: "1900 54 62 12" },
  { icon: <ArchivedICon />, title: "Hướng dẫn điền thông tin" },
  { icon: <CurrentIcon />, title: "Quy định về hồ sơ mở tài khoản" },
];
export default function Form({ activeIndex, children, classname }: Props) {
  return (
    <>
      <div className="grid grid-cols-7 grid-flow-col w-full">
        <div
          className={classNames(
            "flex flex-col col-span-2 w-full h-full bg-[#F4F4F4] px-[50px] lg:gap-y-10 2xl:gap-y-20 lg:pt-5 xl:pt-8 2xl:pt-14"
          )}
        >
          <div className="w-full flex justify-center">
            <Link href={"/dang-ky"}>
              <GroupIcon />
            </Link>
          </div>
          <div className="flex flex-col">
            {Steps?.map((item) => {
              return (
                <div
                  key={item?.title}
                  className={classNames("flex gap-x-3 py-1")}
                >
                  <div className="flex flex-col items-center  gap-y-1">
                    <div
                      className={classNames(
                        "w-6 !h-6 rounded-[12px] flex items-center justify-center text-[12px] leading-4 text-white",
                        activeIndex?.includes(item?.step)
                          ? "bg-[#007A47]"
                          : "bg-[#B3B8BD]"
                      )}
                    >
                      {activeIndex?.length < item?.step + 1 ? (
                        item?.step
                      ) : (
                        <ChevronIcon />
                      )}
                    </div>
                    <div
                      className={classNames(
                        "h-[56px] w-[1px]",
                        {
                          hidden: item?.step === 5,
                        },
                        activeIndex?.length < item?.step + 1
                          ? "bg-[#B3B8BD]"
                          : "bg-[#007A47]"
                      )}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <div
                      className={classNames(
                        "text-base",
                        activeIndex?.includes(item?.step)
                          ? "text-[#007A47]"
                          : "text-[#01122280]"
                      )}
                    >
                      {item?.title}
                    </div>
                    <div
                      className={classNames(
                        "text-sm",
                        activeIndex?.includes(item?.step)
                          ? "text-[#22313F]"
                          : "text-[#01122280]"
                      )}
                    >
                      {item?.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={classNames(
            "flex col-span-5 w-full h-full bg-black relative",
            styles.bgImage
          )}
        >
          <div
            className={classNames(
              "lg:px-[94px] xl:px-[114px] 2xl:px-[144px] w-full",
              classname
            )}
          >
            {children}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 fixed bottom-0 right-0 left-0">
        <div className="col-span-2"></div>
        <div className="col-span-5 w-full bg-white z-10 px-[60px] py-[18px] border-t-[2px] border-solid border-[#EAEAEA] grid grid-cols-3">
          {Footer?.map((item) => {
            return (
              <div key={item?.title} className="flex gap-x-[10px]">
                <div>{item?.icon}</div>
                <div className="text-base text-[#000000]">{item?.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
