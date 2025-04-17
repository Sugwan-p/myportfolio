"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect, useRef } from "react";

const techItems = [
  {
    title: "React",
    content:
      "React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다",
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
    title: "React Redux",
    content:
      "Redux는 예측 가능한 상태 컨테이너로, 복잡한 상태 관리를 단방향 데이터 흐름으로 처리합니다. Action, Reducer, Store를 통한 체계적인 상태 관리로 애플리케이션의 안정성과 유지보수성을 향상시킵니다.",
  },
  {
    title: "Styled Components",
    content:
      "Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다. 또한 tailwind 사용시 클래스가 길어져 코드가 지저분해 지는 단점을 보완해 줍니다",
  },
];

const contributionItems = [
  {
    title: "전체 구조 설계 및 디자인 목업",
    content:
      "제주 지역 기반 월별 날씨 데이터를 시각화하여 제공하는 웹 서비스의 전체 구조 설계 및 디자인 목업을 진행했습니다.",
  },
  {
    title: "CRUD 기능 구현을 통해 프론트엔드 전문성 강화",
    content: "커뮤니티 페이지 게시물 조회 작성 및 삭제 수정 기능 구현했습니다.",
  },
  {
    title: "QA에서 발견된 문제점들을 적극적으로 해결하여 서비스 개선 구현",
    content:
      "기획 단계에서 프론트팀과 협업하며 Jira, slack, Notion을 활용하여 이슈를 구체적으로 논의하고 해결했습니다.",
  },
  {
    title: "Redux 를 활용한 상태관리",
    content:
      "Redux를 활용하여 상태 관리를 구현하여 컴포넌트 간 데이터 전달 및 상태 동기화를 최적화",
  },
  {
    title: "커스텀 페이지네이션 컴포넌트 설계 및 구현",
    content:
      "외부 라이브러리 의존성 없이 순수 React와 JavaScript를 활용하여 재사용 가능한 페이지네이션 컴포넌트를 구현했습니다. 페이지 이동, 페이지 범위 계산, 동적 페이지 크기 조절 등의 기능을 모두 커스텀하게 구현하여 프로젝트의 요구사항에 최적화된 솔루션을 제공했습니다.",
  },
  {
    title: "프로젝트 문서화",
    content:
      "프로젝트 구조와 주요 기능을 명확하게 정리한 문서화를 직접 진행했습니다. 이를 통해 팀원 간 원활한 협업을 유도했고, 프로젝트에 대한 전체적인 이해도와 유지보수 효율성을 높이는 데 기여했습니다.",
  },
];

const troubleshootingItems = [
  {
    title: "상태관리시 리렌더링 문제 해결",
    content:
      "Redux 상태 관리 시 상태관리 값중 하나만 변경되더라고 전부 리렌더링 되는 현상 해결",
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
          <p className="text-sm mt-1">2024.01.06 ~ 2024.02.07 | FE 팀원 5명</p>
          <p className="text-[15px] font-medium mt-2">
            제주 지역 기반 여행을 떠나는 사용자들에게 일정 관리 및 제주시 컨텐츠
            안내,개인 꿀팁 공유 등을 시각화하여 제공하는 웹 서비스입니다.
          </p>
        </div>

        <section>
          <h4 className="text-base font-semibold text-main mt-4">
            📍 주요 기능
          </h4>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              사용자가 작성한 일정을 조회하고 추가할 수 있는 캘린더 기능을
              제공합니다
            </li>
            <li>제주도 컨텐츠를 각 카테고리별로 선택하여 조회할 수 있습니다</li>
            <li>
              제주도 여행에서 좋았던 점과 아쉬웠던 점 등을 공유하여 사용자들이
              참고할 수 있도록 합니다
            </li>
            <li>
              모든 사용자가 웹 서비스를 보다 편리하게 이용할 수 있도록
              설계되었습니다
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
              { src: "/projectImages/jeju/jejumain.png", alt: "메인 화면" },
              {
                src: "/projectImages/jeju/jejucalender.png",
                alt: "제주 일정 관련 캘린더 화면",
              },
              {
                src: "/projectImages/jeju/jejusearch.png",
                alt: "제주 여행지 관련 검색 화면",
              },
              {
                src: "/projectImages/jeju/jejucommunity.png",
                alt: "제주 커뮤니티 화면",
              },
              {
                src: "/projectImages/jeju/jejumypage.png",
                alt: "마이페이지 화면",
              },
              {
                src: "/projectImages/200OK.png",
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
