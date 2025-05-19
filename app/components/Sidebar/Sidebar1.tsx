import Image from 'next/image';
// @ts-ignore
import { IconType } from 'react-icons';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';
import profilePic from '../../../public/profile.jpg';
import Education, { EducationProps } from './Education';
import SidebarSection from './SidebarSection';

interface ContactInfo {
  text: string;
  Icon: IconType;
}

const contact: ContactInfo[] = [
  {
    text: 'romoguill@gmail.com',
    Icon: FaEnvelope,
  },
  {
    text: '(+549) 1141730573',
    Icon: FaPhone,
  },
  {
    text: 'www.linkedin.com/in/rodrigo-moguillansky',
    Icon: FaLinkedin,
  },
  {
    text: 'https://github.com/romoguill',
    Icon: FaGithub,
  },
  {
    text: 'Olivos, Buenos Aires, Argentina',
    Icon: FaMapMarkerAlt,
  },
];

const educationEsp: EducationProps[] = [
  {
    title: 'Full-Stack Developer',
    institution: 'Digital House',
    dateStart: new Date(2022, 6, 1),
    dateEnd: new Date(2023, 5, 1),
  },
  {
    title: 'Data Scientist',
    institution: 'Digital House',
    dateStart: new Date(2017, 6, 1),
    dateEnd: new Date(2017, 12, 1),
  },
  {
    title: 'Especialista en Logística',
    institution: 'ITBA',
    dateStart: new Date(2014, 4, 1),
    dateEnd: new Date(2015, 12, 1),
  },
  {
    title: 'Ingeniería Industrial',
    institution: 'ITBA',
    dateStart: new Date(2007, 3, 1),
    dateEnd: new Date(2012, 8, 1),
  },
  {
    title: 'Bachelor Degree',
    institution: "St Brendan's College",
    dateStart: new Date(1993, 3, 1),
    dateEnd: new Date(2006, 12, 1),
  },
];

const educationEng: EducationProps[] = [
  {
    title: 'Full-Stack Developer',
    institution: 'Digital House',
    dateStart: new Date(2022, 6, 1),
    dateEnd: new Date(2023, 5, 1),
  },
  {
    title: 'Data Scientist',
    institution: 'Digital House',
    dateStart: new Date(2017, 6, 1),
    dateEnd: new Date(2017, 12, 1),
  },
  {
    title: 'Master in Logistics',
    institution: 'ITBA',
    dateStart: new Date(2014, 4, 1),
    dateEnd: new Date(2015, 12, 1),
  },
  {
    title: 'MEng Industrial Engineering',
    institution: 'ITBA',
    dateStart: new Date(2007, 3, 1),
    dateEnd: new Date(2012, 8, 1),
  },
  {
    title: 'Bachelor Degree',
    institution: "St Brendan's College",
    dateStart: new Date(1993, 3, 1),
    dateEnd: new Date(2006, 12, 1),
  },
];

const tecnologies = [
  'Javascript',
  'Typescript',
  'React',
  'Next.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'CSS',
];

interface SidebarProps {
  page: number;
  lang: 'en' | 'es';
}

function Sidebar1({ page, lang }: SidebarProps) {
  return (
    <div className='grid-cols-1 bg-slate-800 p-6 pt-8'>
      <div className='rounded-full relative w-32 h-32 overflow-hidden mx-auto mb-10'>
        <Image
          src={profilePic}
          alt='profile pic'
          height={130}
          width={130}
          className='object-cover -mt-2'
        />
      </div>

      <div className='space-y-5'>
        <SidebarSection title={lang === 'en' ? 'Contact' : 'Contacto'}>
          <div className='space-y-3'>
            {contact.map((el) => (
              <p key={el.text} className='flex items-center gap-4'>
                <el.Icon size={20} className='shrink-0' />
                <span className='break-words overflow-hidden text-sm'>
                  {el.text}
                </span>
              </p>
            ))}
          </div>
        </SidebarSection>

        <SidebarSection title={lang === 'en' ? 'Education' : 'Educación'}>
          <div className='space-y-3'>
            {(lang === 'en' ? educationEng : educationEsp).map((el) => (
              <Education key={el.title} {...el} />
            ))}
          </div>
        </SidebarSection>

        <SidebarSection title={lang === 'en' ? 'Technologies' : 'Tecnologías'}>
          <div className='grid grid-cols-2 place-items-start'>
            {tecnologies.map((el) => (
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

export default Sidebar1;
