import { parseDate } from '@/app/utils/parseDates';

export interface EducationProps {
  title: string;
  institution: string;
  dateStart: Date;
  dateEnd: Date | string;
}

function Education({ title, institution, dateStart, dateEnd }: EducationProps) {
  console.log(parseDate(dateStart));
  return (
    <div className=''>
      <h4 className='text-base font-semibold'>{title}</h4>
      <h5 className='text-sm font-semibold'>{institution}</h5>
      <p className='text-xs'>{`${parseDate(dateStart)} - ${parseDate(
        dateEnd
      )}`}</p>
    </div>
  );
}

export default Education;
