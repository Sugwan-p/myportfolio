"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const techItems = [
  {
    title: "Next.js",
    content:
      "Next.js는 서버 사이드 렌더링, 정적 사이트 생성, 라우팅, API 라우팅 등의 기능을 제공합니다. 또한 타입스크립트를 지원하여 안정적인 애플리케이션을 구현할 수 있습니다.",
  },
  {
    title: "TypeScript",
    content:
      "TypeScript는 정적 타입 시스템을 제공하여 코드의 안정성과 가독성을 높입니다. 타입 추론을 통한 코드 작성 효율성을 높이고, 런타임 오류를 줄여 안정적인 애플리케이션을 구현합니다.",
  },
  {
    title: "Tailwind CSS",
    content:
      "Tailwind는 CSS 프레임워크로, 클래스 기반 스타일링을 합니다. 일관된 디자인을 단시간에 쉽게 구현할 수 있습니다.",
  },
  {
    title: "Zustand",
    content:
      "Pinia는 예측 가능한 상태 컨테이너로, 복잡한 상태 관리를 단방향 데이터 흐름으로 처리합니다. Action, Reducer, Store를 통한 체계적인 상태 관리로 애플리케이션의 안정성과 유지보수성을 향상시킵니다.",
  },
  {
    title: "Dayjs",
    content:
      "Dayjs는 날짜 및 시간 처리를 위한 라이브러리로, 날짜 계산, 형식화, 파싱 등의 기능을 제공합니다.",
  },
  {
    title: "ApexCharts",
    content:
      "ApexCharts는 데이터를 시각화하는 라이브러리로, 다양한 차트 형태를 지원합니다. 데이터 시각화, 데이터 분석, 데이터 비교 등의 기능을 제공합니다.",
  },
];

const contributionItems = [
  {
    title: "전체 구조 설계 및 디자인 목업",
    content:
      "전체 구조 설계 및 디자인 목업을 진행했습니다. 또한 프론트팀장으로 프로젝트 초기 세팅 및 기본 컴포넌트 설계를 아토믹 디자인 패턴으로 진행했습니다.",
  },
  {
    title: "챗봇, 네이버 API 연동",
    content:
      "외부 API 연동을 통해 데이터를 가져오고 가공해서 사용자에게 보다 편리하게 사용할 수 있는 기능을 구현했습니다.",
  },
  {
    title: "백엔드 팀과 협업 능력 강화",
    content:
      "백엔드 팀과 첫 협업이여서 협업 능력을 강화하기 위해 노력했습니다. 또한 프론트팀장으로 팀원들도 협업 능력을 강화하기 위해 노력했습니다.",
  },
  {
    title: "로그인, 회원가입 페이지 구현 및 상태관리",
    content:
      "로그인, 회원가입 페이지 구현 및 상태관리를 구현하여 컴포넌트 간 데이터 전달 및 상태 동기화를 최적화 하였습니다.",
  },
  {
    title: "챗봇 채팅 기능 구현",
    content:
      "백엔드 없이 챗봇 채팅 기능을 구현하였습니다 사용자가 페이지를 보다 편리하게 사용할 수 있도록 구현했습니다.",
  },
  {
    title: "포인트 충전 기능 구현",
    content:
      "TossPayments api를 활용하여 포인트 충전 기능을 구현했습니다. 결제 성공 여부의 따라 성공, 실패 페이지로 이동합니다.",
  },
  {
    title: "쇼핑몰 기능 구현",
    content:
      "쇼핑몰 기능을 구현하여 사용자의 쇼핑몰 기능을 구현했습니다. 어떠한 기기로 들어와도 볼 수 있게 반응형 웹으로 구현했습니다.",
  },
  {
    title: "유저, 트레이너 마이페이지 구현",
    content:
      "마이페이지는 유저, 트레이너 별로 구현되어 있으며 유저는 자신의 정보, 활동 내역 등을 확인 할 수 있고 트레이너는 제휴 헬스장 등록, 수강생 내역 등을 확인 할 수 있습니다.",
  },
  {
    title: "나의 운동 기록 일지 구현",
    content:
      "해당 페이지는 사용자의 운동을 기록 할 수 있는 페이지로, 캘린더에 운동 기록을 남길 수 있고 3대 기록을 차트를 이용해서 시각화하여 사용자의 운동 기록을 확인 할 수 있습니다.",
  },
  {
    title: "공통 헤더 푸터 구현",
    content:
      "공통 푸터는 모든 페이지에 공통으로 사용되는 푸터를 구현했습니다. 헤더는 페이지별 다른 색상을 주어 페이지 구분을 쉽게 할 수 있도록 구현했습니다.",
  },
];

