import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, ReactNode, useState } from "react";
import CheckIcon from "assets/icon/ic_24system_checkshield_outlined_ink1-1.svg";
import DoneIcon from "assets/icon/Union.svg";
import ReactPlayer from "react-player";
type Props = {
  trigger?: ReactNode;
  urlVideo?: string;
};
export default function ModalVideo({ trigger, urlVideo }: Props) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div onClick={openModal}>{trigger}</div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div
            onClick={closeModal}
            className={classNames(
              "px-[10px] py-2 text-[14px] font-semibold text-[#144C27] hover:cursor-pointer top-0 absolute"
            )}
          >
            Xđjdjdjjdjdjdjdjdjdjdjdjjdj
          </div>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-end pr-10 pt-5 font-bold text-2xl hover:cursor-pointer">
              X
            </div>
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
                <Dialog.Panel className="w-[80%] 2xl:w-[70%] aspect-video transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <ReactPlayer
                    url={urlVideo}
                    width="100%"
                    height="100%"
                    playing={true}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
