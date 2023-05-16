import { PublicLayout } from '../../layout'
import { navbarLinksQuienesSomos } from './navbarLinksQuienesSomos'

export const Historia = () => {
  return (
    <PublicLayout title="Historia" navbarLinks={ navbarLinksQuienesSomos } height>
      <article className="flex justify-center items-center gap-4 p-8 w-3/4 bg-white rounded-md">
        <img
          className="w-1/2 rounded-md"
          src="https://scontent.flpb3-1.fna.fbcdn.net/v/t1.6435-9/116723917_183189629996935_131348890699201785_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=-MMhArA3cDwAX9GTm-E&_nc_ht=scontent.flpb3-1.fna&oh=00_AfDvmkIJbAoxeNrnNmlrPCoYclQ7YAzVK9a0ZE3ZKxxYpg&oe=64776DE4"
          alt="Mision"
        />
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-1/2">
          <p className="text-xl font-serif text-center text-black"> Los orígenes de la Unidad de Bomberos “Antofagasta”, dependiente de la Policía Nacional, datan del 5 de mayo de 1875 cuando se crea la primera compañía de bomberos en nuestro  cautivo puerto de Antofagasta, teniendo como primer Comandante al señor FranciscoBascuñan A. </p>
          <p className="text-xl font-serif text-center text-black" > En 1886 a consecuencia del incendio del Palacio de Gobierno y a sugerencia de Don Daniel Núñez del Prado (quien fuera el primer comandante), con la ayuda de autoridades políticas y entidades cívicas, se logró crear la primera Compañía de Bomberos en la ciudad de La Paz. </p>
          <p className="text-xl font-serif text-center text-black" > El año 1914 en la ciudad d El año 1914 en la ciudad de Oruro se crea una Compa e Oruro se crea una Compañía de Bomberos con el ñía de Bomberos con el patrocinio de los residentes eslavos, quienes donaron un carro cisterna y algún material. Esta Unidad de Bomberos colaboró mucho con la Unidad de Bomberos de La Paz. </p>
          <p className="text-xl font-serif text-center text-black" > En 1944 la Honorable Alcaldía Municipal de la ciudad de La Paz organizó una nueva compañía de bomberos, con un moderno carro donado por la fábrica Forno; sin embargosu duración fue muy efímera. </p>
          <p className="text-xl font-serif text-center text-black" > Unidad de Bomberos en todas las capitales de departamento del país.  </p>
          <p className="text-xl font-serif text-center text-black" > El 11 de septiembre de 1959 según Decreto Supremo No. 05299 se crea oficialmente el Cuerpo de Bomberos, dentro la institución policial, con su respectiva asignación presupuestaria.  </p>
          <p className="text-xl font-serif text-center text-black" > Desde el año 1959 hasta el año 1992, el Cuerpo de Bomberos "Antofagasta" estuvo ubicado en la Plaza Pérez Velasco.  </p>
          <p className="text-xl font-serif text-center text-black" > El 27 de junio de 1992, por convenio entre la H.A.M. y la Policía Nacional, la Unidad de Bomberos cede sus instalaciones a cambio de terrenos en la avenida del poeta y a orillas del río Orkojawira en Miraflores. </p>
          <p className="text-xl font-serif text-center text-black" > En la actualidad la Unidad de Bomberos Antofagasta, ocupa modernas instalaciones en la calle Sucre esquina Uchumayu de la zona de Santa Bárbara la zona de Santa Bárbara de la ciudad de La Paz. </p>
        </div>
      </article>

    </PublicLayout>
  )
}
