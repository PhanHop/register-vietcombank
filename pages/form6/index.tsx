import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import SelectOption from "@/components/Select";
import { Label } from "@headlessui/react/dist/components/label/label";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Form6({}: Props) {
  const OfficeInfo = [
    {
      placeHolder: "Chọn tỉnh thành phố",
      value: [
        { value: "Thành phố Hà Nội" },
        { value: "Thành phố Hồ Chí Minh" },
        { value: "Thành phố Quảng Ninh" },
        { value: "Thành phố Đà Nẵng" },
      ],
    },
    {
      placeHolder: "Chọn quận/huyện",
      value: [{ value: "Quận Hai Bà Trưng" }],
    },
    {
      placeHolder: "Chọn phường xã",
      value: [{ value: "Phương Minh Khai" }],
    },
    {
      placeHolder: "Chọn chi nhánh",
      value: [{ value: "Chi nhánh Hoàng Mai, số 300 Minh..." }],
    },
    {
      placeHolder: "Nhập địa chỉ",
      value: [{ value: "Số 100, P.Minh Khai, Hai Bà Trưng, Hà Nội" }],
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
    {
      placeHolder: "Nhập CMND/CCCD",
      value: "00100999020304",
    },
  ];

  const Calendar = [
    {
      placeHolder: "Nhập địa chỉ chi nhánh",
      value: "Số 100, P.Minh Khai, Hai Bà Trưng, Hà Nội",
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
  console.log({province});
  
  return (
    <div className="w-full h-full">
      <Form activeIndex={[1, 2, 3, 4, 5]}>
        <div className="w-full h-[calc(100vh_-_64px)] flex justify-center">
          <div className="w-full h-full flex flex-col gap-y-10 items-start justify-center">
            <div className="flex flex-col gap-y-16 w-full">
              <div className="grid grid-cols-2 gap-x-16 w-full">
                <div className="flex gap-y-6 2xl:gap-y-8 flex-col">
                  <div className="text-2xl">Chọn chi nhánh phục vụ</div>
                  <div className="flex flex-col gap-y-4 w-full col-span-1">
                    {OfficeInfo?.map((item) => {
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
                  </div>
                </div>
                <div className="flex gap-y-6 2xl:gap-y-8 flex-col">
                  <div className="text-2xl">Thông tin liên hệ</div>
                  <div className="flex flex-col gap-y-4 w-full col-span-1">
                    {ContactInfo?.map((item) => {
                      return (
                        <Input
                          key={item?.placeHolder}
                          placeHolder={item?.placeHolder}
                          value={item?.value}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-y-6 2xl:gap-y-8 flex-col">
                  <div className="text-2xl">Đặt lịch hẹn</div>
                  <div className="grid grid-cols-2 gap-x-16 gap-y-4 w-full col-span-1">
                    {Calendar?.map((item) => {
                      return (
                        <Input
                          key={item?.placeHolder}
                          placeHolder={item?.placeHolder}
                          value={item?.value}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <Link href={"./form3"}>
              <Button text="Tiếp tục" />
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}
