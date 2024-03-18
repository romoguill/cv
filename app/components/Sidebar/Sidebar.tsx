import Image from 'next/image';
// @ts-ignore
import { IconType } from 'react-icons';
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';
import profilePic from '../../../public/selfie.png';
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
    text: 'Olivos, Buenos Aires, Argentina',
    Icon: FaMapMarkerAlt,
  },
];

const education: EducationProps[] = [
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

const tecnologies = [
  'Javascript',
  'Typescript',
  'React',
  'Next.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'CSS',
  'Tailwind',
];

function Sidebar() {
  return (
    <div className='grid-cols-1 bg-slate-800 p-6 pt-8'>
      <div className='rounded-full relative w-28 h-28 overflow-hidden mx-auto mb-10'>
        <Image src={profilePic} alt='profile pic' fill className='scale-105' />
      </div>

      <div className='space-y-5'>
        <SidebarSection title='Contacto'>
          <div className='space-y-3'>
            {contact.map((el) => (
              <p key={el.text} className='flex items-center gap-4'>
                <el.Icon size={20} className='shrink-0' />
                <span className='break-words overflow-hidden'>{el.text}</span>
              </p>
            ))}
          </div>
        </SidebarSection>

        <SidebarSection title='Educación'>
          <div className='space-y-3'>
            {education.map((el) => (
              <Education key={el.title} {...el} />
            ))}
          </div>
        </SidebarSection>

        <SidebarSection title='Tecnologías'>
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

export default Sidebar;
