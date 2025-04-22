"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { Project } from "@/types/project";
import Modal from "@/components/Modal";
import JejuMonthContent from "@/contents/JejuMonth";
import RideOnContent from "@/contents/RideOn";
import GymMateContent from "@/contents/GymMate";
interface Props {
  mainProjects: Project[];
  subProjects: {
    title: string;
    description: string;
    tags: string[];
    link: string;
  }[];
  onDemoClick: (project: Project) => void;
  onVideoClick: (url: string, index: number) => void;
}

const fadeInItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProjectItem = ({
  project,
  index,
  onDemoClick,
  onVideoClick,
  onTitleClick,
}: {
  project: Project;
  index: number;
  onDemoClick: (project: Project) => void;
  onVideoClick: (url: string, index: number) => void;
  onTitleClick: (title: string) => void;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInItem}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1.0, delay: index * 0.3, ease: "easeInOut" }}
      className="grid md:grid-cols-2 gap-8"
    >
      {project.video ? (
        <div
          onClick={() => onVideoClick(project.video!, index)}
          className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
        >
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="relative aspect-video">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      )}
      <div>
        <h3
          className="text-xl font-bold mb-4 cursor-pointer hover:underline"
          onClick={() => onTitleClick(project.title)}
        >
          {project.title}
        </h3>
        <p className="text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="text-xs px-3 py-1 rounded-full bg-[#1a2744] text-[#40F8D2]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => onDemoClick(project)}
            className="text-sm text-[#40F8D2] hover:underline inline-flex items-center"
          >
            Demo <ArrowRight className="ml-1 h-4 w-4" />
          </button>
          <a
            href={project.githubLink}
            className="text-sm text-[#40F8D2] hover:underline inline-flex items-center"
          >
            GitHub <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const SubProjectItem = ({
  project,
  index,
}: {
  project: {
    title: string;
    description: string;
    tags: string[];
    link: string;
  };
  index: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInItem}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1.0, delay: index * 0.3, ease: "easeInOut" }}
      className="bg-[#1a2744] p-6 rounded-lg"
    >
      <h3 className="font-medium mb-2">{project.title}</h3>
      <p className="text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="text-xs px-2 py-1 rounded-full bg-[#0d1b31] text-[#40F8D2]"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="text-sm text-[#40F8D2] hover:underline inline-flex items-center"
      >
        자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </motion.div>
  );
};

