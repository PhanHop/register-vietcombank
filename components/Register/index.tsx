import Icon1 from "assets/icon/Union1.svg";
import Icon2 from "assets/icon/Union2.svg";
import Icon3 from "assets/icon/Union3.svg";
import classNames from "classnames";
import styles from "./styles.module.css";
import Header from "../Header";
import Link from "next/link";

export default function Register() {
  return (
    <div className="w-full relative">
      <div className="w-full">
        <Header />
        <div className={classNames("p-8 relative w-full w-ful h-[calc(100vh_-_98px)]")}>
          <div
            className={classNames(
              "w-ful h-full flex flex-col px-[120px]",
              styles.bgImag
            )}
          >
            <div className="w-[450px] h-full flex flex-col justify-center gap-y-10">
              <div className="flex flex-col gap-y-8 justify-center">
                <div className="text-[32px] leading-10 font-medium">
                  Mở tài khoản trực tuyến của khách hàng tổ chức
                </div>
                <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <Icon1 />
                    </div>
                    <div className="text-[#6F6F6F] text-[16px] leading-6">
                      Mở tài khoản không giới hạn không gian và thời gian
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <Icon2 />
                    </div>
                    <div className="text-[#6F6F6F] text-[16px] leading-6">
                      Linh hoạt lựa chọn số tài khoản như ý
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <Icon3 />
                    </div>
                    <div className="text-[#6F6F6F] text-[16px] leading-6">
                      Thủ tục đơn giản, nhanh chóng với công nghệ OCR vượt trội
                    </div>
                  </div>
                </div>
              </div>
              <Link href={"/form1"}>
                <div className="bg-[#D4F156] px-6 py-[14px] text-[16px] leading-5 text-[#000000] rounded-[12px] max-w-[177px]">
                  Trải nghiệm ngay
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
