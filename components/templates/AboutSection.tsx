"use client";

import { RefObject } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  aboutRef: RefObject<HTMLElement | null>;
}

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = ({ aboutRef }: Props) => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refImg, inViewImg] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" ref={aboutRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle number="01" title="About Me" />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <motion.div
              ref={ref1}
              variants={fadeInVariant}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.0, ease: "easeOut" }}
            >
              <h3 className="text-[#40F8D2] mb-4">
                [첫인상을 주는 프론트엔드]
              </h3>
              <p className="text-sm leading-relaxed">
                학생 시절 React, Next.js, Vue.js 를 활용한 웹 개발 경험이
                있으며, 사용자에게 먼저 보여지는 프론트엔드에 흥미를 느꼈고
                React, Next.js, Vue.js 를 활용한 프론트엔드 개발을 주로 진행하고
                있습니다.
              </p>
            </motion.div>

            <motion.div
              ref={ref2}
              variants={fadeInVariant}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-[#40F8D2] mb-4">[성장에 대한 즐거움]</h3>
              <p className="text-sm leading-relaxed">
                새로운 프로젝트를 시작할 때마다, 단순히 이전에 사용했던 기술을
                활용하는 것이 아닌, 이전 프로젝트에서 아쉬웠던 부분을 개선하고
                새로운 코드 스타일이나 기술을 적용하는 것에 큰 즐거움을
                느낍니다.
              </p>
            </motion.div>

            <motion.div
              ref={ref3}
              variants={fadeInVariant}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-[#40F8D2] mb-4">[꺾이지 않는 마음]</h3>
              <p className="text-sm leading-relaxed">
                프론트엔드 개발은 대부분 팀원들과 함께 협업하며 진행했습니다. 이
                과정에서 다양한 문제를 함께 해결해 나가며, 때론 기능 구현에
                며칠이 걸리기도 했습니다. 하지만 이런 과정을 통해 &quot;해결할
                수 없는 문제는 없다&quot;는 확신을 가지게 되었습니다.
              </p>
            </motion.div>
          </div>

          <motion.div
            ref={refImg}
            variants={fadeInVariant}
            initial="hidden"
            animate={inViewImg ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="relative w-64 h-64 mx-auto"
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              className="rounded-lg object-cover z-10 relative"
            />
            <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-[#40F8D2] rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
