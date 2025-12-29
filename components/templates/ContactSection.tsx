'use client';

const RESUME_URL =
  'https://efficient-knot-8e2.notion.site/2d7931125dd68053a982dfd5bd13259a?pvs=73';

const ContactSection = () => (
  <section id='contact' className='py-20 px-4'>
    <div className='max-w-4xl mx-auto text-center'>
      <h2 className='text-2xl font-bold mb-8'>Contact</h2>
      <p className='mb-8'>새로운 기회를 기다리고 있습니다.</p>

      <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
        {/* 기존: 메일 버튼 유지 */}
        <a
          href='mailto:qkrsuzxc123@gmail.com'
          className='inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 rounded-lg bg-[#40F8D2] text-[#0a1629] hover:bg-[#40F8D2]/90 transition-colors'
        >
          Send Mail
        </a>

        {/* 추가: 이력서 보기 버튼 */}
        <a
          href={RESUME_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 rounded-lg bg-[#40F8D2] text-[#0a1629] hover:bg-[#40F8D2]/90 transition-colors'
        >
          Resume
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
