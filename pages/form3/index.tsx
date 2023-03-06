import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import ResultInput from "@/components/Input/ResultInput";
import PartyIcon from "assets/icon/Party_Popper.svg";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Form3({}: Props) {
  const [phone, setPhone] = useState("");
  const [valueChecked, setValueChecked] = useState(-1);
  const resultInputs = [
    { number: 123567899, money: "5,000,000đ" },
    { number: 1233334444, money: "3,000,000đ" },
    { number: 1234568888, money: "3,000,000đ" },
    { number: 1234556666, money: "0đ" },
    { number: 1231231231, money: "0đ" },
  ];
  const [number, setNumber] = useState<number>();

  return (
    <div className="">
      <Form activeIndex={[1, 2]}>
        <div className="w-full min-h-[100vh] flex justify-center">
          <div className="flex w-[296px] 2xl:w-[360px] flex-col justify-center items-center gap-y-14">
            <div className="flex w-full flex-col gap-y-10 items-center justify-center">
              <div className="w-full flex items-center">
                <div className="flex flex-col w-full items-start">
                  <div className="text-2xl text-[#000000] font-medium">
                    Tài lộc liền tay
                  </div>
                  <div className="text-2xl text-[#000000] font-medium">
                    Chọn ngay số đẹp
                  </div>
                </div>
                <div>
                  <PartyIcon />
                </div>
              </div>
              <div className="flex w-full flex-col gap-y-8">
                <div className="flex flex-col gap-y-2">
                  <Input
                    value={number}
                    type={"number"}
                    label="Số tài khoản"
                    placeHolder="Nhập số tài khoản"
                    onFocus={(e) => {
                      setNumber(123);
                      setPhone('123');
                    }}
                  />
                  <div className="text-base text-[#9F9F9F]">
                    Nhập tối thiểu 3 số, tối đa 13 số
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="text-sm">Gợi ý số đẹp</div>
                  {resultInputs?.map((item, index) => {
                    return (
                      <div
                        className="hover:cursor-pointer"
                        key={item?.number}
                        onClick={() => {
                          if (!!phone) {
                            setValueChecked(index), setNumber(item?.number);
                          }
                        }}
                      >
                        <ResultInput
                          number={item?.number}
                          money={!!phone ? item?.money : ""}
                          name="phone"
                          classNameDiv={
                            phone && valueChecked === index
                              ? "!border-[#007A47]"
                              : ""
                          }
                          checked={!!phone && valueChecked === index}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-2 w-full">
              <Link href={"/form4"}>
                <Button
                  text="Bỏ qua"
                  className="!w-full !border-[#D4F156] !bg-white border-[2px] border-solid"
                />
              </Link>
              <Link href={"/form4"}>
                <Button text="Tiếp tục" className="!w-full" />
              </Link>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
