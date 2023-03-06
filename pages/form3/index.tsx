import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import ResultInput from "@/components/Input/ResultInput";
import PartyIcon from "assets/icon/Party_Popper.svg";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Form3({}: Props) {
  const [phone, setPhone] = useState("");
  const [valueChecked, setValueChecked] = useState(-1);
  const resultInputs = [
    { number: phone + "999999999", money: "6,999,999đ" },
    { number: phone + "888889999", money: "4,999,999đ" },
    { number: phone + "666666666", money: "5,999,999đ" },
    { number: phone + "626262626", money: "3,999,999đ" },
    { number: phone + "222222222", money: "8,999,999đ" },
  ];
  return (
    <div className="">
      <Form activeIndex={[1, 2]}>
        <div className="w-full h-[calc(100vh_-_62px)] flex justify-center">
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
                    type={"number"}
                    label="Số tài khoản"
                    placeHolder="Nhập số tài khoản"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <div className="text-base text-[#9F9F9F]">
                    Nhập tối thiểu 3 số, tối đa 13 số
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="text-sm">Gợi ý số đẹp</div>
                  {resultInputs?.map((item, index) => {
                    return (
                      <ResultInput
                        key={item?.number}
                        number={!!phone ? item?.number?.slice(0, 10) : ""}
                        money={!!phone ? item?.money : ""}
                        name="phone"
                        classNameDiv={
                          valueChecked === index ? "!border-[#007A47]" : ""
                        }
                        onChange={(e) => {
                          if (e.target.checked) {
                            setValueChecked(index);
                          }
                        }}
                      />
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
