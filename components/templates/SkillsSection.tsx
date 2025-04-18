"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillData } from "@/contents/skillData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type SkillType = {
  name: string;
  description: string;
  icon: string;
};

const fadeInItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillItem = ({ skill, delay }: { skill: SkillType; delay: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInItem}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay }}
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
        <h3 className="text-md font-bold text-[#40F8D2] mb-1">{skill.name}</h3>
        <p className="text-sm whitespace-pre-line text-[#8892b0] leading-relaxed">
          {skill.description}
        </p>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => (
  <section id="skills" className="py-12 px-4 bg-[#0d1b31]">
    <div className="max-w-5xl mx-auto">
      <Tabs
        defaultValue="frontend"
        className="flex w-full items-start [&_*]:!bg-transparent"
      >
        {/* 왼쪽 탭 목록 */}
        <div className="w-1/4 border-r border-[#8892b0] pr-6">
          <TabsList className="flex flex-col gap-5 items-start w-full p-0 border-none mt-[100px]">
            {["frontend", "database", "tools", "etc"].map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="w-full text-left px-2 py-1 text-base font-bold border-none hover:border-b-2 hover:border-[#40F8D2] hover:text-[#40F8D2] data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:text-white transition-all"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* 오른쪽 콘텐츠 영역 */}
        <div className="flex-1 pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#40F8D2] mb-6">
            Skill Stack @ Language
          </h2>

          {(["frontend", "database", "tools", "etc"] as const).map(
            (category) => (
              <TabsContent
                key={category}
                value={category}
                className="bg-transparent min-h-[500px]"
              >
                <div className="grid grid-cols-1 gap-4">
                  {skillData[category]?.map((skill, index) => (
                    <SkillItem
                      key={skill.name}
                      skill={skill}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </TabsContent>
            )
          )}
        </div>
      </Tabs>
    </div>
  </section>
);

export default SkillsSection;
