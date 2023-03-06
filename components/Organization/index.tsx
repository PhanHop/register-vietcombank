import CardholderIcon from "assets/icon/Cardholder.svg";
import CheckShieldIcon from "assets/icon/ic_24system_checkshield_outlined_ink1.svg";
import SaleCodeIcon from "assets/icon/ic_24system_salecode_outlined_ink1.svg";
import StickyNoteIcon from "assets/icon/ic_24system_sticky_note_outlined_ink1.svg";
import GiftIcon from "assets/icon/ic_24system_gift_outlined_ink1.svg";
import VietIcon from "assets/icon/Icon-Vietcombank_2.svg";
import RectangleIcon from "assets/icon/Rectangle.svg";
import classNames from "classnames";
import styles from "./styles.module.css";
import Header from "../Header";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import useIsMounted from "@/hook/Mount";
import ChatIcon from "assets/icon/Frame_465985.svg";

export default function Home() {
  const content = [
    { icon: <CardholderIcon />, label: "Gợi ý sản phẩm" },
    { icon: <CheckShieldIcon />, label: "Dành riêng cho bạn" },
    { icon: <SaleCodeIcon />, label: "Đăng ký tài khoản trực tuyến" },
    { icon: <GiftIcon />, label: "Ưu đãi" },
    { icon: <StickyNoteIcon />, label: "Chọn Vietcombank" },
  ];
  const isMount = useIsMounted();
  return (
    <div className="w-full relative">
      <div className="w-full">
        <Header />
        <div
          className={classNames("p-8 relative w-full h-[calc(100vh_-_98px)] ")}
        >
          <div
            className={classNames(
              "w-full h-full flex flex-col  rounded-2xl",
              styles.bgImag
            )}
          >
            <div className="flex w-full h-full justify-center ">
              <div className="flex flex-col justify-start items-start gap-y-20] absolute bottom-[72px]">
                <div className="flex">
                  {content?.map((item, index) => {
                    return (
                      <div
                        key={item?.label}
                        className={classNames(
                          "py-4 w-[238px] flex items-center flex-col gap-y-3 bg-[#ffffff] px-8 align-center",
                          {
                            "border-solid border-r-[1px] border-[#D4F156]":
                              index !== 4,
                          },
                          { "rounded-r-[120px]": index === 4 },
                          { "rounded-l-[120px]": index === 0 }
                        )}
                      >
                        <div
                          className={classNames(
                            "w-20 h-20 bg-[#F4F4F4] rounded-[56px] flex items-center justify-center",
                            index === 2 && styles.boxShadow
                          )}
                        >
                          {item?.icon}
                        </div>
                        <p
                          className={classNames(
                            index === 2 && styles.contentColor,
                            "text-[18px] leading-[26px] font-medium text-center"
                          )}
                        >
                          {item?.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Transition
        show={isMount}
        enter="transition-all duration-[800ms] delay-[1000ms] ease-in-out"
        enterFrom="opacity-0 translate-y-[-40px]"
        enterTo="opacity-1 translate-y-0"
        className="fixed bottom-[80px] right-[52px]"
      >
        <div
          className={classNames(
            " p-8 bg-[#ffffff] rounded-[32px] flex flex-col gap-y-[60px]",
            styles.boxShadowChat
          )}
        >
          <div className="flex flex-col gap-y-[42px]">
            <div className="flex justify-between items-center">
              <VietIcon />
              <div className="w-8 h-8 rounded-[25px] bg-[#EAEAEA] flex items-center justify-center">
                <RectangleIcon />
              </div>
            </div>
            <div className="text-[24px] leading-8 font-medium text-[#000000] max-w-[353px]">
              Quý khách đã có tài khoản tại Vietcombank?
            </div>
          </div>
          <div className="flex flex-col gap-y-4 w-full">
            <Link href={"/dang-ky"}>
              <div className="w-[355px] h-12 rounded-[12px] bg-[#377D4C] text-[16px] leading-5 text-[#ffffff] items-center flex justify-center font-medium">
                Tôi chưa có tài khoản
              </div>
            </Link>
            <div className="w-[355px] h-12 rounded-[12px] bg-[#FFFFFF] text-[16px] leading-5 text-[#007A47] items-center flex justify-center font-medium border-[2px] border-solid border-[#007A47]">
              Tôi đã có tài khoản
            </div>
          </div>
        </div>
      </Transition>
      <div className="fixed bottom-4 right-[52px]">
        <ChatIcon />
      </div>
    </div>
  );
}
