import { PublicLayout } from '../../layout'
import { navbarLinksFundacionDeCapacitacion } from './navbarLinksFundacionDeCapacitacion'

export const Talleres = () => {
  return (
    <PublicLayout title="Talleres" navbarLinks={ navbarLinksFundacionDeCapacitacion } height>
      <article className="flex justify-center items-center gap-12 p-8 w-3/4 bg-white rounded-md">
        <img
          className="w-1/2 rounded-md"
          src="https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/344368796_6467583239932557_4278215433529836670_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=dpLKuJoTLlsAX9FdOvV&_nc_ht=scontent.flpb3-1.fna&oh=00_AfAqMKsYe-HdkQxv5WeRPfv46QZyNWLGY2QO_7u7R8YhMA&oe=645EE39B"
          alt="Mision"
        />
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-1/2">
          <p className="text-xl font-serif text-center text-black"> Los talleres de bomberos en Bolivia son sesiones de entrenamiento práctico y capacitación teórica para bomberos y personal de emergencia. Estos talleres pueden cubrir una variedad de temas, desde la lucha contra incendios y la atención médica de emergencia hasta la gestión de desastres y la prevención de incendios. </p>
          <p className="text-xl font-serif text-center text-black"> Entre los talleres de bomberos disponibles en Bolivia se pueden encontrar: </p>

          <ol className="list-decimal">
            <li className="text-xl font-serif text-center text-black"> Taller de manejo de materiales peligrosos: este taller se enfoca en el manejo seguro de sustancias químicas peligrosas y cubre temas como la identificación de riesgos químicos, la selección de equipos de protección personal y la respuesta adecuada a emergencias químicas. </li>
            <li className="text-xl font-serif text-center text-black"> Taller de rescate en estructuras colapsadas: este taller se enfoca en el rescate de personas atrapadas en edificios y estructuras colapsadas. Los participantes aprenden técnicas de búsqueda y rescate, el uso de herramientas y equipos especializados y la coordinación de operaciones de rescate. </li>
            <li className="text-xl font-serif text-center text-black"> Taller de manejo de herramientas y equipos de lucha contra incendios: este taller se enfoca en el manejo de herramientas y equipos de lucha contra incendios, incluyendo mangueras, extintores y equipos de ventilación. Los participantes aprenden cómo usar estas herramientas de manera efectiva y segura para combatir incendios. </li>
            <li className="text-xl font-serif text-center text-black"> Taller de prevención de incendios: este taller se enfoca en la identificación y prevención de riesgos de incendio. Los participantes aprenden cómo inspeccionar edificios y estructuras para detectar peligros de incendio y cómo educar al público sobre la prevención de incendios. </li>
          </ol>
        </div>
      </article>
    </PublicLayout>
  )
}
