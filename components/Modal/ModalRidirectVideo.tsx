import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";
import CloseIcon from "assets/icon/ic_24system_close_outlined_ink1.svg";
import DoneIcon from "assets/icon/Union.svg";
import Link from "next/link";

type Props = {
  trigger?: ReactNode;
};
export default function ModalRidirectVideo({ trigger }: Props) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
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
                  <div
                    className="absolute top-4 right-4 hover:cursor-pointer"
                    onClick={closeModal}
                  >
                    <CloseIcon />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-y-6 pt-12 pb-9">
                      <div className="flex gap-y-6 flex-col px-12 text-center ">
                        <div className="w-full flex items-center justify-center">
                          <div className="w-[85px] h-[85px] rounded-[100px] flex justify-center items-center bg-[#96CF4D]">
                            <DoneIcon />
                          </div>
                        </div>
                        <div className="text-2xl w-[370px]">
                          Quý khách muốn trải nghiệm dịch vụ ngân hàng số cho
                          khách hàng doanh nghiệp ngay?
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t-[1px] border-solid border-[#EAEAEA]">
                      <Link href={'/video'} className="outline-none">
                        <button
                          className="bg-[#007A47] w-full h-full py-[14px] rounded-[12px] text-white outline-none"
                          onClick={closeModal}
                        >
                          Đồng ý
                        </button>
                      </Link>
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
