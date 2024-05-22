import { Michroma } from 'next/font/google';

const fontHeading = Michroma({
  weight: ['400'],
  subsets: ['latin'],
});

interface HeaderProps {
  page: number;
  lang: 'en' | 'es';
}

function Header({ page, lang }: HeaderProps) {
  return (
    <header>
      <h1
        className={`${fontHeading.className} ${
          page === 1 ? 'text-4xl' : 'text-2xl'
        }`}
      >
        Rodrigo Moguillanksy
      </h1>
      <h2
        className={`font-semibold italic ${
          page === 1 ? 'text-2xl mt-3 mb-4' : 'text-xl'
        }`}
      >
        Full-Stack Developer
      </h2>
      <div className='space-y-1 text-[14px]'>
        <p>
          Industrial Engineer with over 8 years of experience in Supply Chain,
          leading projects across various domains including IT, Engineering, and
          Business Processes.
        </p>
        <p>
          My continuous pursuit of processes automation and the design of
          technological tools for logistics has steered my career towards
          software development.
        </p>
      </div>
    </header>
  );
}
export default Header;
