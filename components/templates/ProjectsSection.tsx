"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";

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

const ProjectsSection = ({
  mainProjects,
  subProjects,
  onDemoClick,
  onVideoClick,
}: Props) => (
  <>
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-12">Main Projects</h2>
        <div className="space-y-20">
          {mainProjects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8">
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
            </div>
          ))}
        </div>
      </div>
    </section>

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
  </>
);

export default ProjectsSection;
