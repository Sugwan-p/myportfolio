"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title = "Modal", children }: ModalProps) => (
  <Transition show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={onClose} static>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      </Transition.Child>

      <div
        className="fixed inset-0 flex items-center justify-center p-4 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Transition.Child
          static
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="scale-95 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="ease-in duration-200"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
        >
          <Dialog.Panel
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl rounded-xl bg-white p-6 shadow-xl  overflow-y-auto max-h-[90vh]"
          >
            <div className=" z-10 bg-white dark:bg-mono_100 pb-4 mb-4">
              <div className="flex items-center justify-between">
                <Dialog.Title
                  onClick={(e) => e.stopPropagation()}
                  className="text-lg font-semibold text-mono_900"
                >
                  {title}
                </Dialog.Title>
                <button
                  onClick={onClose}
                  className="text-mono_400 hover:text-mono_700"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 프로젝트 별 콘텐츠 렌더링 */}
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
);

export default Modal;
