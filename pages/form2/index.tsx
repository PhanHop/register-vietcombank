import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Form1({}: Props) {
  let saved;
  if (typeof window !== "undefined") {
    saved = localStorage.getItem("msst");
  }
  return (
    <div className="">
      <Form activeIndex={[1]}>
        <div className="flex w-full flex-col justify-center items-start gap-y-14 min-h-[100vh]">
          <div className="flex w-full flex-col gap-y-10">
            <div className="text-2xl text-[#000000] font-medium">
              Thông tin chung
            </div>
            <div className="grid grid-cols-2 w-full gap-x-8">
              <div className="flex w-full col-span-1">
                <div className="gap-y-8 flex flex-col w-full">
                  <Input
                    label="Mã số thuế doanh nghiệp"
                    value={saved || "2003902"}
                  />
                  <Input label="Tên doanh nghiệp" value="Công ty TNHH ABC" />
                  <Input label="Tên viết tắt" value="ABC" />
                </div>
              </div>
              <div className="flex w-full col-span-1">
                <div className="gap-y-8 flex flex-col w-full">
                  <Input
                    label="Địa chỉ đặt chủ sở chính"
                    value="Số 100, Minh Khai, Hai Bà Trưng, HN"
                  />
                  <Input label="Tên người đại diện" value="Nguyễn Đức A" />
                </div>
              </div>
            </div>
          </div>
          <Link href={"./form3"}>
            <Button text="Tiếp tục" />
          </Link>
        </div>
      </Form>
    </div>
  );
}
