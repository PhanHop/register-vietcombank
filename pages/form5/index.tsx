import Button from "@/components/Button";
import Form from "@/components/Form";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.css";
type Props = {};

export default function Form5({}: Props) {
  return (
    <div className="relative">
      <Form
        activeIndex={[1, 2, 3, 4]}
        classname="!lg:px-[24px] xl:px-[44px] 2xl:px-[64px]"
      >
        <div className="w-full min-h-[100vh] overflow-scroll relative py-12 2xl:py-20">
          <div className="flex items-center justify-center w-full aspect-[8/10] relative">
            <Image
              src={"/anh1.png"}
              alt="anh"
              layout="fill"
              className="relative"
            />
          </div>
        </div>
      </Form>
      <div className="grid grid-cols-7 fixed bottom-20 right-0 left-0">
        <div className="col-span-2"></div>
        <div className="col-span-5 w-full flex justify-center">
          <Link href={"./form6"}>
            <Button text="Tiếp tục" />
          </Link>
        </div>
      </div>
    </div>
  );
}