const ProjectsSection = ({
  mainProjects,
  subProjects,
  onDemoClick,
  onVideoClick,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const openModal = (title: string) => {
    setSelectedTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const renderProjectContent = (title: string): React.ReactNode => {
    switch (title) {
      case "Jeju-Month":
        return <JejuMonthContent />;
      case "GymMate":
        return <GymMateContent />;
      case "RideOn":
        return <RideOnContent />;
      default:
        return (
          <p className="text-sm text-mono_500">
            임시 콘텐츠입니다. 추후 수정 예정입니다.
          </p>
        );
    }
  };

  // 🔁 상태 유지
  const [showBlogList, setShowBlogList] = useState(false);

  return (
    <>
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">Main Projects</h2>
          <div className="space-y-20">
            {mainProjects.map((project, index) => (
              <ProjectItem
                key={index}
                index={index}
                project={project}
                onDemoClick={onDemoClick}
                onVideoClick={onVideoClick}
                onTitleClick={openModal}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="sub-projects" className="py-20 px-4 bg-[#0d1b31]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">Sub Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {subProjects.map((project, index) => (
              <SubProjectItem key={index} index={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedTitle}>
        {renderProjectContent(selectedTitle)}
        {/* Jeju-Month 관련 버튼 */}
        {selectedTitle === "Jeju-Month" && (
          <div className="fixed right-24 md:right-12 top-12 md:top-16 z-[999] flex flex-row items-center gap-6 md:flex-col md:gap-8">
            {/* GitHub 버튼 */}
            <div className="relative w-12 h-12 -mt-4 md:mt-0  items-center justify-center">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(
                    "https://github.com/Sugwan-p/jejumonth-frontend",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="-mt-1 w-12 h-12 rounded-full bg-gray-300 md:bg-white flex items-center justify-center shadow hover:scale-110 transition-transform cursor-pointer"
              >
                <Image
                  src="/icons/Github.svg"
                  alt="GitHub"
                  width={28}
                  height={28}
                />
              </button>
              <p className="mt-2 text-xs text-black md:text-white font-medium">
                Github
              </p>
            </div>

            {/* 티스토리 버튼 + 리스트 */}
            <div
              className="relative group flex flex-col items-center"
              onMouseEnter={() => setShowBlogList(true)}
              onMouseLeave={() => setShowBlogList(false)}
            >
              <button
                type="button"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow hover:scale-110 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                  <title>티스토리 로고</title>
                  <path
                    d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
                    fill="#FF5722"
                  />
                </svg>
              </button>
              <p className="mt-2 text-xs text-black md:text-white font-medium">
                Tistory
              </p>

              {/* 블로그 리스트 */}
              <div
                className={`absolute right-[64px] top-0 transition-all duration-300 w-[260px] bg-white rounded shadow-lg p-4 z-10 ${
                  showBlogList
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4 pointer-events-none"
                }`}
              >
                <p className="text-sm font-semibold mb-2 text-black">
                  관련 블로그 바로가기
                </p>
                <ul className="space-y-2 text-sm text-mono_700 py-2">
                  <li>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(
                          "https://suhat.tistory.com/2",
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                      className="w-full flex items-center gap-2 hover:underline px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459"
                        width={24}
                        height={24}
                      >
                        <title>티스토리 로고</title>
                        <path
                          d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
                          fill="#FF5722"
                        />
                      </svg>
                      <p>개발 회고록</p>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(
                          "https://suhat.tistory.com/1",
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                      className="w-full flex items-center gap-2 hover:underline px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459"
                        width={24}
                        height={24}
                      >
                        <title>티스토리 로고</title>
                        <path
                          d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
                          fill="#FF5722"
                        />
                      </svg>
                      <p>발표자료 및 피그마</p>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(
                          "https://efficient-knot-8e2.notion.site/1b3931125dd680759976daa060aa3fde?v=1b3931125dd6816d88c2000cba4c7216",
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                      className="w-full flex items-center gap-2 hover:underline px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 31.494141 5.1503906 L 5.9277344 7.0019531 A 1.0001 1.0001 0 0 0 5.9042969 7.0039062 A 1.0001 1.0001 0 0 0 5.8652344 7.0097656 A 1.0001 1.0001 0 0 0 5.7929688 7.0214844 A 1.0001 1.0001 0 0 0 5.7636719 7.0292969 A 1.0001 1.0001 0 0 0 5.7304688 7.0371094 A 1.0001 1.0001 0 0 0 5.6582031 7.0605469 A 1.0001 1.0001 0 0 0 5.6113281 7.0800781 A 1.0001 1.0001 0 0 0 5.5839844 7.0917969 A 1.0001 1.0001 0 0 0 5.4335938 7.1777344 A 1.0001 1.0001 0 0 0 5.4082031 7.1933594 A 1.0001 1.0001 0 0 0 5.3476562 7.2421875 A 1.0001 1.0001 0 0 0 5.3359375 7.2539062 A 1.0001 1.0001 0 0 0 5.2871094 7.2988281 A 1.0001 1.0001 0 0 0 5.2578125 7.3320312 A 1.0001 1.0001 0 0 0 5.2148438 7.3828125 A 1.0001 1.0001 0 0 0 5.1992188 7.4023438 A 1.0001 1.0001 0 0 0 5.15625 7.4648438 A 1.0001 1.0001 0 0 0 5.1445312 7.484375 A 1.0001 1.0001 0 0 0 5.1074219 7.5488281 A 1.0001 1.0001 0 0 0 5.09375 7.5761719 A 1.0001 1.0001 0 0 0 5.0644531 7.6484375 A 1.0001 1.0001 0 0 0 5.0605469 7.65625 A 1.0001 1.0001 0 0 0 5.015625 7.8300781 A 1.0001 1.0001 0 0 0 5.0097656 7.8613281 A 1.0001 1.0001 0 0 0 5.0019531 7.9414062 A 1.0001 1.0001 0 0 0 5.0019531 7.9453125 A 1.0001 1.0001 0 0 0 5 8 L 5 33.738281 C 5 34.76391 5.3151542 35.766862 5.9042969 36.607422 A 1.0001 1.0001 0 0 0 5.953125 36.671875 L 12.126953 44.101562 A 1.0001 1.0001 0 0 0 12.359375 44.382812 L 12.75 44.851562 A 1.0006635 1.0006635 0 0 0 12.917969 45.011719 C 13.50508 45.581386 14.317167 45.917563 15.193359 45.861328 L 42.193359 44.119141 C 43.762433 44.017718 45 42.697027 45 41.125 L 45 15.132812 C 45 14.209354 44.565523 13.390672 43.904297 12.839844 A 1.0008168 1.0008168 0 0 0 43.748047 12.695312 L 43.263672 12.337891 A 1.0001 1.0001 0 0 0 43.0625 12.189453 L 34.824219 6.1132812 C 33.865071 5.4054876 32.682705 5.0641541 31.494141 5.1503906 z M 31.638672 7.1445312 C 32.352108 7.0927682 33.061867 7.29845 33.636719 7.7226562 L 39.767578 12.246094 L 14.742188 13.884766 C 13.880567 13.941006 13.037689 13.622196 12.425781 13.011719 L 12.423828 13.011719 L 8.2539062 8.8398438 L 31.638672 7.1445312 z M 7 10.414062 L 11.011719 14.425781 L 12 15.414062 L 12 40.818359 L 7.5390625 35.449219 C 7.1899317 34.947488 7 34.351269 7 33.738281 L 7 10.414062 z M 41.935547 14.134766 C 42.526748 14.096822 43 14.54116 43 15.132812 L 43 41.125 C 43 41.660973 42.59938 42.08847 42.064453 42.123047 L 15.064453 43.865234 C 14.770856 43.884078 14.506356 43.783483 14.314453 43.605469 A 1.0006635 1.0006635 0 0 0 14.3125 43.603516 C 14.3125 43.603516 14.310547 43.601562 14.310547 43.601562 C 14.306465 43.597733 14.304796 43.59179 14.300781 43.587891 A 1.0006635 1.0006635 0 0 0 14.289062 43.572266 C 14.112238 43.393435 14 43.149431 14 42.867188 L 14 16.875 C 14 16.337536 14.39999 15.911571 14.935547 15.876953 L 41.935547 14.134766 z M 38.496094 19 L 33.421875 19.28125 C 32.647875 19.36125 31.746094 19.938 31.746094 20.875 L 33.996094 21.0625 L 33.996094 31.753906 L 26.214844 19.751953 L 20.382812 20.080078 C 19.291812 20.160078 18.994141 20.970953 18.994141 22.001953 L 21.244141 22.001953 L 21.244141 37.566406 C 21.244141 37.566406 20.191844 37.850406 19.839844 37.941406 C 19.091844 38.134406 18.994141 38.784906 18.994141 39.253906 C 18.994141 39.253906 22.746656 39.065547 24.472656 38.935547 C 26.431656 38.785547 26.496094 37.472656 26.496094 37.472656 L 24.246094 37.003906 L 24.246094 25.470703 C 24.246094 25.470703 29.965844 34.660328 31.714844 37.361328 C 32.537844 38.630328 33.152375 38.878906 34.234375 38.878906 C 35.122375 38.878906 35.962141 38.616594 36.994141 38.058594 L 36.994141 20.697266 C 36.994141 20.697266 37.184203 20.687141 37.783203 20.494141 C 38.466203 20.273141 38.496094 19.656 38.496094 19 z"></path>
                      </svg>
                      <p>프로젝트 정리 및 일정 관리</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* RideOn 관련 버튼 */}
        {selectedTitle === "RideOn" && (
          <div className="fixed right-24 md:right-12 top-12 md:top-16 z-[999] flex flex-row items-center gap-6 md:flex-col md:gap-8">
            {/* GitHub  */}
            <div className="relative w-12 h-12 -mt-4 md:mt-0  items-center justify-center">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(
                    "https://github.com/Sugwan-p/RideOn",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="-mt-1 w-12 h-12 rounded-full bg-gray-300 md:bg-white flex items-center justify-center shadow hover:scale-110 transition-transform cursor-pointer"
              >
                <Image
                  src="/icons/Github.svg"
                  alt="GitHub"
                  width={28}
                  height={28}
                />
              </button>
              <p className="mt-2 text-xs text-black md:text-white font-medium">
                Github
              </p>
            </div>

            {/* 티스토리 버튼 + 리스트 */}
            <div
              className="relative group flex flex-col items-center"
              onMouseEnter={() => setShowBlogList(true)}
              onMouseLeave={() => setShowBlogList(false)}
            >
              <button
                type="button"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow hover:scale-110 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                  <title>티스토리 로고</title>
                  <path
                    d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
                    fill="#FF5722"
                  />
                </svg>
              </button>
              <p className="mt-2 text-xs text-black md:text-white font-medium">
                Tistory
              </p>

              {/* 블로그 리스트 */}
              <div
                className={`absolute right-[64px] top-0 transition-all duration-300 w-[260px] bg-white rounded shadow-lg p-4 z-10 ${
                  showBlogList
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4 pointer-events-none"
                }`}
              >
                <p className="text-sm font-semibold mb-2 text-black">
                  관련 블로그 바로가기
                </p>
                <ul className="space-y-2 text-sm text-mono_700 py-2">
                  <li>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(
                          "https://suhat.tistory.com/3",
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                      className="w-full flex items-center gap-2 hover:underline px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459"
                        width={24}
                        height={24}
                      >
                        <title>티스토리 로고</title>
                        <path
                          d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
                          fill="#FF5722"
                        />
                      </svg>
                      <p>프로젝트 피그마, 발표자료</p>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(
                          "https://suhat.tistory.com/4",
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                      className="w-full flex items-center gap-2 hover:underline px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459"
                        width={24}
                        height={24}
                      >
                        <title>티스토리 로고</title>
                        <path
                          d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
                          fill="#FF5722"
                        />
                      </svg>
                      <p>프로젝트 회고록</p>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(
                          "https://efficient-knot-8e2.notion.site/1b4931125dd680648bedc53c886608f0?v=1b4931125dd6816e9557000c8e7890fe",
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                      className="w-full flex items-center gap-2 hover:underline px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 31.494141 5.1503906 L 5.9277344 7.0019531 A 1.0001 1.0001 0 0 0 5.9042969 7.0039062 A 1.0001 1.0001 0 0 0 5.8652344 7.0097656 A 1.0001 1.0001 0 0 0 5.7929688 7.0214844 A 1.0001 1.0001 0 0 0 5.7636719 7.0292969 A 1.0001 1.0001 0 0 0 5.7304688 7.0371094 A 1.0001 1.0001 0 0 0 5.6582031 7.0605469 A 1.0001 1.0001 0 0 0 5.6113281 7.0800781 A 1.0001 1.0001 0 0 0 5.5839844 7.0917969 A 1.0001 1.0001 0 0 0 5.4335938 7.1777344 A 1.0001 1.0001 0 0 0 5.4082031 7.1933594 A 1.0001 1.0001 0 0 0 5.3476562 7.2421875 A 1.0001 1.0001 0 0 0 5.3359375 7.2539062 A 1.0001 1.0001 0 0 0 5.2871094 7.2988281 A 1.0001 1.0001 0 0 0 5.2578125 7.3320312 A 1.0001 1.0001 0 0 0 5.2148438 7.3828125 A 1.0001 1.0001 0 0 0 5.1992188 7.4023438 A 1.0001 1.0001 0 0 0 5.15625 7.4648438 A 1.0001 1.0001 0 0 0 5.1445312 7.484375 A 1.0001 1.0001 0 0 0 5.1074219 7.5488281 A 1.0001 1.0001 0 0 0 5.09375 7.5761719 A 1.0001 1.0001 0 0 0 5.0644531 7.6484375 A 1.0001 1.0001 0 0 0 5.0605469 7.65625 A 1.0001 1.0001 0 0 0 5.015625 7.8300781 A 1.0001 1.0001 0 0 0 5.0097656 7.8613281 A 1.0001 1.0001 0 0 0 5.0019531 7.9414062 A 1.0001 1.0001 0 0 0 5.0019531 7.9453125 A 1.0001 1.0001 0 0 0 5 8 L 5 33.738281 C 5 34.76391 5.3151542 35.766862 5.9042969 36.607422 A 1.0001 1.0001 0 0 0 5.953125 36.671875 L 12.126953 44.101562 A 1.0001 1.0001 0 0 0 12.359375 44.382812 L 12.75 44.851562 A 1.0006635 1.0006635 0 0 0 12.917969 45.011719 C 13.50508 45.581386 14.317167 45.917563 15.193359 45.861328 L 42.193359 44.119141 C 43.762433 44.017718 45 42.697027 45 41.125 L 45 15.132812 C 45 14.209354 44.565523 13.390672 43.904297 12.839844 A 1.0008168 1.0008168 0 0 0 43.748047 12.695312 L 43.263672 12.337891 A 1.0001 1.0001 0 0 0 43.0625 12.189453 L 34.824219 6.1132812 C 33.865071 5.4054876 32.682705 5.0641541 31.494141 5.1503906 z M 31.638672 7.1445312 C 32.352108 7.0927682 33.061867 7.29845 33.636719 7.7226562 L 39.767578 12.246094 L 14.742188 13.884766 C 13.880567 13.941006 13.037689 13.622196 12.425781 13.011719 L 12.423828 13.011719 L 8.2539062 8.8398438 L 31.638672 7.1445312 z M 7 10.414062 L 11.011719 14.425781 L 12 15.414062 L 12 40.818359 L 7.5390625 35.449219 C 7.1899317 34.947488 7 34.351269 7 33.738281 L 7 10.414062 z M 41.935547 14.134766 C 42.526748 14.096822 43 14.54116 43 15.132812 L 43 41.125 C 43 41.660973 42.59938 42.08847 42.064453 42.123047 L 15.064453 43.865234 C 14.770856 43.884078 14.506356 43.783483 14.314453 43.605469 A 1.0006635 1.0006635 0 0 0 14.3125 43.603516 C 14.3125 43.603516 14.310547 43.601562 14.310547 43.601562 C 14.306465 43.597733 14.304796 43.59179 14.300781 43.587891 A 1.0006635 1.0006635 0 0 0 14.289062 43.572266 C 14.112238 43.393435 14 43.149431 14 42.867188 L 14 16.875 C 14 16.337536 14.39999 15.911571 14.935547 15.876953 L 41.935547 14.134766 z M 38.496094 19 L 33.421875 19.28125 C 32.647875 19.36125 31.746094 19.938 31.746094 20.875 L 33.996094 21.0625 L 33.996094 31.753906 L 26.214844 19.751953 L 20.382812 20.080078 C 19.291812 20.160078 18.994141 20.970953 18.994141 22.001953 L 21.244141 22.001953 L 21.244141 37.566406 C 21.244141 37.566406 20.191844 37.850406 19.839844 37.941406 C 19.091844 38.134406 18.994141 38.784906 18.994141 39.253906 C 18.994141 39.253906 22.746656 39.065547 24.472656 38.935547 C 26.431656 38.785547 26.496094 37.472656 26.496094 37.472656 L 24.246094 37.003906 L 24.246094 25.470703 C 24.246094 25.470703 29.965844 34.660328 31.714844 37.361328 C 32.537844 38.630328 33.152375 38.878906 34.234375 38.878906 C 35.122375 38.878906 35.962141 38.616594 36.994141 38.058594 L 36.994141 20.697266 C 36.994141 20.697266 37.184203 20.687141 37.783203 20.494141 C 38.466203 20.273141 38.496094 19.656 38.496094 19 z"></path>
                      </svg>
                      <p>프로젝트 정리 및 일정 관리</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {/* RideOn 관련 버튼 */}
        {selectedTitle === "GymMate" && (
          <div className="fixed right-24 md:right-12 top-12 md:top-16 z-[999] flex flex-row items-center gap-6 md:flex-col md:gap-8">
            {/* GitHub  */}
            <div className="relative w-12 h-12 -mt-4 md:mt-0  items-center justify-center">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(
                    "https://github.com/Sugwan-p/WEB3_4_HelloWorld_FE",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="-mt-1 w-12 h-12 rounded-full bg-gray-300 md:bg-white flex items-center justify-center shadow hover:scale-110 transition-transform cursor-pointer"
              >
                <Image
                  src="/icons/Github.svg"
                  alt="GitHub"
                  width={28}
                  height={28}
                />
              </button>
              <p className="mt-2 text-xs text-black md:text-white font-medium">
                Github
              </p>
            </div>

            {/* 티스토리 버튼 + 리스트 */}
            <div
              className="relative group flex flex-col items-center"
              onMouseEnter={() => setShowBlogList(true)}
              onMouseLeave={() => setShowBlogList(false)}
            >
              <button
                type="button"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow hover:scale-110 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                  <title>티스토리 로고</title>
                  <path
                    d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
                    fill="#FF5722"
                  />
                </svg>
              </button>
              <p className="mt-2 text-xs text-black md:text-white font-medium">
                Tistory
              </p>

              {/* 블로그 리스트 */}
              <div
                className={`absolute right-[64px] top-0 transition-all duration-300 w-[260px] bg-white rounded shadow-lg p-4 z-10 ${
                  showBlogList
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4 pointer-events-none"
                }`}
              >
                <p className="text-sm font-semibold mb-2 text-black">
                  관련 블로그 바로가기
                </p>
                <ul className="space-y-2 text-sm text-mono_700 py-2">
                  <li>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(
                          "https://suhat.tistory.com/7",
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                      className="w-full flex items-center gap-2 hover:underline px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459"
                        width={24}
                        height={24}
                      >
                        <title>티스토리 로고</title>
                        <path
                          d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
                          fill="#FF5722"
                        />
                      </svg>
                      <p>프로젝트 회고록</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ProjectsSection;
