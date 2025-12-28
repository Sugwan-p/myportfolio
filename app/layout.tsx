import type React from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import IntroScreen from '@/components/templates/IntroScreen';
import CustomCursor from '@/components/CustomCursor';

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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='ko' className='scroll-smooth'>
      <body className={notoSansKr.className}>
        <CustomCursor />
        <IntroScreen />
        {children}

        <Script
          id='ms-clarity'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "toj0mpp2at");`,
          }}
        />
      </body>
    </html>
  );
}
