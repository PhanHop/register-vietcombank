import SearchIcon from "assets/icon/ic_24system_search_ink1.svg";
import CardholderIcon from "assets/icon/Cardholder.svg";
import CheckShieldIcon from "assets/icon/ic_24system_checkshield_outlined_ink1.svg";
import SaleCodeIcon from "assets/icon/ic_24system_salecode_outlined_ink1.svg";
import StickyNoteIcon from "assets/icon/ic_24system_sticky_note_outlined_ink1.svg";
import GiftIcon from "assets/icon/ic_24system_gift_outlined_ink1.svg";
import classNames from "classnames";
import Header from "../Header";
import styles from "./styles.module.css";
import SunIcon from "assets/icon/Sun_Behind_Small_Cloud.svg";
export default function Home() {
  const content = [
    { icon: <CardholderIcon />, label: "Gợi ý sản phẩm" },
    { icon: <CheckShieldIcon />, label: "Dành riêng cho bạn" },
    { icon: <SaleCodeIcon />, label: "Đăng ký trực tuyến" },
    { icon: <StickyNoteIcon />, label: "Đặt lịch" },
    { icon: <GiftIcon />, label: "Ưu đãi" },
  ];
  return (
    <div className="w-full">
      <Header />
      <div
        className={classNames(
          "px-8 pt-8 relative w-full  h-[calc(100vh_-_172px)]"
        )}
      >
        <div
          className={classNames(
            "w-full h-full flex flex-col rounded-[12px]",
            styles.bgImag
          )}
        >
          <div className="flex w-full justify-start items-center flex-col pt-[10%]">
            <div className="flex flex-col justify-start items-start gap-y-[200px] w-[1190px]">
              <div className="flex flex-col items-start gap-y-3">
                <div className="flex items-start gap-x-5">
                  <SunIcon />
                  <div className="flex flex-col gap-y-4 justify-center">
                    <div className="text-[40px] leading-10 text-[#000000]">
                      Chào buổi sáng
                    </div>
                    <div className="text-[16px] leading-6 text-[#000000]">
                      Bạn đang tìm kiếm gì hôm nay?
                    </div>
                  </div>
                </div>
                <div className="h-[64px] min-w-[479px] bg-[#FFFFFF] rounded-[46px] px-8 flex items-center gap-x-7">
                  <SearchIcon />
                  <div className="text-[18px] leading-[26px] text-[#9F9F9F]">
                    Thẻ tín dụng, vay tiêu dùng...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center flex-col bottom-[40px] fixed">
        <div className="flex flex-col justify-start items-start gap-y-[200px]">
          <div className="flex">
            {content?.map((item, index) => {
              return (
                <div
                  key={item?.label}
                  className={classNames(
                    "py-4 w-[238px] flex items-center flex-col gap-y-3 bg-[#ffffff]",
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
                      "w-14 h-14 bg-[#F4F4F4] rounded-[56px] flex items-center justify-center",
                      index === 2 && styles.boxShadow
                    )}
                  >
                    {item?.icon}
                  </div>
                  <div
                    className={classNames(
                      index === 2 && styles.contentColor,
                      "text-[18px] leading-[26px] font-medium"
                    )}
                  >
                    {item?.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
