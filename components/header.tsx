'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

type NavItem = {
  number: string;
  title: string;
  href: string;
};

export function Header() {
  const navItems: NavItem[] = useMemo(
    () => [
      { number: '01', title: 'About', href: '#about' },
      { number: '02', title: 'Skills', href: '#skills' },
      { number: '03', title: 'Projects', href: '#projects' },
      { number: '04', title: 'Contact', href: '#contact' },
    ],
    []
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // 메뉴 열려 있을 때 스크롤 잠금 (모바일에서 안정감)
  useEffect(() => {
    if (!isMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isMenuOpen]);

  // ESC로 닫기
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      closeMenu();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, closeMenu]);

  return (
    <header
      className={[
        'fixed left-0 right-0 top-0 z-50',
        'px-4 py-4 md:py-6',
        // ✅ 모바일에서도 “헤더가 떠 보이지 않게” 배경 처리
        'bg-[#0a1629]/70 backdrop-blur-md',
        'border-b border-white/10',
      ].join(' ')}
    >
      <nav className='mx-auto flex w-full max-w-7xl items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='text-[#40F8D2]'>
          <div className='flex h-10 w-10 items-center justify-center border-2 border-[#40F8D2]'>
            <span className='text-xl font-bold'>SG</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className='hidden items-center space-x-8 md:flex'>
          {navItems.map((item) => (
            <li key={item.number}>
              <Link
                href={item.href}
                className='text-[#8892b0] transition-colors hover:text-[#40F8D2]'
              >
                <span className='text-[#40F8D2]'>{item.number}.</span>{' '}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type='button'
          onClick={toggleMenu}
          className={[
            'md:hidden',
            'inline-flex items-center justify-center',
            'h-10 w-10 rounded-md',
            'border border-white/10 bg-white/5',
            'text-[#40F8D2]',
          ].join(' ')}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {/* 햄버거/닫기 아이콘 (SVG 없이 Tailwind로만) */}
          <span className='relative block h-5 w-6'>
            <span
              className={[
                'absolute left-0 top-0 block h-[2px] w-full bg-current transition-transform',
                isMenuOpen ? 'translate-y-[9px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 top-[9px] block h-[2px] w-full bg-current transition-opacity',
                isMenuOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 bottom-0 block h-[2px] w-full bg-current transition-transform',
                isMenuOpen ? '-translate-y-[9px] -rotate-45' : '',
              ].join(' ')}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div className='md:hidden'>
          {/* overlay */}
          <button
            type='button'
            onClick={closeMenu}
            aria-label='Close menu overlay'
            className='fixed inset-0 z-40 bg-black/40'
          />

          {/* panel */}
          <div
            className={[
              'fixed left-0 right-0 top-[64px] z-50', // 헤더 높이 아래로
              'mx-auto w-full max-w-7xl px-4',
            ].join(' ')}
          >
            <div className='overflow-hidden rounded-xl border border-white/10 bg-[#0a1629]/95 backdrop-blur-md'>
              <ul className='flex flex-col py-2'>
                {navItems.map((item) => (
                  <li key={item.number}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={[
                        'flex items-center gap-2 px-4 py-3',
                        'text-[#8892b0] hover:text-[#40F8D2]',
                        'transition-colors',
                      ].join(' ')}
                    >
                      <span className='text-[#40F8D2]'>{item.number}.</span>
                      <span className='font-medium'>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
