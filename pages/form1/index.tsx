import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Form1({}: Props) {
  const [msst, setMsst] = useState("2001241");
  return (
    <div className="">
      <Form activeIndex={[1]}>
        <div className="grid grid-cols-2 w-full min-h-[100vh]">
          <div className="flex w-full flex-col justify-center items-start gap-y-14 h-[calc(100vh_-_180px)] col-span-1">
            <div className="gap-y-10 flex flex-col w-full">
              <div className="text-2xl text-[#000000] font-medium">
                Thông tin chung
              </div>
              <Input
                label="Mã số thuế doanh nghiệp"
                onChange={(e) => setMsst(e.target.value)}
                value={msst}
              />
            </div>
            <Link
              href={"/form2"}
              onClick={() => {
                localStorage.setItem("msst", msst);
              }}
            >
              <Button text="Tra cứu thông tin" />
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}
