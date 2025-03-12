'use client';
import React from 'react';
import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import close from '../public/icons/close.svg';

interface Project {
  title: string;
  description: string;
  image?: string;
  notionLink?: string;
  githubLink?: string;
  contribution?: number;
}

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}

const DemoModal: FC<DemoModalProps> = ({ open, onClose, project }) => {
  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* 모달 카드 컨테이너 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-[360px] md:w-[400px] 
                   bg-[#1a2744] text-[#8892b0] 
                   rounded-xl p-5 shadow-lg"
      >
        {/* 상단: 프로젝트 제목 & 닫기 버튼 */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#40F8D2]">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-[#8892b0] hover:text-white transition-colors"
          >
            <Image
              src={close}
              alt="Close"
              width={15}
              height={15}
              className="filter brightness-0 invert"
            />
          </button>
        </div>

        {/* 이미지/기여도 영역 */}
        <div className="relative w-full h-40 bg-[#0d1b31] rounded-lg flex items-center justify-center overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="text-[#40F8D2] text-sm">No Image</div>
          )}

          {/* 기여도 배지 */}
          <span
            className="absolute top-2 left-2 
                 bg-[#40F8D2] text-[#0a1629] 
                 text-xs font-semibold 
                 px-2 py-1 rounded-md shadow-sm"
          >
            기여도 {project.contribution || 'N/A'}
          </span>
        </div>

        {/* 설명 문구 */}
        <div className="mt-5 text-center">
          <p className="text-sm text-[#8892b0] mb-2 text-left ">
            포트폴리오의 모든 이야기가 노션에 담겨 있어요!
          </p>
          <p className="text-xs text-[#8892b0] text-left whitespace-pre-wrap break-words">
            더욱 체계적인 포트폴리오와 프로젝트 기록을 노션에서 확인하실 수
            있습니다.
          </p>
        </div>

        {/* 버튼 2개: 노션 보러가기 & GitHub */}
        <div className="mt-6 flex gap-4">
          <a
            href={project.notionLink || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center 
                       bg-[#40F8D2] text-[#0a1629] 
                       text-sm font-medium py-2 rounded-md 
                       hover:bg-[#40F8D2]/90 transition-colors"
          >
            노션 보러가기
          </a>
          <a
            href={project.githubLink || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center 
                       bg-[#40F8D2] text-[#0a1629] 
                       text-sm font-medium py-2 rounded-md 
                       hover:bg-[#40F8D2]/90 transition-colors"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default DemoModal;