const troubleshootingItems = [
  {
    title: "백엔드 엔드포인트 변경",
    content:
      "백엔드 팀이 엔드포인트를 변경하여 프론트엔드 팀에서 갑자기 버그가 발생하였습니다. 이때 백엔드 팀장님께 엔드포인트 및 데이터 형식을 변경할때 프론트팀과 상의해서 변경 해달라고 요청하였고, 이를 통해서 문제를 해결할 수 있었습니다.",
  },
  {
    title: "FE 일정 관리",
    content:
      "FE 팀원들의 인원이 부족해 일정을 관리하고 프로젝트 일정 시간동안 완성도 높게 끝내는 것이 어려웠습니다. 이때 팀원들과 아침에 간단한 회의를 통해 진행사항을 공유하고 부족한 부분을 보완하고 도움을 줘서 프로젝트를 완성도 높게 끝낼 수 있었습니다.",
  },
];

const JejuMonthContent = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex justify-center px-4">
      <div
        id="project-modal-content"
        ref={contentRef}
        className="w-full max-w-5xl space-y-6 text-sm text-mono_700 pr-2 max-h-[70vh]"
      >
        <div className="text-black  rounded-t-xl">
          <p className="text-sm mt-1">
            2024.03.24 ~ 2024.04.15 | FE팀장 1명 | FE 팀원 2명
          </p>
          <p className="text-[15px] font-medium mt-2">
            GymMate는 헬스장 회원을 위한 맞춤형 라이딩 정보 제공 플랫폼입니다.
            (🔆 다크 모드 & 라이트 모드 전환 가능) 사용자는 헬스장 정보, 헬스장
            예약, PT 예약, 을 포인트를 통해서 거래할 수 있고, 사용자가 기록한
            운동 기록을 확인할 수 있습니다. 또한 챗봇을 통해 사용자가 질문에
            대한 답변을 쉽게 얻을 수 있습니다.
          </p>
        </div>

        <section>
          <h4 className="text-base font-semibold text-main mt-4">
            📍 주요 기능
          </h4>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              헬스장 정보를 거리순, 평점순, 헬스장 이름순으로 정렬할 수
              있습니다. 또한 해당 헬스장 티켓 판매 상태를 확인 할 수 있습니다.
            </li>
            <li>
              PT 예약을 할 수 있습니다 이때 트레이너 정보 밑 가능 한 시간을
              확인하여 예약 할 수 있습니다.
            </li>
            <li>헬스장 예약, PT 예약에 필요한 포인트를 충천할 수 있습니다.</li>
            <li>
              나의 운동 일지를 기록 할 수 있고, 3대 기록을 통해 GymMate유저
              평균에 비교 하여 나의 기록을 비교 할 수 있습니다.
            </li>
            <li>
              챗봇을 통해 사용자가 홈페이지 이용 중 질문에 대한 답변을 쉽게 얻을
              수 있습니다.
            </li>
            <li>
              마이페이지에서 PT정보, 가능한 시간대를 등록 할 수 있고, PT 예약
              내역을 확인 할 수 있습니다.
            </li>
            <li>
              SNS 소셜 로그인을 통해서만 회원가입을 할 수 있고, 첫 로그인시
              기본정보를 입력하여 회원가입을 완료 할 수 있습니다.
            </li>
          </ul>
        </section>

        <section>
          <h4 className="text-base font-semibold text-main mt-4">
            🛠 사용 기술
          </h4>
          <div className="space-y-2 mt-2">
            {techItems.map(({ title, content }, idx) => (
              <Disclosure key={idx}>
                {({ open }) => (
                  <div className="border rounded bg-gray-100">
                    <Disclosure.Button className="w-full flex justify-between items-center px-4 py-2 text-left font-medium text-gray-800 bg-gray-200 hover:bg-gray-300">
                      <span>{title}</span>
                      <ChevronDownIcon
                        className={`w-5 h-5 transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 py-3 text-sm text-gray-700 bg-white">
                      {content}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-base font-semibold text-main mt-4">
            ✨ 작업 기여도
          </h4>
          <div className="space-y-2 mt-2">
            {contributionItems.map(({ title, content }, idx) => (
              <Disclosure key={idx} defaultOpen>
                {({ open }) => (
                  <div className="border rounded bg-gray-100">
                    <Disclosure.Button className="w-full flex justify-between items-center px-4 py-2 text-left font-medium text-gray-800 bg-gray-200 hover:bg-gray-300">
                      <span>{title}</span>
                      <ChevronDownIcon
                        className={`w-5 h-5 transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 py-3 text-sm text-gray-700 bg-white">
                      {content}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-base font-semibold text-main mt-4">
            🐞 Trouble Shooting
          </h4>
          <div className="space-y-2 mt-2">
            {troubleshootingItems.map(({ title, content }, idx) => (
              <Disclosure key={idx}>
                {({ open }) => (
                  <div className="border rounded bg-gray-100">
                    <Disclosure.Button className="w-full flex justify-between items-center px-4 py-2 text-left font-medium text-gray-800 bg-gray-200 hover:bg-gray-300">
                      <span>{title}</span>
                      <ChevronDownIcon
                        className={`w-5 h-5 transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-3 text-sm text-gray-700 bg-white"
                    >
                      {content}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-base font-semibold text-main mt-6">
            💻 작업 화면
          </h4>
          <p className="text-mono_400 text-sm mt-1">
            이미지 클릭 시 크게 볼 수 있습니다. (작업화면이 현재와 다를 수
            있습니다.)
          </p>
          <p className="text-mono_400 text-xs mb-4">
            * 메인 이미지는 인트로영상으로 대체합니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-7 py-4">
            {[
              { src: "/projectImages/GymMate/chat.png", alt: "챗봇 페이지" },
              {
                src: "/projectImages/GymMate/gym.png",
                alt: "제휴 헬스장 정보 페이지",
              },
              {
                src: "/projectImages/GymMate/shop.png",
                alt: "헬스용품 판매 페이지",
              },
              {
                src: "/projectImages/GymMate/PT.png",
                alt: "PT 상품 정보 페이지",
              },
              {
                src: "/projectImages/GymMate/ptmain.png",
                alt: "PT 선생님 정보 페이지",
              },
              {
                src: "/projectImages/GymMate/myfi.png",
                alt: "나의 운동 일지 페이지",
              },
              {
                src: "/projectImages/GymMate/mypage.png",
                alt: "트레이너 마이페이지 페이지",
              },
              {
                src: "/projectImages/GymMate/toss.png",
                alt: "포인트 충천 페이지",
              },
              {
                src: "/projectImages/GymMate/point.png",
                alt: "결제 성공 페이지",
              },
            ].map(({ src, alt }) => (
              <div key={src} className="text-center">
                <div className="relative w-full h-48">
                  <Image
                    onClick={() => setSelectedImage(src)}
                    src={src}
                    alt={alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded shadow-md"
                    priority
                  />
                </div>
                <p className="text-xs mt-2">{alt}</p>
              </div>
            ))}
          </div>
          {selectedImage && (
            <div
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[9999] bg-black bg-opacity-70 flex items-center justify-center"
            >
              <div className="relative w-[90%] max-w-4xl">
                <Image
                  src={selectedImage}
                  alt="확대 이미지"
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 text-white hover:text-mono_400 bg-transparent rounded-full p-1 hover:bg-white/20 transition-colors"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default JejuMonthContent;
