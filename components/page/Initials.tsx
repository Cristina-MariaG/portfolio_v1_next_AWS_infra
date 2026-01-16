'use client';

export default function Initials({ modalOn }: { modalOn: boolean }) {
  const scrollToSection = (id: string) => {
    if (!modalOn) {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ color: modalOn ? 'white' : 'inherit' }}>
      <p
        className='relative group p-8 min-w-[200px] min-h-[60px] text-xl font-semibold cursor-pointer overflow-hidden'
        onClick={() => scrollToSection('aboutMe')}
      >
        <span className='absolute top-8 left-8 transition-all duration-500 -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-2xl tracking-wide'>
          Cristina Ghinda
        </span>

        <span className='block transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0'>C–G</span>
      </p>
    </div>
  );
}
