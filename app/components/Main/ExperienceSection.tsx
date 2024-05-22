import ExperienceItem from './ExperienceItem';

export interface Experience {
  title: string;
  company: string;
  bullets: string[];
  dateStart: Date;
  dateEnd: Date | string;
}

interface ExperienceSectionProps {
  page: number;
  experiences: Experience[];
  lang: 'en' | 'es';
}

function ExperienceSection({
  page,
  experiences,
  lang,
}: ExperienceSectionProps) {
  return (
    <section>
      {page === 1 && (
        <h2 className='text-2xl font-semibold mb-3'>
          {lang === 'en' ? 'Work Experience' : 'Experiencia Profesional'}
        </h2>
      )}
      <div className='space-y-4'>
        {experiences.map((el) => (
          <ExperienceItem key={el.title + el.company} experience={el} />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
