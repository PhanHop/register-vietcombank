import React from "react";
import ListMenuIcon from "assets/icon/ic_24system_list_menu_ink500.svg";
import AccountIcon from "assets/icon/User.svg";
import LogOutIcon from "assets/icon/LogOut.svg";
import Image from "next/image";
import MyModal from "../Modal";
import Link from "next/link";
import classNames from "classnames";
import styles from "./styles.module.css";
import Logo from "assets/icon/logo.svg";
import ModalVideo from "../Modal/ModalVideo";
const tabHeader = ["Sản phẩm Dịch vụ", "Công cụ tiện ích", "Hỗ trợ 24/7"];
export default function HeaderVideo() {
  return (
    <div className="border-b-[1px] border-solid py-[18px]">
      <div className="px-8 flex justify-between">
        <div className="flex items-center gap-x-8">
          <div className="flex gap-x-6 items-center">
            <div className="h-11 w-11 rounded-[36px] bg-[#EAEAEA] flex items-center justify-center hover:cursor-pointer">
              <ListMenuIcon />
            </div>
            <div className="h-[34px] w-[1px] bg-[#DFDFDF]"></div>
            <Link href={"/"} className="hover:cursor-pointer">
              <Logo />
            </Link>
          </div>
        </div>
        <div className="flex gap-x-8 items-center">
          <div className="flex gap-x-2 items-center hover:cursor-pointer">
            <div className="h-9 w-9 rounded-[52px] bg-[#EAEAEA] flex items-center justify-center">
              <AccountIcon />
            </div>
            <div className="font-medium">Maker 1617</div>
          </div>
          <ModalVideo
            urlVideo="https://youtu.be/UTvAqSRgXFs"
            trigger={
              <div className="bg-[#FFEEED] w-8 h-8 rounded-[52px] flex items-center justify-center hover:cursor-pointer">
                <LogOutIcon />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
