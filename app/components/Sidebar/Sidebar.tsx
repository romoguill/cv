import Image from 'next/image';
// @ts-ignore
import profilePic from '../../../public/selfie.PNG';
import SidebarSection from './SidebarSection';
import Education from './Education';

function Sidebar() {
  return (
    <div className='grid-cols-1 bg-slate-800 p-4 pt-8'>
      <div className='rounded-full relative w-28 h-28 overflow-hidden mx-auto mb-10'>
        <Image src={profilePic} alt='profile pic' fill className='scale-105' />
      </div>
      <SidebarSection title='Contact'>
        <Education />
      </SidebarSection>
    </div>
  );
}

export default Sidebar;
