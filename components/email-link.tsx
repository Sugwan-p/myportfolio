'use client';

import { motion } from 'framer-motion';

export function EmailLink() {
  return (
    <motion.div
      className="fixed right-10 bottom-0 hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="flex flex-col items-center gap-6">
        <a
          href="mailto:qkrsuzxc123@gmail.com"
          className="vertical-text text-[#8892b0] hover:text-[#40F8D2] transition-colors tracking-widest text-sm"
          style={{ writingMode: 'vertical-rl' }}
        >
          qkrsuzxc123@gmail.com
        </a>
        <div className="w-[1px] h-32 bg-[#8892b0]" />
      </div>
    </motion.div>
  );
}
