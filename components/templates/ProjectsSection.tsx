"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { Project } from "@/types/project";
import Modal from "@/components/Modal";
import JejuMonthContent from "@/contents/JejuMonth";
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
      // case 'GymMate': return <GymMateContent />
      // case 'RideOn': return <RideOnContent />
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
      </Modal>

      {isModalOpen && selectedTitle === "Jeju-Month" && (
        <div className="fixed right-6 top-20 z-[999] flex flex-col items-center gap-4 pointer-events-auto">
          {/* GitHub 버튼 */}
          <div className="relative w-12 h-12">
            <a
              onClick={(e) => e.stopPropagation()}
              href="https://github.com/Sugwan-p/jejumonth-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow hover:scale-110 transition-transform"
            >
              <Image
                src="/icons/Github.svg"
                alt="GitHub"
                width={28}
                height={28}
              />
            </a>
          </div>

          <p className="-mt-3 text-xs text-gray-200">Github</p>

          {/* 티스토리 버튼 + 리스트 */}
          <div
            className="relative group"
            onMouseEnter={() => setShowBlogList(true)}
            onMouseLeave={() => setShowBlogList(false)}
          >
            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <title>티스토리 로고</title>
                <path
                  d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
                  fill="#FF5722"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <p className="mt-1  text-xs text-gray-200">Tistory</p>
            </div>

            {/* 블로그 리스트 */}
            <div
              className={`absolute right-[64px] top-0 transition-all duration-300 w-[260px] bg-white rounded shadow-lg p-4 z-10 ${
                showBlogList
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4 "
              }`}
            >
              <p className="text-sm font-semibold mb-2">관련 블로그 바로가기</p>
              <ul className="space-y-2 text-sm text-mono_700 py-2">
                <li>
                  <a
                    href="https://suhat.tistory.com/2"
                    target="_blank"
                    className="flex items-center gap-2 hover:underline px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
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
                  </a>
                </li>
                <li>
                  <a
                    href="https://suhat.tistory.com/1"
                    target="_blank"
                    className="flex items-center gap-2 hover:underline px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
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
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
