import Image from 'next/image';
// @ts-ignore
import profilePic from '../../../public/selfie.PNG';
import SidebarSection from './SidebarSection';
import Education, { EducationProps } from './Education';

const education: EducationProps[] = [
  {
    title: 'Full-Stack Developer',
    institution: 'Digital House',
    dateStart: new Date(2022, 6, 1),
    dateEnd: new Date(2023, 5, 1),
  },
  {
    title: 'Data Scientist',
    institution: 'Digital Hosue',
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

function Sidebar() {
  return (
    <div className='grid-cols-1 bg-slate-800 p-4 pt-8'>
      <div className='rounded-full relative w-28 h-28 overflow-hidden mx-auto mb-10'>
        <Image src={profilePic} alt='profile pic' fill className='scale-105' />
      </div>
      <SidebarSection title='Education'>
        <div className='space-y-3'>
          {education.map((ed) => (
            <Education key={ed.title} {...ed} />
          ))}
        </div>
      </SidebarSection>
    </div>
  );
}

export default Sidebar;
