import ExperienceItem from './ExperienceItem';

export interface Experience {
  title: string;
  company: string;
  bullets: string[];
  dateStart: Date;
  dateEnd: Date | string;
}

const experiences: Experience[] = [
  {
    title: 'Analista de Abastecimiento',
    company: 'Coca-Cola Femsa',
    bullets: [
      'Gestión de insumos para la planta de bebidas no carbonatadas',
      'Diseño de tablero de control del sector y automatización de pedidos',
    ],
    dateStart: new Date(2012, 11, 1),
    dateEnd: new Date(2014, 3, 1),
  },
];

function ExperienceSection() {
  return (
    <section>
      <h2 className='text-2xl font-semibold mb-3'>Experiencia Profesional</h2>
      {experiences.map((el) => (
        <ExperienceItem key={el.title + el.company} experience={el} />
      ))}
    </section>
  );
}

export default ExperienceSection;
