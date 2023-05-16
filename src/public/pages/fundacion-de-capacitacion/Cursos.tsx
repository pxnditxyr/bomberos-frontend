import { PublicLayout } from '../../layout'
import { navbarLinksFundacionDeCapacitacion } from './navbarLinksFundacionDeCapacitacion'

export const Cursos = () => {
  return (
    <PublicLayout title="Cursos" navbarLinks={ navbarLinksFundacionDeCapacitacion } height>
      <article className="flex justify-center items-center gap-12 p-8 w-3/4 bg-white rounded-md">
        <img
          className="w-1/2 rounded-md"
          src="https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/344368796_6467583239932557_4278215433529836670_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=dpLKuJoTLlsAX9FdOvV&_nc_ht=scontent.flpb3-1.fna&oh=00_AfAqMKsYe-HdkQxv5WeRPfv46QZyNWLGY2QO_7u7R8YhMA&oe=645EE39B"
          alt="Mision"
        />
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-1/2">
          <p className="text-xl font-serif text-center text-black"> Los cursos de bomberos en Bolivia están diseñados para proporcionar a los bomberos las habilidades y conocimientos necesarios para responder de manera efectiva y segura a situaciones de emergencia. La capacitación se lleva a cabo en instituciones especializadas como la Escuela Nacional de Bomberos y abarca una amplia gama de temas, desde la lucha contra incendios y la gestión de emergencias hasta la atención médica de emergencia y la prevención de incendios. </p>
          <p className="text-xl font-serif text-center text-black"> Entre los cursos de bomberos disponibles en Bolivia se pueden encontrar: </p>

          <ol className="list-decimal">
            <li className="text-xl font-serif text-center text-black"> Curso básico de bomberos: este curso cubre los fundamentos de la lucha contra incendios, la gestión de emergencias y la atención médica de emergencia. Los estudiantes aprenden sobre los diferentes tipos de incendios, cómo manejar equipos y herramientas de lucha contra incendios y cómo realizar rescates en situaciones de emergencia. </li>
            <li className="text-xl font-serif text-center text-black"> Curso avanzado de bomberos: este curso está dirigido a bomberos con experiencia previa y cubre temas más avanzados como la lucha contra incendios forestales, el manejo de materiales peligrosos y el rescate en estructuras colapsadas. </li>
            <li className="text-xl font-serif text-center text-black"> Curso de prevención de incendios: este curso se enfoca en la identificación y prevención de riesgos de incendio, y enseña a los estudiantes cómo inspeccionar edificios y estructuras para detectar peligros de incendio y cómo educar al público sobre la prevención de incendios. </li>
            <li className="text-xl font-serif text-center text-black"> Curso de rescate acuático: este curso está diseñado para capacitar a los bomberos en técnicas de rescate en aguas abiertas y cerradas, incluyendo la identificación de peligros en el agua, la selección del equipo de rescate adecuado y la realización de rescates en diferentes situaciones. </li>
          </ol>
        </div>
      </article>
    </PublicLayout>
  )
}
