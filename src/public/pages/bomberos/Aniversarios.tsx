import { PublicLayout } from '../../layout'
import { navbarLinksBomberos } from './navbarLinksBomberos'

export const Aniversarios = () => {
  return (
    <PublicLayout title="Aniversarios" navbarLinks={ navbarLinksBomberos }>
      <article className="flex justify-center items-center gap-12 p-8 w-3/4 bg-white rounded-md">
        <img
          className="w-1/2 rounded-md"
          src="https://i.ibb.co/C8wVKRz/ANIVERSARIO.jpg"
          alt="Mision"
        />
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-1/2">
          <p className="text-justify text-lg">
            Mediante el Decreto supremo No. 05299 de 11 de septiembre  de  1959  en  la  Presidencia  del  Dr. Hernán  Siles  Suazo,  se  crean  las  Unidades  de Bomberos  en  todo  el  País,  las  cuales  pasan  a depender de la Policía Nacional.Teniendo en cuenta lo mencionado anteriormente y la fundación de Bomberos en el Departamento de  Antofagasta  hoy  de  propiedad  de  Chile,  se dispuso que la fecha Aniversario de la Unidad de Bomberos Antofagasta sea el 5 de abril de cada año
          </p>
        </div>
      </article>
    </PublicLayout>
  )
}
