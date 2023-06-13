import { PublicLayout } from '../../layout'
import { navbarLinksQuienesSomos } from './navbarLinksQuienesSomos'

export const EmblemaInstitucional = () => {
  return (
    <PublicLayout title="Emblema Institucional" navbarLinks={ navbarLinksQuienesSomos } height>
      <article className="flex flex-col justify-center items-center p-8 w-3/4 bg-white rounded-md">
        <div className="flex justify-center items-center gap-16 px-4 py-8 w-full">
          <img
            className="w-1/2 rounded-md"
            src="http://www.firepoliparches.com/images/BOLV_Bomberos_1.jpg"
            alt="Mision"
          />
          <p className="text-xl font-serif text-justify text-black"> El emblema institucional de la unidad de Bomberos debe estar colocado en la parte frontal de lagorra armada, y en la pa parte frontal de la gorra armada, y en la parte lateral del brazo de los efectivos eral del brazo de los efectivos de esta unidad. Consta de las siguientes partes:  </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8">
          <ol className="list-decimal list-inside flex flex-row gap-4 px-4 py-8 w-full">
            <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-full">
              <li className="text-xl font-serif text-justify text-black"> Es un emblema ovalado de color rojo con el borde de color blanco, los cuales son los colores de identificación de esta unidad </li>
              <li className="text-xl font-serif text-justify text-black"> La imagen de una antorcha encendida que representa el poder conferido por la C .P. E., lo que justifica su razón de ser y le otorga sus atribuciones especificas </li>
              <li className="text-xl font-serif text-justify text-black"> Por  detrás  de  esta  antorcha  encendida  se  encuentran  las  ramas  de  laurel  y  Olivo,  que simbolizan la “Gloria Institucional”. </li>
            </div>
            <div className="flex flex-col gap-4 px-4 py-8 w-full">
              <li className="text-xl font-serif text-justify text-black" > En la parte superior, la leyenda de “Policía Boliviana”, que indica el nombre de esta unidad. </li>
              <li className="text-xl font-serif text-justify text-black" > Debajo y en forma semicircular con relación a la imagen, la leyenda de “Bomberos”, que indica el nombre de la unidad. </li>
            </div>
          </ol>
        </div>
      </article>
    </PublicLayout>
  )
}
