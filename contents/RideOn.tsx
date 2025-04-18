"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect, useRef } from "react";

const techItems = [
  {
    title: "Vue",
    content:
      "Vue는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다",
  },
  {
    title: "JavaScript",
    content:
      "JavaScript는 웹 개발의 핵심 언어로, ES6+ 최신 문법과 비동기 프로그래밍을 활용하여 동적이고 인터랙티브한 웹 애플리케이션을 구현합니다. Promise, async/await를 통한 효율적인 비동기 처리와 모듈화된 코드 구조를 구현할 수 있습니다.",
  },
  {
    title: "Tailwind CSS",
    content:
      "Tailwind는 CSS 프레임워크로, 클래스 기반 스타일링을 합니다. 일관된 디자인을 단시간에 쉽게 구현할 수 있습니다.",
  },
  {
    title: "Pinia",
    content:
      "Pinia는 예측 가능한 상태 컨테이너로, 복잡한 상태 관리를 단방향 데이터 흐름으로 처리합니다. Action, Reducer, Store를 통한 체계적인 상태 관리로 애플리케이션의 안정성과 유지보수성을 향상시킵니다.",
  },
  {
    title: "Vue Router",
    content:
      "Vue Router는 라우팅을 관리하는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다. 또한 tailwind 사용시 클래스가 길어져 코드가 지저분해 지는 단점을 보완해 줍니다",
  },
  {
    title: "my_sql",
    content:
      "my_sql은 데이터베이스 관리 시스템으로, 데이터를 저장하고 검색하는 기능을 제공합니다. 데이터베이스 설계, 데이터 입력, 조회, 수정, 삭제 등의 기능을 제공합니다.",
  },
];

const contributionItems = [
  {
    title: "전체 구조 설계 및 디자인 목업",
    content:
      "제주 지역 기반 월별 날씨 데이터를 시각화하여 제공하는 웹 서비스의 전체 구조 설계 및 디자인 목업을 진행했습니다.",
  },
  {
    title: "외부 API 연동",
    content:
      "외부 API 연동을 통해 데이터를 가져오고 가공해서 사용자에게 보다 편리하게 사용할 수 있는 기능을 구현했습니다.",
  },
  {
    title: "협업 능력 강화",
    content:
      "MyPage 페이지 구현시 팀원과 소통해야 하는 부분이 많았습니다. 이러한 부분을 해결하기 위해 팀원과 소통하고 협업하는 능력을 강화했습니다.",
  },
  {
    title: "로그인, 회원가입 페이지 구현 및 상태관리",
    content:
      "로그인, 회원가입 페이지 구현 및 상태관리를 구현하여 컴포넌트 간 데이터 전달 및 상태 동기화를 최적화 하였습니다.",
  },
  {
    title: "Vue 내장 라이브러리 vue-validator 활용해서 유효성 검사",
    content:
      "팀의 규칙의 맞게 유효성 검사를 구현하여 프론트엔드 전문성을 강화했습니다.",
  },
  {
    title: "프로젝트 문서화",
    content:
      "프로젝트 구조와 주요 기능을 명확하게 정리한 문서화를 직접 진행했습니다. 이를 통해 팀원 간 원활한 협업을 유도했고, 프로젝트에 대한 전체적인 이해도와 유지보수 효율성을 높이는 데 기여했습니다.",
  },
  {
    title: "백엔드 설계",
    content:
      "기존 백엔드의 한계를 보완하고 프로젝트 요구사항에 맞춘 기능 강화를 위해, RESTful 구조로 백엔드를 간단히 직접 설계하고 구현했습니다.",
  },
];

