import { parseDate } from '@/app/utils/parseDates';
import { Experience } from './ExperienceSection';
import { FaGreaterThan } from 'react-icons/fa';

interface ExperienceItemProps {
  experience: Experience;
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article>
      <h3 className='font-bold'>{experience.title}</h3>
      <h4 className='font-semibold'>
        {experience.company} |{' '}
        <span className='text-sm'>{`${parseDate(
          experience.dateStart
        )} - ${parseDate(experience.dateEnd)}`}</span>
      </h4>
      <ul className='ml-4 text-[15px]'>
        {experience.bullets.map((el) => (
          <li key={el} className='flex gap-2 items-start'>
            <FaGreaterThan size={12} className='mt-[0.3rem] shrink-0' />
            <span>{el}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceItem;
