import { PublicLayout } from '../../layout'
import { navbarLinksFundacionDeCapacitacion } from './navbarLinksFundacionDeCapacitacion'

export const Capacitaciones = () => {
  return (
    <PublicLayout title="Capacitaciones" navbarLinks={ navbarLinksFundacionDeCapacitacion } height>
      <article className="flex justify-center items-center gap-12 p-8 w-3/4 bg-white rounded-md">
        <img
          className="w-1/2 rounded-md"
          src="https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/345229073_142539958683150_8152103892755275503_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zegZBZ0CU-4AX-w8uYU&_nc_ht=scontent.flpb3-2.fna&oh=00_AfAQOmMne7O6gDDlj0dY3Sl60pC8kWyS5Iuh5hMjCWC7pw&oe=645EFE46"
          alt="Mision"
        />
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-1/2">
          <p className="text-xl font-serif text-center text-black"> En Bolivia existen diferentes tipos de capacitaciones para bomberos, algunas de ellas son: </p>
          <ol className="list-decimal">
            <li className="text-xl font-serif text-center text-black"> Capacitaciones en técnicas de extinción de incendios: estos cursos suelen ser impartidos por profesionales del área y se enfocan en enseñar técnicas de combate y extinción de incendios. Incluyen temas como la identificación de riesgos, el uso de equipos y herramientas, y la coordinación de operaciones. </li>
            <li className="text-xl font-serif text-center text-black"> Capacitaciones en rescate y salvamento: estos cursos se enfocan en el rescate y salvamento de personas atrapadas en situaciones de emergencia, ya sea en estructuras colapsadas, vehículos accidentados, o en situaciones de inundaciones o avalanchas. </li>
            <li className="text-xl font-serif text-center text-black"> Capacitaciones en manejo de materiales peligrosos: estas capacitaciones se enfocan en la identificación y manejo de sustancias químicas peligrosas. Incluyen temas como la identificación de riesgos químicos, la selección y uso de equipos de protección personal, y la coordinación de operaciones en emergencias químicas. </li>
            <li className="text-xl font-serif text-center text-black" > Capacitaciones en prevención de incendios: estos cursos se enfocan en la identificación y prevención de riesgos de incendio en edificios, estructuras y áreas públicas. Incluyen temas como la educación al público, la realización de inspecciones de seguridad y la identificación de peligros potenciales. </li>
            <li className="text-xl font-serif text-center text-black" > Capacitaciones en gestión de desastres: estas capacitaciones se enfocan en la planificación, preparación y coordinación de operaciones en situaciones de desastres naturales, como terremotos, inundaciones o avalanchas. Incluyen temas como la coordinación de equipos de rescate y la atención a personas afectadas por desastres. </li>
          </ol>
        </div>
      </article>
    </PublicLayout>
  )
}
