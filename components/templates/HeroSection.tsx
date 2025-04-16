"use client";

import { motion } from "framer-motion";

const HeroSection = () => (
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
        사용자에게 먼저 다가갈 수 있는 웹사이트의 프론트엔드 부분을 담당하고
        있습니다. 제 웹 포트폴리오를 방문해 주셔서 진심으로 감사드립니다.
      </motion.p>
    </div>
  </section>
);

export default HeroSection;
