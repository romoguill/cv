import SidebarSection from './SidebarSection';

const skillsEsp = [
  'Proactivo',
  'Team player',
  'Waterfall',
  'Agile',
  'Líder',
  'Analítico',
];

const skillsEng = [
  'Proactive',
  'Team player',
  'Waterfall',
  'Agile',
  'Leader',
  'Analitical',
];

interface SidebarProps {
  page: number;
  lang: 'en' | 'es';
}

function Sidebar2({ page, lang }: SidebarProps) {
  return (
    <div className='grid-cols-1 bg-slate-800 p-6 pt-8'>
      <div className='space-y-5'>
        <SidebarSection title={lang === 'en' ? 'Languages' : 'Idiomas'}>
          <ul className='font-medium space-y-1'>
            <li>
              {lang === 'en' ? 'Spanish' : 'Español'} -{' '}
              <span className='italic font-normal'>
                {lang === 'en' ? 'Native' : 'Nativo'}
              </span>
            </li>
            <li>
              {lang === 'en' ? 'English' : 'Inglés'} -{' '}
              <span className='italic font-normal'>
                {lang === 'en' ? 'Advanced' : 'Avanzado'}
              </span>
            </li>
          </ul>
        </SidebarSection>

        <SidebarSection title='Skills'>
          <div className='grid grid-cols-2 place-items-start'>
            {(lang === 'en' ? skillsEng : skillsEsp).map((el) => (
              <p key={el} className='text-sm p-2'>
                {el}
              </p>
            ))}
          </div>
        </SidebarSection>
      </div>
    </div>
  );
}

export default Sidebar2;