const troubleshootingItems = [
  {
    title: "관련 데이터 및 정보가 없어 대용량 데이터 확인 및 정보 수집 어려움",
    content:
      "관련 데이터 및 정보가 없어 데이터 확인 및 정보 수집 어려웠던 문제가 있었습니다. 하지만 데이터 크롤링을 통해 데이터 확인 및 정보 수집을 해결했습니다.",
  },
  {
    title: "기존 백엔드 부족한 기능 강화",
    content:
      "기존 백엔드의 한계를 보완하고 프로젝트 요구사항에 맞춘 기능 강화를 위해, RESTful 구조로 백엔드를 간단히 직접 설계하고 구현했습니다. 이때 db 설계 및 구현 시 데이터 모델링 및 데이터 관계 설정에 어려움이 있었으나 구글링, AI를 활용해 해결했습니다.",
  },
];

const JejuMonthContent = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex justify-center px-4">
      <div
        id="project-modal-content"
        ref={contentRef}
        className="w-full max-w-5xl space-y-6 text-sm text-mono_700 pr-2 max-h-[70vh]"
      >
        <div className="text-black  rounded-t-xl">
          <p className="text-sm mt-1">2024.02.24 ~ 2024.03.12 | FE 팀원 5명</p>
          <p className="text-[15px] font-medium mt-2">
            Ride-On은 자전거 라이더를 위한 맞춤형 라이딩 정보 제공 플랫폼입니다.
            (🔆 다크 모드 & 라이트 모드 전환 가능) 사용자는 자전거 도로 정보,
            공공 자전거 대여소, 라이더 용품 구매, 라이딩 크루 모집, 자유게시판,
            Q&A 등의 기능을 이용할 수 있습니다.
          </p>
        </div>

        <section>
          <h4 className="text-base font-semibold text-main mt-4">
            📍 주요 기능
          </h4>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              자전거 도로 정보를 제공합니다 도로 난이도, 거리순 사용자별 수준에
              맞는 코스를 선택 할 수 있습니다.
            </li>
            <li>
              공공 자전거 대여소 정보 및 편의시설 정보를 제공합니다 대여소 위치,
              자전거 수량, 주차 공간 등 편의시설 정보를 확인 할 수 있습니다.
            </li>
            <li>
              라이더 모집 게시판의 모집 상태 및 모집 조건을 확인 할 수 있습니다.
              이때 지역 및 인원 필터 기능을 지원하여 원하는 조건으로 크루 탐색
              할 수 있습니다.
            </li>
            <li>
              라이더 용품, 자전거 부품 등 라이딩 시 필요한 라이더 용품 구매
              정보를 제공합니다.
            </li>
            <li>
              자유게시판에서 라이더들이 자유롭게 자전거 관련 정보를 공유할 수
              있습니다.
            </li>
            <li>
              Q&A 게시판에서 라이더들이 자전거 관련 질문을 할 수 있습니다.
            </li>
            <li>
              SNS 소셜 로그인 기능을 지원하여 빠른 회원 가입을 지원합니다.
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
            * 저작권 이슈가 있는 경우 첨부하지 않았습니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-7 py-4">
            {[
              { src: "/projectImages/rideon/main.png", alt: "메인 화면" },
              {
                src: "/projectImages/rideon/map.png",
                alt: "자전거 도로 정보, 편의시설 관련 화면",
              },
              {
                src: "/projectImages/rideon/shop2.png",
                alt: "라이더 용품, 자전거 부품 구매 화면",
              },
              {
                src: "/projectImages/rideon/community.png",
                alt: "자유게시판 커뮤니티 화면",
              },
              {
                src: "/projectImages/rideon/recruit.png",
                alt: "라이더 모집 게시판 화면",
              },
              {
                src: "/projectImages/rideon/qna.png",
                alt: "Q&A 게시판 화면",
              },
              {
                src: "/projectImages/rideon/mypage.png",
                alt: "마이페이지 화면",
              },
              {
                src: "/projectImages/rideon/login.png",
                alt: "로그인 화면",
              },
              {
                src: "/projectImages/RiedOn.png",
                alt: "프로젝트 요약",
              },
            ].map(({ src, alt }) => (
              <div key={src} className="text-center">
                <div className="relative w-full h-48">
                  <Image
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
        </section>
      </div>
    </div>
  );
};

export default JejuMonthContent;
