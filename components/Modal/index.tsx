import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, ReactNode, useState } from "react";
import styles from "./styles.module.css";
import SalaryIcon from "assets/icon/Salary_account.svg";
import CurrentAccountIcon from "assets/icon/Current_account.svg";
import ProductHubIcon from "assets/icon/Product_Hub.svg";
import Link from "next/link";

type Props = {
  trigger?: ReactNode;
};
export default function MyModal({ trigger }: Props) {
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
      <div onClick={openModal}>{trigger}</div>

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
                <Dialog.Panel className="  transform overflow-hidden rounded-[24px] bg-white text-left align-middle shadow-xl transition-all">
                  <div className="border-b-[1px] border-solid py-5">
                    <Dialog.Title
                      as="div"
                      className="text-[24px] font-medium leading-8 flex items-center justify-center"
                    >
                      Loại hình tổ chức
                    </Dialog.Title>
                  </div>
                  <div className="pt-4 pb-6 px-6 flex gap-y-4 flex-col">
                    <div className="text-[16px] leading-6 text-[#000000] ">
                      Chào Quý Khách, anh/chị là...
                    </div>
                    <div className="flex flex-col gap-y-5">
                      {modalContent?.map((item, index) => {
                        if (index === 0) {
                          return (
                            <Link
                              href={"/to-chuc"}
                              key={item?.value}
                              className="outline-none"
                              onClick={closeModal}
                            >
                              <div
                                key={item?.value}
                                className={classNames(
                                  "w-[517px] p-6 flex items-center gap-x-4 rounded-[16px] hover:cursor-pointer",
                                  { "bg-[#F7F7F7]": index !== 0 },
                                  styles.activeModal
                                )}
                              >
                                <div className="w-20 h-20 rounded-[12px] bg-[#FFFFFF] p-4">
                                  {item?.icon}
                                </div>
                                <div className="flex flex-col gap-y-2">
                                  <div className="text-[24px] leading-8 text-[#000000] font-medium">
                                    {item?.title}
                                  </div>
                                  <div className="text-[16px] leading-6 text-[#6F6F6F]">
                                    {item?.value}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        }
                        return (
                          <div
                            key={item?.value}
                            className={classNames(
                              "w-[517px] p-6 flex items-center gap-x-4 rounded-[16px] hover:cursor-pointer",
                              { "bg-[#F7F7F7]": index !== 0 },
                              styles.activeModal
                            )}
                          >
                            <div className="w-20 h-20 rounded-[12px] bg-[#FFFFFF] p-4">
                              {item?.icon}
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <div className="text-[24px] leading-8 text-[#000000] font-medium">
                                {item?.title}
                              </div>
                              <div className="text-[16px] leading-6 text-[#6F6F6F]">
                                {item?.value}
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
