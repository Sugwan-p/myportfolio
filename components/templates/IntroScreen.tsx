"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const IntroScreen = () => {
  const containerRef = useRef(null);
  const title = "Welcome to my portfolio".split("");

  const scrollYProgress = useMotionValue(0);
  const { scrollYProgress: syncedScrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  syncedScrollY.on("change", (v) => scrollYProgress.set(v));

  // 전체 확대 및 페이드아웃
  const globalScale = useTransform(scrollYProgress, [0, 1], [1, 3.2]);
  const globalOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // 각 글자에 대한 scale 값을 개별적으로 선언
  const letterScale0 = useTransform(scrollYProgress, [0, 1], [1, 4.2]);
  const letterScale1 = useTransform(scrollYProgress, [0, 1], [1, 4.12]);
  const letterScale2 = useTransform(scrollYProgress, [0, 1], [1, 4.04]);
  const letterScale3 = useTransform(scrollYProgress, [0, 1], [1, 3.96]);
  const letterScale4 = useTransform(scrollYProgress, [0, 1], [1, 3.88]);
  const letterScale5 = useTransform(scrollYProgress, [0, 1], [1, 3.8]);
  const letterScale6 = useTransform(scrollYProgress, [0, 1], [1, 3.72]);
  const letterScale7 = useTransform(scrollYProgress, [0, 1], [1, 3.64]);
  const letterScale8 = useTransform(scrollYProgress, [0, 1], [1, 3.56]);
  const letterScale9 = useTransform(scrollYProgress, [0, 1], [1, 3.48]);
  const letterScale10 = useTransform(scrollYProgress, [0, 1], [1, 3.4]);
  const letterScale11 = useTransform(scrollYProgress, [0, 1], [1, 3.32]);
  const letterScale12 = useTransform(scrollYProgress, [0, 1], [1, 3.24]);
  const letterScale13 = useTransform(scrollYProgress, [0, 1], [1, 3.16]);
  const letterScale14 = useTransform(scrollYProgress, [0, 1], [1, 3.08]);
  const letterScale15 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const letterScale16 = useTransform(scrollYProgress, [0, 1], [1, 2.92]);
  const letterScale17 = useTransform(scrollYProgress, [0, 1], [1, 2.84]);
  const letterScale18 = useTransform(scrollYProgress, [0, 1], [1, 2.76]);
  const letterScale19 = useTransform(scrollYProgress, [0, 1], [1, 2.68]);
  const letterScale20 = useTransform(scrollYProgress, [0, 1], [1, 2.6]);
  const letterScale21 = useTransform(scrollYProgress, [0, 1], [1, 2.52]);
  const letterScale22 = useTransform(scrollYProgress, [0, 1], [1, 2.44]);
  const letterScale23 = useTransform(scrollYProgress, [0, 1], [1, 2.36]);
  const letterScale24 = useTransform(scrollYProgress, [0, 1], [1, 2.28]);
  const letterScale25 = useTransform(scrollYProgress, [0, 1], [1, 2.2]);
  const letterScale26 = useTransform(scrollYProgress, [0, 1], [1, 2.12]);
  const letterScale27 = useTransform(scrollYProgress, [0, 1], [1, 2.04]);
  const letterScale28 = useTransform(scrollYProgress, [0, 1], [1, 1.96]);
  const letterScale29 = useTransform(scrollYProgress, [0, 1], [1, 1.88]);
  const letterScale30 = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const letterScale31 = useTransform(scrollYProgress, [0, 1], [1, 1.72]);
  const letterScale32 = useTransform(scrollYProgress, [0, 1], [1, 1.64]);
  const letterScale33 = useTransform(scrollYProgress, [0, 1], [1, 1.56]);
  const letterScale34 = useTransform(scrollYProgress, [0, 1], [1, 1.48]);
  const letterScale35 = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const letterScale36 = useTransform(scrollYProgress, [0, 1], [1, 1.32]);
  const letterScale37 = useTransform(scrollYProgress, [0, 1], [1, 1.24]);
  const letterScale38 = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const letterScale39 = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const letterScale40 = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const letterScale41 = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const letterScale42 = useTransform(scrollYProgress, [0, 1], [1, 0.84]);
  const letterScale43 = useTransform(scrollYProgress, [0, 1], [1, 0.76]);
  const letterScale44 = useTransform(scrollYProgress, [0, 1], [1, 0.68]);
  const letterScale45 = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const letterScale46 = useTransform(scrollYProgress, [0, 1], [1, 0.52]);
  const letterScale47 = useTransform(scrollYProgress, [0, 1], [1, 0.44]);
  const letterScale48 = useTransform(scrollYProgress, [0, 1], [1, 0.36]);
  const letterScale49 = useTransform(scrollYProgress, [0, 1], [1, 0.28]);
  const letterScale50 = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const letterScale51 = useTransform(scrollYProgress, [0, 1], [1, 0.12]);
  const letterScale52 = useTransform(scrollYProgress, [0, 1], [1, 0.04]);
  const letterScale53 = useTransform(scrollYProgress, [0, 1], [1, -0.04]);
  const letterScale54 = useTransform(scrollYProgress, [0, 1], [1, -0.12]);
  const letterScale55 = useTransform(scrollYProgress, [0, 1], [1, -0.2]);
  const letterScale56 = useTransform(scrollYProgress, [0, 1], [1, -0.28]);
  const letterScale57 = useTransform(scrollYProgress, [0, 1], [1, -0.36]);
  const letterScale58 = useTransform(scrollYProgress, [0, 1], [1, -0.44]);
  const letterScale59 = useTransform(scrollYProgress, [0, 1], [1, -0.52]);
  const letterScale60 = useTransform(scrollYProgress, [0, 1], [1, -0.6]);
  const letterScale61 = useTransform(scrollYProgress, [0, 1], [1, -0.68]);
  const letterScale62 = useTransform(scrollYProgress, [0, 1], [1, -0.76]);
  const letterScale63 = useTransform(scrollYProgress, [0, 1], [1, -0.84]);
  const letterScale64 = useTransform(scrollYProgress, [0, 1], [1, -0.92]);
  const letterScale65 = useTransform(scrollYProgress, [0, 1], [1, -1]);
  const letterScale66 = useTransform(scrollYProgress, [0, 1], [1, -1.08]);
  const letterScale67 = useTransform(scrollYProgress, [0, 1], [1, -1.16]);
  const letterScale68 = useTransform(scrollYProgress, [0, 1], [1, -1.24]);
  const letterScale69 = useTransform(scrollYProgress, [0, 1], [1, -1.32]);
  const letterScale70 = useTransform(scrollYProgress, [0, 1], [1, -1.4]);
  const letterScale71 = useTransform(scrollYProgress, [0, 1], [1, -1.48]);
  const letterScale72 = useTransform(scrollYProgress, [0, 1], [1, -1.56]);
  const letterScale73 = useTransform(scrollYProgress, [0, 1], [1, -1.64]);
  const letterScale74 = useTransform(scrollYProgress, [0, 1], [1, -1.72]);
  const letterScale75 = useTransform(scrollYProgress, [0, 1], [1, -1.8]);
  const letterScale76 = useTransform(scrollYProgress, [0, 1], [1, -1.88]);
  const letterScale77 = useTransform(scrollYProgress, [0, 1], [1, -1.96]);
  const letterScale78 = useTransform(scrollYProgress, [0, 1], [1, -2.04]);
  const letterScale79 = useTransform(scrollYProgress, [0, 1], [1, -2.12]);
  const letterScale80 = useTransform(scrollYProgress, [0, 1], [1, -2.2]);
  const letterScale81 = useTransform(scrollYProgress, [0, 1], [1, -2.28]);
  const letterScale82 = useTransform(scrollYProgress, [0, 1], [1, -2.36]);
  const letterScale83 = useTransform(scrollYProgress, [0, 1], [1, -2.44]);
  const letterScale84 = useTransform(scrollYProgress, [0, 1], [1, -2.52]);
  const letterScale85 = useTransform(scrollYProgress, [0, 1], [1, -2.6]);
  const letterScale86 = useTransform(scrollYProgress, [0, 1], [1, -2.68]);
  const letterScale87 = useTransform(scrollYProgress, [0, 1], [1, -2.76]);
  const letterScale88 = useTransform(scrollYProgress, [0, 1], [1, -2.84]);
  const letterScale89 = useTransform(scrollYProgress, [0, 1], [1, -2.92]);
  const letterScale90 = useTransform(scrollYProgress, [0, 1], [1, -3]);
  const letterScale91 = useTransform(scrollYProgress, [0, 1], [1, -3.08]);
  const letterScale92 = useTransform(scrollYProgress, [0, 1], [1, -3.16]);
  const letterScale93 = useTransform(scrollYProgress, [0, 1], [1, -3.24]);
  const letterScale94 = useTransform(scrollYProgress, [0, 1], [1, -3.32]);
  const letterScale95 = useTransform(scrollYProgress, [0, 1], [1, -3.4]);
  const letterScale96 = useTransform(scrollYProgress, [0, 1], [1, -3.48]);
  const letterScale97 = useTransform(scrollYProgress, [0, 1], [1, -3.56]);
  const letterScale98 = useTransform(scrollYProgress, [0, 1], [1, -3.64]);
  const letterScale99 = useTransform(scrollYProgress, [0, 1], [1, -3.72]);

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <motion.section
      ref={containerRef}
      style={{ scale: globalScale, opacity: globalOpacity }}
      className="relative h-[100vh] bg-[#0d1b31] overflow-hidden flex items-center justify-center"
    >
      {/* 배경 입자 */}
      <Particles
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: "#0d1b31" },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#40F8D2" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 2 },
            move: { enable: true, speed: 0.6 },
            links: {
              enable: true,
              color: "#40F8D2",
              distance: 100,
              opacity: 0.3,
              width: 1,
            },
          },
        }}
      />

      {/* 인트로 텍스트 */}
      <motion.div className="text-center z-10">
        <div className="flex justify-center flex-wrap gap-[2px] mb-6">
          {title.map((char, i) => {
            let letterScale;
            switch (i) {
              case 0:
                letterScale = letterScale0;
                break;
              case 1:
                letterScale = letterScale1;
                break;
              case 2:
                letterScale = letterScale2;
                break;
              case 3:
                letterScale = letterScale3;
                break;
              case 4:
                letterScale = letterScale4;
                break;
              case 5:
                letterScale = letterScale5;
                break;
              case 6:
                letterScale = letterScale6;
                break;
              case 7:
                letterScale = letterScale7;
                break;
              case 8:
                letterScale = letterScale8;
                break;
              case 9:
                letterScale = letterScale9;
                break;
              case 10:
                letterScale = letterScale10;
                break;
              case 11:
                letterScale = letterScale11;
                break;
              case 12:
                letterScale = letterScale12;
                break;
              case 13:
                letterScale = letterScale13;
                break;
              case 14:
                letterScale = letterScale14;
                break;
              case 15:
                letterScale = letterScale15;
                break;
              case 16:
                letterScale = letterScale16;
                break;
              case 17:
                letterScale = letterScale17;
                break;
              case 18:
                letterScale = letterScale18;
                break;
              case 19:
                letterScale = letterScale19;
                break;
              case 20:
                letterScale = letterScale20;
                break;
              case 21:
                letterScale = letterScale21;
                break;
              case 22:
                letterScale = letterScale22;
                break;
              case 23:
                letterScale = letterScale23;
                break;
              case 24:
                letterScale = letterScale24;
                break;
              case 25:
                letterScale = letterScale25;
                break;
              case 26:
                letterScale = letterScale26;
                break;
              case 27:
                letterScale = letterScale27;
                break;
              case 28:
                letterScale = letterScale28;
                break;
              case 29:
                letterScale = letterScale29;
                break;
              case 30:
                letterScale = letterScale30;
                break;
              case 31:
                letterScale = letterScale31;
                break;
              case 32:
                letterScale = letterScale32;
                break;
              case 33:
                letterScale = letterScale33;
                break;
              case 34:
                letterScale = letterScale34;
                break;
              case 35:
                letterScale = letterScale35;
                break;
              case 36:
                letterScale = letterScale36;
                break;
              case 37:
                letterScale = letterScale37;
                break;
              case 38:
                letterScale = letterScale38;
                break;
              case 39:
                letterScale = letterScale39;
                break;
              case 40:
                letterScale = letterScale40;
                break;
              case 41:
                letterScale = letterScale41;
                break;
              case 42:
                letterScale = letterScale42;
                break;
              case 43:
                letterScale = letterScale43;
                break;
              case 44:
                letterScale = letterScale44;
                break;
              case 45:
                letterScale = letterScale45;
                break;
              case 46:
                letterScale = letterScale46;
                break;
              case 47:
                letterScale = letterScale47;
                break;
              case 48:
                letterScale = letterScale48;
                break;
              case 49:
                letterScale = letterScale49;
                break;
              case 50:
                letterScale = letterScale50;
                break;
              case 51:
                letterScale = letterScale51;
                break;
              case 52:
                letterScale = letterScale52;
                break;
              case 53:
                letterScale = letterScale53;
                break;
              case 54:
                letterScale = letterScale54;
                break;
              case 55:
                letterScale = letterScale55;
                break;
              case 56:
                letterScale = letterScale56;
                break;
              case 57:
                letterScale = letterScale57;
                break;
              case 58:
                letterScale = letterScale58;
                break;
              case 59:
                letterScale = letterScale59;
                break;
              case 60:
                letterScale = letterScale60;
                break;
              case 61:
                letterScale = letterScale61;
                break;
              case 62:
                letterScale = letterScale62;
                break;
              case 63:
                letterScale = letterScale63;
                break;
              case 64:
                letterScale = letterScale64;
                break;
              case 65:
                letterScale = letterScale65;
                break;
              case 66:
                letterScale = letterScale66;
                break;
              case 67:
                letterScale = letterScale67;
                break;
              case 68:
                letterScale = letterScale68;
                break;
              case 69:
                letterScale = letterScale69;
                break;
              case 70:
                letterScale = letterScale70;
                break;
              case 71:
                letterScale = letterScale71;
                break;
              case 72:
                letterScale = letterScale72;
                break;
              case 73:
                letterScale = letterScale73;
                break;
              case 74:
                letterScale = letterScale74;
                break;
              case 75:
                letterScale = letterScale75;
                break;
              case 76:
                letterScale = letterScale76;
                break;
              case 77:
                letterScale = letterScale77;
                break;
              case 78:
                letterScale = letterScale78;
                break;
              case 79:
                letterScale = letterScale79;
                break;
              case 80:
                letterScale = letterScale80;
                break;
              case 81:
                letterScale = letterScale81;
                break;
              case 82:
                letterScale = letterScale82;
                break;
              case 83:
                letterScale = letterScale83;
                break;
              case 84:
                letterScale = letterScale84;
                break;
              case 85:
                letterScale = letterScale85;
                break;
              case 86:
                letterScale = letterScale86;
                break;
              case 87:
                letterScale = letterScale87;
                break;
              case 88:
                letterScale = letterScale88;
                break;
              case 89:
                letterScale = letterScale89;
                break;
              case 90:
                letterScale = letterScale90;
                break;
              case 91:
                letterScale = letterScale91;
                break;
              case 92:
                letterScale = letterScale92;
                break;
              case 93:
                letterScale = letterScale93;
                break;
              case 94:
                letterScale = letterScale94;
                break;
              case 95:
                letterScale = letterScale95;
                break;
              case 96:
                letterScale = letterScale96;
                break;
              case 97:
                letterScale = letterScale97;
                break;
              case 98:
                letterScale = letterScale98;
                break;
              case 99:
                letterScale = letterScale99;
                break;
              default:
                letterScale = letterScale0;
            }

            return (
              <motion.span
                key={`${char}-${i}`}
                style={{ scale: letterScale }}
                className="inline-block text-5xl md:text-7xl font-extrabold text-[#40F8D2] drop-shadow-[0_2px_8px_rgba(64,248,210,0.3)] tracking-wide"
              >
                {char}
              </motion.span>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-white text-xl font-semibold tracking-wide mb-2"
        >
          Park Su-Gwan Portfolio
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-sm md:text-base text-[#A0AEC0] font-light tracking-wider"
        >
          <span className="text-[#40F8D2] font-medium">Frontend Developer</span>{" "}
          • Creative Coder • UX Focused
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default IntroScreen;
