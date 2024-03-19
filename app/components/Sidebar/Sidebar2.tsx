import SidebarSection from './SidebarSection';

const skills = [
  'Proactivo',
  'Team player',
  'Waterfall',
  'Agile',
  'Líder',
  'Compañero',
  'Analítico',
];

interface SidebarProps {
  page: number;
}

function Sidebar2({ page }: SidebarProps) {
  return (
    <div className='grid-cols-1 bg-slate-800 p-6 pt-8'>
      <div className='space-y-5'>
        <SidebarSection title='Idiomas'>
          <ul className='font-semibold'>
            <li>
              Español - <span className='italic font-normal'>Nativo</span>
            </li>
            <li>
              Inglés - <span className='italic font-normal'>Avanzado</span>
            </li>
          </ul>
        </SidebarSection>

        <SidebarSection title='Skills'>
          <div className='grid grid-cols-2 place-items-start'>
            {skills.map((el) => (
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
