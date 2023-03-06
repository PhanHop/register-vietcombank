import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, ReactNode, useState } from "react";
import styles from "./styles.module.css";
import SalaryIcon from "assets/icon/Salary_account.svg";
import CurrentAccountIcon from "assets/icon/Current_account.svg";
import ProductHubIcon from "assets/icon/Product_Hub.svg";
import CheckIcon from "assets/icon/ic_24system_checkshield_outlined_ink1-1.svg";
import DoneIcon from "assets/icon/Union.svg";
import Link from "next/link";

type Props = {
  trigger?: ReactNode;
};
export default function ModalSuccess({ trigger }: Props) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const modalContent = [
    {
      icon: <SalaryIcon />,
      title: "Khách hàng doanh nghiệp",
      value: "Doanh thu trên 100 tỷ / năm",
    },
    {
      icon: <CurrentAccountIcon />,
      title: "SMEs",
      value: "Doanh thu dưới 100 tỷ / năm",
    },
    {
      icon: <ProductHubIcon />,
      title: "Định chế tài chính",
      value: "Ngân hàng, tổ chức tài chính",
    },
  ];
  return (
    <>
      <div
        onClick={openModal}
        className={classNames(
          "px-[10px] py-2 text-[14px] font-semibold text-[#144C27] hover:cursor-pointer"
        )}
      >
        {trigger}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[466px] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-y-6 pt-12 pb-9">
                      <div className="flex gap-y-6 flex-col px-12 text-center ">
                        <div className="w-full flex items-center justify-center">
                          <div className="w-[85px] h-[85px] rounded-[100px] flex justify-center items-center bg-[#96CF4D]">
                            <DoneIcon />
                          </div>
                        </div>
                        <div className="text-2xl">Xác nhận thành công</div>
                        <div className="text-base text-[#6F6F6F]">
                          Quý khách có thể liên hệ Chi nhánh Hoàng Mai theo số
                          điện thoại 0204 56 78 90 - xyz@vcb.com.vn hoặc cán bộ
                          ngân hàng sẽ liên hệ ngay với quý khách để hoàn thiện
                          hồ sơ
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-2.5 px-12">
                        <div className="flex gap-x-2">
                          <CheckIcon />
                          <div className="text-sm">
                            Email đã được gửi tới khách hàng
                          </div>
                        </div>
                        <div className="flex gap-x-2">
                          <CheckIcon />
                          <div className="text-sm">
                            Email đã được gửi đến cán bộ chi nhánh phụ trách
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t-[1px] border-solid border-[#EAEAEA]">
                      <button
                        className="bg-[#007A47] w-full h-full py-[14px] rounded-[12px] text-white outline-none "
                        onClick={closeModal}
                      >
                        Hoàn tất
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
