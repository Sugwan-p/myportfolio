import type React from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: '박수관 - 프론트엔드 개발자',
  description: '프론트엔드 개발자 박수관의 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
