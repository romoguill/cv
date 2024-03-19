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
    title: '',
    company: '',
    bullets: [],
    dateStart: new Date(2020, 11, 1),
    dateEnd: new Date(2023, 4, 1),
  },
  {
    title: 'Jefe Regional de Planeamiento',
    company: 'Axionlog',
    bullets: [
      'Coordinación de equipos de Compras en 8 paises de Lationamérica',
      'Liderar el diseño e implementación de un ERP desarrollado en conjunto con una consultora tecnológica',
    ],
    dateStart: new Date(2019, 11, 1),
    dateEnd: new Date(2020, 12, 1),
  },
  {
    title: 'Jefe de Proyectos',
    company: 'Axionlog',
    bullets: [
      'Elaboración de un MasterPlan para la construcción de uno de los centros logistícos de temperatura controlada más grandes del país por un valor de US$ 40MM.',
      'Negociación de contratos de energía y gerenciamiento de proyectos relacionados a la disminución de consumo eléctrico',
    ],
    dateStart: new Date(2019, 4, 1),
    dateEnd: new Date(2020, 11, 1),
  },
  {
    title: 'Project Manager',
    company: 'Axionlog',
    bullets: [
      'Gerenciamiento del diseño y ejecución de la construcción de un freezer de 1000m2.',
      'Responsable por la implementación de un sistema WMS en Argentina',
    ],
    dateStart: new Date(2017, 8, 1),
    dateEnd: new Date(2019, 4, 1),
  },
  {
    title: 'Analista Senior de Compras',
    company: 'Axionlog',
    bullets: [
      "Responsable de la compra de insumos para los negocios de McDonald's y Subway.",
      'Creación de un modelo de Machine Learning para armar clusters de productos con similar estacionalidad de demanda.',
    ],
    dateStart: new Date(2016, 4, 1),
    dateEnd: new Date(2017, 8, 1),
  },
  {
    title: 'Analista de Planeamiento Estratégico.',
    company: 'Unilever',
    bullets: [
      'Modificación de la red logística de Argentina mediante la contratación de nuevos centros óptimos de cross-docking.',
      'Programación de un script en SAP que permitía agrupar pedidos incompletos mejorando procesos operativos de Cobranzas y Transporte.',
    ],
    dateStart: new Date(2014, 7, 1),
    dateEnd: new Date(2016, 4, 1),
  },
  {
    title: 'Analista de Planeamiento Táctico',
    company: 'Coca-Cola Femsa',
    bullets: [
      'Diseño de planes anuales de producción para toda Argentina.',
      'Cálculo de lotes óptimos de producción y parametrización de SAP.',
    ],
    dateStart: new Date(2014, 3, 1),
    dateEnd: new Date(2014, 7, 1),
  },
  {
    title: 'Analista de Abastecimiento',
    company: 'Coca-Cola Femsa',
    bullets: [
      'Gestión de insumos para la planta de bebidas no carbonatadas.',
      'Diseño de tablero de control del sector y automatización de pedidos.',
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
