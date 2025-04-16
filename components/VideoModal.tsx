"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  videoSrc: string;
  onNext: () => void;
  onPrev: () => void;
}

const VideoModal = ({
  open,
  onClose,
  videoSrc,
  onNext,
  onPrev,
}: VideoModalProps) => (
  <Transition show={open} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-80" />
      </Transition.Child>

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="relative w-full max-w-5xl rounded-lg overflow-hidden">
            {/* 닫기 버튼 */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-red-400 z-10"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* 이전 버튼 */}
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-[#40F8D2] z-10"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>

            {/* 다음 버튼 */}
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-[#40F8D2] z-10"
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>

            <video
              src={videoSrc}
              autoPlay
              muted
              controls
              className="w-full h-auto object-contain"
            />
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
);

export default VideoModal;
