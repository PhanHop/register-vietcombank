import Form from "@/components/Form";
import React, { useState } from "react";
import PdfIcon from "assets/icon/PDF.svg";
import JpgIcon from "assets/icon/JPG.svg";
import FileInputIcon from "@/components/Input/FileInputIcon";
import Link from "next/link";
import Button from "@/components/Button";
import SelectOption from "@/components/Select";
type Props = {};

export default function Form4({}: Props) {
  const Content = [
    {
      label: "Giấy chứng nhận đăng ký kinh doanh",
      value: "GiayKinhDoanh.pdf",
      icon: <PdfIcon />,
    },
    {
      label: "CCCD/CMND của kế toán",
      value: "CanCuocCongDan_2.jpg",
      icon: <JpgIcon />,
    },
    {
      label: "Quyết định bổ nhiệm kế toán",
      value: "GiayBoNhiem.pdf",
      icon: <PdfIcon />,
    },
    {
      label: "Giấy chứng nhận mẫu dấu",
      value: "GiayChungNhanDau.pdf",
      icon: <PdfIcon />,
    },
    {
      label: "CCCD/CMND của Người đại diện hợp pháp",
      value: "CanCuocCongDan.jpg",
      icon: <JpgIcon />,
    },
  ];
  const [downloadFile, setDownloadFile] = useState(false);
  function handleClick() {
    setDownloadFile(true);
  }
  return (
    <div className="">
      <Form activeIndex={[1, 2, 3]}>
        <div className="w-full h-[calc(100vh_-_64px)] flex justify-center">
          <div className="w-full h-full flex flex-col gap-y-8 items-start justify-center">
            <div className="flex flex-col gap-y-2.5">
              <div className="text-2xl text-[#000000] font-medium">
                Hồ sơ doanh nghiệp
              </div>
              <div className="text-sm text-[#6F6F6F]">
                *Quý khách lưu ý: Tệp tin cần có định dạng PDF/JPG/PNG và không
                vượt quá 5MB/file. Hệ thống sẽ tự đọc và điền thông tin của quý
                khách vào biểu mẫu đăng ký.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-10 w-full gap-y-8">
              <SelectOption
                label="Loại hình doanh nghiệp"
                value={[{ value: "Tổ chức có tư cách pháp nhân" }]}
                defaultValue="Tổ chức có tư cách pháp nhân"
              />
              {Content?.map((item, index) => {
                return (
                  <FileInputIcon
                    icon={item?.icon}
                    label={item?.label}
                    value={downloadFile ? item?.value : ""}
                    key={item?.label}
                    clickFile={handleClick}
                  />
                );
              })}
            </div>
            <Link href={"./form5"}>
              <Button text="Tiếp tục" />
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}
