"use client";

import { useEffect, useState, useRef } from "react";
import { Header } from "@/components/header";
import { SocialLinks } from "@/components/social-links";
import { EmailLink } from "@/components/email-link";
import DemoModal from "@/components/DemoModal";
import VideoModal from "@/components/VideoModal";
import HeroSection from "@/components/templates/HeroSection";
import AboutSection from "@/components/templates/AboutSection";
import SkillsSection from "@/components/templates/SkillsSection";
import ProjectsSection from "@/components/templates/ProjectsSection";
import ContactSection from "@/components/templates/ContactSection";
import { mainProjects, subProjects } from "@/contents/projectData";
import { Project } from "@/types/project";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [openDemoModal, setOpenDemoModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const aboutRef = useRef<HTMLElement>(null);

  const handleDemoClick = (project: Project) => {
    setSelectedProject(project);
    setOpenDemoModal(true);
  };

  const handleVideoClick = (videoUrl: string, index: number) => {
    setSelectedVideo(videoUrl);
    setSelectedIndex(index);
    setOpenVideoModal(true);
  };

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!aboutRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current?.scrollIntoView({ behavior: "smooth" });
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
        <HeroSection />
        <AboutSection aboutRef={aboutRef} />
        <SkillsSection />
        <ProjectsSection
          mainProjects={mainProjects}
          subProjects={subProjects}
          onDemoClick={handleDemoClick}
          onVideoClick={handleVideoClick}
        />
        <ContactSection />
      </main>

      {openDemoModal && (
        <DemoModal
          open={openDemoModal}
          onClose={() => setOpenDemoModal(false)}
          project={selectedProject}
        />
      )}

      {openVideoModal && selectedVideo && (
        <VideoModal
          open={openVideoModal}
          onClose={() => setOpenVideoModal(false)}
          videoSrc={selectedVideo}
          onNext={() => {
            if (selectedIndex === null) return;
            const nextIndex = (selectedIndex + 1) % mainProjects.length;
            const nextVideo = mainProjects[nextIndex].video;
            if (nextVideo) {
              setSelectedVideo(nextVideo);
              setSelectedIndex(nextIndex);
            }
          }}
          onPrev={() => {
            if (selectedIndex === null) return;
            const prevIndex =
              (selectedIndex - 1 + mainProjects.length) % mainProjects.length;
            const prevVideo = mainProjects[prevIndex].video;
            if (prevVideo) {
              setSelectedVideo(prevVideo);
              setSelectedIndex(prevIndex);
            }
          }}
        />
      )}
    </>
  );
}
