import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import FileInputIcon from "@/components/Input/FileInputIcon";
import ModalSuccess from "@/components/Modal/ModalSuccess";
import SelectOption from "@/components/Select";
import { Label } from "@headlessui/react/dist/components/label/label";
import Link from "next/link";
import JpgIcon from "assets/icon/JPG.svg";
import React, { useState } from "react";

type Props = {};

export default function Form6({}: Props) {
  const OfficeInfo = [
    {
      placeHolder: "Chọn tỉnh thành phố",
      value: [
        { value: "Thành phố Hồ Chí Minh" },
        { value: "Thành phố Hà Nội" },
        { value: "Thành phố Quảng Ninh" },
        { value: "Thành phố Đà Nẵng" },
      ],
    },
    {
      placeHolder: "Chọn quận/huyện",
      value: [{ value: "Quận 1" }],
    },
    {
      placeHolder: "Chọn phường xã",
      value: [{ value: "Phường Bến Nghé" }],
    },
    {
      placeHolder: "Chọn chi nhánh",
      value: [{ value: "VCB Chi nhánh Hồ Chí Minh, số 5 Công Trường Mê Linh" }],
    },
    {
      placeHolder: "Nhập địa chỉ",
      value: [
        {
          value:
            "Số 5 Công Trường Mê Linh, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh",
        },
      ],
    },
  ];
  const ContactInfo = [
    {
      placeHolder: "Nhập họ và tên",
      value: "Nguyễn Đức A",
    },
    {
      placeHolder: "Nhập số điện thoại",
      value: "0987654321",
    },
    {
      placeHolder: "Nhập email",
      value: "nguyenduca@gmail.com",
    },
  ];

  const Calendar = [
    {
      placeHolder: "Nhập địa chỉ chi nhánh",
      value: "Số 10 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh",
    },
    {
      placeHolder: "Thời gian",
      value: "08:00 - 08:30 AM",
    },
    {
      placeHolder: "Ngày/tháng/năm",
      value: "08/03/2023",
    },
  ];
  const [province, setProvince] = useState<boolean>(false);
  function handleClickProvince() {
    setProvince(true);
  }

  return (
    <div className="w-full h-full">
      <Form activeIndex={[1, 2, 3, 4, 5]}>
        <div className="w-full h-full flex justify-center py-20 pb-16">
          <div className="w-full h-full flex flex-col gap-y-10 items-start justify-center">
            <div className="flex flex-col gap-y-16 w-full">
              <div className="grid grid-cols-2 gap-x-16 w-full">
                <div className="flex gap-y-6 2xl:gap-y-8 flex-col">
                  <div className="text-2xl">Chọn chi nhánh phục vụ</div>
                  <div className="flex flex-col gap-y-4 w-full col-span-1">
                    {province &&
                      OfficeInfo?.map((item) => {
                        return (
                          <SelectOption
                            key={item?.placeHolder}
                            placeHolder={item?.placeHolder}
                            value={item?.value}
                            clickProvice={handleClickProvince}
                            defaultValue={item?.value?.[0]?.value}
                          />
                        );
                      })}
                    {!province &&
                      OfficeInfo?.map((item) => {
                        return (
                          <SelectOption
                            key={item?.placeHolder}
                            placeHolder={item?.placeHolder}
                            value={item?.value}
                            clickProvice={handleClickProvince}
                          />
                        );
                      })}
                  </div>
                </div>
                <div className="flex gap-y-6 2xl:gap-y-8 flex-col">
                  <div className="text-2xl">Thông tin liên hệ</div>
                  <div className="flex flex-col gap-y-4 w-full col-span-1">
                    {province &&
                      ContactInfo?.map((item) => {
                        return (
                          <Input
                            key={item?.placeHolder}
                            placeHolder={item?.placeHolder}
                            value={item?.value}
                          />
                        );
                      })}
                    {!province &&
                      ContactInfo?.map((item) => {
                        return (
                          <Input
                            key={item?.placeHolder}
                            placeHolder={item?.placeHolder}
                          />
                        );
                      })}
                    {province ? (
                      <FileInputIcon
                        placeHolder="Tải CMND"
                        icon={<JpgIcon />}
                        value={"CanCuocCongDan_2.jpg"}
                      />
                    ) : (
                      <FileInputIcon
                        placeHolder="Tải CMND"
                        icon={<JpgIcon />}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-y-6 2xl:gap-y-8 flex-col">
                  <div className="text-2xl">Đặt lịch hẹn</div>
                  <div className="grid grid-cols-2 gap-x-16 gap-y-4 w-full col-span-1">
                    {province &&
                      Calendar?.map((item) => {
                        return (
                          <Input
                            key={item?.placeHolder}
                            placeHolder={item?.placeHolder}
                            value={item?.value}
                          />
                        );
                      })}
                    {!province &&
                      Calendar?.map((item) => {
                        return (
                          <Input
                            key={item?.placeHolder}
                            placeHolder={item?.placeHolder}
                          />
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <ModalSuccess trigger={<Button text="Tiếp tục" />}></ModalSuccess>
          </div>
        </div>
      </Form>
    </div>
  );
}
