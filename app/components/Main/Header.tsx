import { Michroma } from 'next/font/google';

const fontHeading = Michroma({
  weight: ['400'],
  subsets: ['latin'],
});

function Header() {
  return (
    <header>
      <h1 className={`${fontHeading.className} text-4xl`}>
        Rodrigo Moguillanksy
      </h1>
      <h2 className='text-2xl font-semibold italic mt-3 mb-4'>
        Full-Stack Developer
      </h2>
      <div className='space-y-1 text-[14px]'>
        <p>
          Ingeniero Industrial con más de 8 años de experiencia en Supply Chain,
          durante los cuales lideré proyectos que atravesaron diversas áreas
          como IT, Ingeniería y Procesos.
        </p>
        <p>
          La búsqueda continua de automatización de procesos y diseño de
          herramientas tecnológicas para la logistíca, me llevaron a orientar mi
          carrera al mundo del desarrollo y la programación
        </p>
      </div>
    </header>
  );
}
export default Header;
