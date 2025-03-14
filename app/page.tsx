'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SocialLinks } from '@/components/social-links';
import { EmailLink } from '@/components/email-link';
import { SectionTitle } from '@/components/section-title';
import { Header } from '@/components/header';
import profile from './profile.jpg';
import DemoModal from '@/components/DemoModal';

// 프로젝트 타입 정의
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  notionLink?: string;
  contribution?: number;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // About 섹션에 사용할 ref
  const aboutRef = useRef<HTMLElement>(null);

  const handleDemoClick = (project: Project) => {
    setSelectedProject(project);
    setOpenDemoModal(true);
  };

  const mainProjects: Project[] = [
    {
      title: 'First Project',
      description:
        'React를 활용하여 직관적인 UI/UX를 제공하고, 일정 관리, 추천 장소 탐색, 여행 팁 공유를 위한 커뮤니티 기능을 담았습니다. 제주에서의 한 달을 보다 쉽고 편안하게 계획하도록 도와줍니다.',
      image: '/projectImages/200OK.png',
      tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'OPEN API', 'Redux'],
      demoLink: '#',
      githubLink: 'https://github.com/Sugwan-p/jejumonth-frontend/tree/main',
      notionLink:
        'https://efficient-knot-8e2.notion.site/1b3931125dd680759976daa060aa3fde?v=1b3931125dd6816d88c2000cba4c7216',
      contribution: 20,
    },
    {
      title: 'Second Project',
      description:
        '사용자가 원하는 순간 다크 모드와 라이트 모드를 자유롭게 전환할 수 있으며, 테마 변화만으로도 완전히 새로운 사이트에 접속한 듯한 경험을 제공합니다. 자전거를 타며 취미 생활을 즐기는 라이더들을 위해 편의시설과 도로 정보를 쉽게 확인할 수 있으며, 다양한 자전거 관련 상품도 편리하게 구매할 수 있도록 지원합니다.',
      image: '/projectImages/RiedOn.png',
      tags: [
        'Vue.js',
        'JavaScript',
        'Tailwind CSS',
        'OPEN API',
        'Pinia',
        'Vuetify',
      ],
      demoLink: '#',
      githubLink: 'https://github.com/Sugwan-p/RideOn/tree/main',
      notionLink:
        'https://efficient-knot-8e2.notion.site/1b4931125dd680648bedc53c886608f0?v=1b4931125dd6816e9557000c8e7890fe',
      contribution: 25,
    },
  ];

  const subProjects = [
    {
      title: 'MySite',
      description: '개인 포토폴리오 사이트',
      tags: ['next.js', 'tailwindCSS', 'typescript'],
      link: 'https://github.com/Sugwan-p/myportfolio',
    },
    {
      title: '추가 예정입니다',
      description: '추가 예정입니다',
      tags: ['next.js', 'tailwindCSS', 'typescript'],
      link: '#',
    },
    {
      title: '추가 예정입니다',
      description: '추가 예정입니다',
      tags: ['next.js', 'tailwindCSS', 'typescript'],
      link: '#',
    },
  ];

  const skillData = {
    frontend: [
      {
        icon: '/images/html.png',
        name: 'HTML5',
        description: '기본적인 HTML 태그를 사용할 수 있습니다.',
      },
      {
        icon: '/images/css.png',
        name: 'CSS',
        description: '순수 CSS를 이용하여 레이아웃을 구성할 수 있습니다.',
      },
      {
        icon: '/images/jslogo.png',
        name: 'JavaScript',
        description: 'ES6+ 문법을 활용하여 코드를 작성할 수 있습니다.',
      },
      {
        icon: '/images/tsts.png',
        name: 'TypeScript',
        description:
          '타입을 활용하여 명확한 코드를 작성할 수 있으며,\n제네릭, 인터섹, 유니온 타입 등을 사용할 수 있습니다.',
      },
      {
        icon: '/images/react.png',
        name: 'React',
        description: 'React를 활용하여 컴포넌트를 작성할 수 있습니다.',
      },
      {
        icon: '/images/next2.png',
        name: 'Next.js',
        description:
          'Next.js를 활용하여 서버 사이드 렌더링을 구현할 수 있습니다.',
      },
      {
        icon: '/images/tailwindcss.png',
        name: 'Tailwind CSS',
        description: 'Tailwind CSS를 활용하여 스타일을 작성할 수 있습니다.',
      },
      {
        icon: '/images/vue.png',
        name: 'Vue.js',
        description: 'Vue.js를 활용하여 컴포넌트를 작성할 수 있습니다.',
      },
    ],
    backend: [
      {
        icon: '/images/node.png',
        name: 'node.js',
        description:
          '부트캠프에서 배운 언어로, 백엔드 서버를 구축 해본 경험이 있습니다.',
      },
    ],
    database: [
      {
        icon: '/images/firebase.png',
        name: 'firebase',
        description: 'firebase를 활용한 데이터베이스 관리를 경혐했습니다.',
      },
      {
        icon: '/images/supabase.jpg',
        name: 'supabase',
        description: 'supabase를 활용한 데이터베이스 관리를 경험했습니다.',
      },
    ],
    tools: [
      {
        icon: '/images/git.png',
        name: 'Git',
        description: '버전 관리를 위한 Git을 능숙하게 사용할 수 있습니다.',
      },
      {
        icon: '/images/github.png',
        name: 'GitHub',
        description: '협업과 코드 리뷰 프로세스를 관리할 수 있습니다.',
      },
      {
        icon: '/images/slack.png',
        name: 'Slack',
        description: '협업과 커뮤니케이션을 위한 Slack을 활용할 수 있습니다.',
      },
      {
        icon: '/images/notion.png',
        name: 'Notion',
        description: '프로젝트 관리와 협업을 위한 Notion을 활용할 수 있습니다.',
      },
    ],
    etc: [
      {
        icon: '/images/figma.png',
        name: 'Figma',
        description:
          '디자인 협업 툴로,\n와이어프레임 및 프로토타입을 제작할 수 있습니다.',
      },
      {
        icon: '/images/ai.png',
        name: 'Adobe Illustrator',
        description:
          'Adobe Illustrator를 활용하여 로고디자인을 제작할 수 있습니다.',
      },
      {
        icon: '/images/ps.png',
        name: 'Photoshop',
        description:
          'Photoshop를 활용하여 이미지 편집 및 조정을 할 수 있습니다.',
      },
    ],
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Intersection Observer를 사용해 About 섹션이 50% 이상 보이면 자동 스크롤
  useEffect(() => {
    if (!aboutRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a1629] text-[#8892b0]">
        <SocialLinks />
        <EmailLink />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative px-4">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#40F8D2] text-lg mb-4"
            >
              안녕하세요. 저는 프론트 엔드 개발자
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              박수관입니다.
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-5xl text-[#8892b0] mb-8"
            >
              저는 끊임없는 도전을 즐기며,
              <br />웹 개발의 매력에 빠져 있습니다.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg max-w-2xl"
            >
              사용자에게 먼저 다가갈 수 있는 웹사이트의 프론트엔드 부분을
              담당하고 있습니다. 제 웹 포트폴리오를 방문해 주셔서 진심으로
              감사드립니다.
            </motion.p>
          </div>
        </section>

        {/* About Section (자동 스크롤 적용) */}
        <section id="about" ref={aboutRef} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle number="01" title="About Me" />
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#40F8D2] mb-4">
                      [첫인상을 주는 프론트엔드]
                    </h3>
                    <p className="text-sm leading-relaxed">
                      학생 시절 React, Next.js, Vue.js 를 활용한 웹 개발 경험이
                      있으며, 사용자에게 먼저 보여지는 프론트엔드에 흥미를
                      느꼈고 React, Next.js Vue.js 를 활용한 프론트엔드 개발을
                      주로 진행하고 있습니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#40F8D2] mb-4">
                      [성장에 대한 즐거움]
                    </h3>
                    <p className="text-sm leading-relaxed">
                      새로운 프로젝트를 시작할 때마다, 단순히 이전에 사용했던
                      기술을 활용하는 것이 아닌, 이전 프로젝트에서 아쉬웠던
                      부분을 개선하고 새로운 코드 스타일이나 기술을 적용하는
                      것에 큰 즐거움을 느낍니다. 이는 개발에 있어서의 성장을
                      위한 동력이 되어주고 있습니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#40F8D2] mb-4">[꺾이지 않는 마음]</h3>
                    <p className="text-sm leading-relaxed">
                      프론트엔드 개발은 대부분 팀원들과 함께 협업하며
                      진행했습니다. 이 과정에서 다양한 문제를 함께 해결해
                      나가며, 때론 기능 구현에 며칠이 걸리기도 했습니다. 하지만
                      이런 과정을 통해 개발에 있어서 &quot;해결할 수 없는 문제는
                      없다&quot;는 확신을 가지게 되었습니다. 이로써, 끝까지
                      해결해 나갈 수 있는 자신감을 얻게 되었습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-64 h-64 mx-auto">
                  <Image
                    src={profile}
                    alt="Profile"
                    fill
                    className="rounded-lg object-cover z-10 relative"
                  />
                  <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-[#40F8D2] rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 px-4 bg-[#0d1b31]">
          <div className="max-w-5xl mx-auto">
            <Tabs
              defaultValue="frontend"
              className="flex w-full items-start [&_*]:!bg-transparent"
            >
              {/* 왼쪽 탭 목록 영역 */}
              <div className="w-1/4 border-r border-[#8892b0] pr-6">
                <TabsList className="flex flex-col gap-5 items-start w-full p-0 border-none mt-[100px]">
                  <TabsTrigger
                    value="frontend"
                    className="
                      w-full text-left px-2 py-1 
                      text-base font-bold 
                      border-none 
                      hover:border-b-2
                      hover:border-[#40F8D2]
                      hover:text-[#40F8D2] 
                      data-[state=active]:border-b-2 
                      data-[state=active]:border-white
                      data-[state=active]:text-white
                      transition-all
                    "
                  >
                    FrontEnd
                  </TabsTrigger>

                  <TabsTrigger
                    value="backend"
                    className="
                      w-full text-left px-2 py-1 
                      text-base font-bold
                      border-none 
                      hover:border-b-2
                      hover:border-[#40F8D2]
                      hover:text-[#40F8D2] 
                      data-[state=active]:border-b-2 
                      data-[state=active]:border-white
                      data-[state=active]:text-white
                      transition-all
                    "
                  >
                    BackEnd
                  </TabsTrigger>

                  <TabsTrigger
                    value="database"
                    className="
                      w-full text-left px-2 py-1 
                      text-base font-bold
                      border-none 
                      hover:border-b-2
                      hover:border-[#40F8D2]
                      hover:text-[#40F8D2] 
                      data-[state=active]:border-b-2 
                      data-[state=active]:border-white
                      data-[state=active]:text-white
                      transition-all
                    "
                  >
                    Database
                  </TabsTrigger>

                  <TabsTrigger
                    value="tools"
                    className="
                      w-full text-left px-2 py-1 
                      text-base font-bold
                      border-none 
                      hover:border-b-2
                      hover:border-[#40F8D2]
                      hover:text-[#40F8D2] 
                      data-[state=active]:border-b-2 
                      data-[state=active]:border-white
                      data-[state=active]:text-white
                      transition-all
                    "
                  >
                    Tools
                  </TabsTrigger>

                  <TabsTrigger
                    value="etc"
                    className="
                      w-full text-left px-2 py-1 
                      text-base font-bold
                      border-none 
                      hover:border-b-2
                      hover:border-[#40F8D2]
                      hover:text-[#40F8D2] 
                      data-[state=active]:border-b-2 
                      data-[state=active]:border-white
                      data-[state=active]:text-white
                      transition-all
                    "
                  >
                    ETC
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* 오른쪽 탭 콘텐츠 영역 */}
              <div className="flex-1 pl-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#40F8D2] mb-6">
                  Skill Stack @ Language
                </h2>

                {/* FrontEnd 탭 내용 */}
                <TabsContent
                  value="frontend"
                  className="bg-transparent min-h-[500px]"
                >
                  <div className="grid grid-cols-1 gap-4">
                    {skillData?.frontend?.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-4 p-2"
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                        <div>
                          <h3 className="text-md font-bold text-[#40F8D2] mb-1">
                            {skill.name}
                          </h3>
                          <p className="text-sm whitespace-pre-line text-[#8892b0] leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    )) || null}
                  </div>
                </TabsContent>

                {/* BackEnd 탭 내용 */}
                <TabsContent
                  value="backend"
                  className="bg-transparent min-h-[500px]"
                >
                  <div className="grid grid-cols-1 gap-4">
                    {skillData?.backend?.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-4 p-2"
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                        <div>
                          <h3 className="text-md font-bold text-[#40F8D2] mb-1">
                            {skill.name}
                          </h3>
                          <p className="text-sm whitespace-pre-line text-[#8892b0] leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    )) || null}
                  </div>
                </TabsContent>

                {/* Database 탭 내용 */}
                <TabsContent
                  value="database"
                  className="bg-transparent min-h-[500px]"
                >
                  <div className="grid grid-cols-1 gap-4">
                    {skillData?.database?.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-4 p-2"
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                        <div>
                          <h3 className="text-md font-bold text-[#40F8D2] mb-1">
                            {skill.name}
                          </h3>
                          <p className="text-sm whitespace-pre-line text-[#8892b0] leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    )) || null}
                  </div>
                </TabsContent>

                {/* Tools 탭 내용 */}
                <TabsContent
                  value="tools"
                  className="bg-transparent min-h-[500px]"
                >
                  <div className="grid grid-cols-1 gap-4">
                    {skillData?.tools?.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-4 p-2"
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                        <div>
                          <h3 className="text-md font-bold text-[#40F8D2] mb-1">
                            {skill.name}
                          </h3>
                          <p className="text-sm whitespace-pre-line text-[#8892b0] leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    )) || null}
                  </div>
                </TabsContent>

                {/* ETC 탭 내용 */}
                <TabsContent
                  value="etc"
                  className="bg-transparent min-h-[500px]"
                >
                  <div className="grid grid-cols-1 gap-4">
                    {skillData?.etc?.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-4 p-2"
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                        <div>
                          <h3 className="text-md font-bold text-[#40F8D2] mb-1">
                            {skill.name}
                          </h3>
                          <p className="text-sm whitespace-pre-line text-[#8892b0] leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    )) || null}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Main Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-12">Main Projects</h2>
            <div className="space-y-20">
              {mainProjects.map((project, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">{project.title}</h3>
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
                        onClick={() => handleDemoClick(project)}
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sub Projects Section */}
        <section id="sub-projects" className="py-20 px-4 bg-[#0d1b31]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-12">Sub Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {subProjects.map((project, index) => (
                <div key={index} className="bg-[#1a2744] p-6 rounded-lg">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Contact</h2>
            <p className="mb-8">새로운 기회를 기다리고 있습니다.</p>
            <a
              href="mailto:qkrsuzxc123@gmail.com"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[#40F8D2] text-[#0a1629] hover:bg-[#40F8D2]/90 transition-colors"
            >
              Send Mail
            </a>
          </div>
        </section>
      </main>
      {openDemoModal && (
        <DemoModal
          open={openDemoModal}
          onClose={() => setOpenDemoModal(false)}
          project={selectedProject}
        />
      )}
    </>
  );
}
