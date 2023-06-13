import { PublicLayout } from '../../layout'
import { navbarLinksBomberos } from './navbarLinksBomberos'

export const Historia = () => {
  return (
    <PublicLayout title="Historia" navbarLinks={ navbarLinksBomberos } height>
      <article className="flex flex-col justify-center items-center p-8 w-3/4 bg-white rounded-md">
        <div className="flex flex-row justify-center items-center gap-12 px-4 py-8 w-full">
          <img
            className="w-1/2 rounded-md"
            src="https://i.ibb.co/db60zFz/1.jpg"
            alt="Mision"
          />
          <p className="text-justify">
            El primer cuerpo de bomberos de Bolivia fue creado en la ciudad de La Paz en 1875, por iniciativa de Daniel Núñez del Prado, quien propuso a la comunidad la creación de un cuerpo de bomberos, sugerencia que fue aceptada y con la cooperación de las autoridades políticas e instituciones cívicas se logró crear la Primera Compañía de Bomberos de La Paz. Esta compañía de bomberos estaba integrada por distinguidos ciudadanos que voluntariamente se incorporaron en sus filas para prestar servicios en esta noble misión. La honorable alcaldía municipal cedió un local para este fin en la Plaza del Teatro, denominada posteriormente Plaza Núñez del Prado en homenaje al primer comandante del cuerpo de bomberos. En la actualidad funciona en ese local la sede de los Amigos de Ciudad.
          </p>
        </div>
        <div className="flex flex-row gap-4 px-4 py-8 w-full">
          <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-full">
            <p className="text-justify">
              Este cuerpo de bomberos estuvo equipado solamente de un carro cisterna y materiales de zapa. No contando con equipo y materiales adecuados, y la falta de cooperación económica para su mantenimiento, no permitieron que esta compañía de bomberos preste servicios por más de dos años.
            </p>
            <p className="text-justify">
              En 1944 la honorable alcaldía de La Paz, vuelve a organizar una compañía de bomberos, contando como base con un hermoso carro cisterna, donado por la fábrica Forno. Integraron esta compañía un reducido número de voluntarios seleccionados de la alta sociedad paceña cuyas actuaciones fueron brillantes en los desfiles de paradas por la vistosidad y elegancia de sus uniformes, el entusiasmo de estos bomberos fue efímero y aquel carro bombero continuó prestando servicio en el traslado de carne para la intendencia municipal.
            </p>
            <p className="text-justify">
              En 1948 el coronel Walter Gonzáles V. Que en aquel entonces ostentaba el grado de teniente, organizó un grupo de auxilio y protección de oficiales, cadetes, y carabineros, con herramientas y materiales improvisados. La orden general de destinos de la institución policial, apagó todo entusiasmo y aquel noble propósito quedó en el olvido.
            </p>
            <p className="text-justify">
              Los intentos de crear un cuerpo de bomberos dentro de la institución policial fueron constantes, y es así que en su ley orgánica de 14 de noviembre de 1950 se incluyeron dos artículos (321 y 322). Se organizaron unidades de bomberos en todas las capitales de departamentos y otros centros poblados, con aportes que hagan las prefecturas, municipalidades, comercio e industrias y personas particulares. Este artículo quedó cesante, hasta que en el gobierno del Dr. Hernán Siles, se dicta el Decreto Supremo No. 05299 de 11 de septiembre de 1959 cuyo Art. 1º. dice: “Créase dentro de Bomberos, que tendrá carácter nacional y que dependerá de la Dirección Nacional de Policías y Carabineros de Bolivia”.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center gap-4 px-4 py-8 w-full">
            <p className="text-justify">
              Su primer comandante el Cnl. Walter González V., por entonces Cáp.., recibió del gobierno por un convenio con la República de Argentina, un importante equipo y materiales; dos auto bombas Nissan modelo 1952 tres motobombas Ford modelo 1935, todos estos con sus respectivos accesorios una regular cantidad de extinguidores portátiles de CO2 y otros equipos de salvamento, como mallas de seguridad toboganes etc. Con estos equipos y materiales, el cuerpo de bomberos empezó a prestar servicios a la comunidad, en principio en diferentes locales, hasta que en 1962 se consiguió que la alcaldía municipal, cediera con carácter provisional un lote de terreno en la Plaza Pérez Velasco, posteriormente se traslado a la Calle Sucre esq. Uchumayu s/n, lugar donde actualmente funciona.
            </p>
            <p className="text-justify">
              El cuerpo de bomberos de la Paz recibió en poco tiempo por sus servicios prestados, la simpatía y el apoyo del pueblo y para perpetuar la memoria de la Primera Compañía de Bomberos de Bolivia, la Dirección General de Policías mediante Resolución No. 9/60 de fecha 20 de octubre de 1960 designa como Antofagasta al cuerpo de bomberos de La Paz.
            </p>
            <p className="text-justify">
              En 1964 durante el Gobierno del Dr. Víctor Paz Estensoro, se adquirieron de la C.T.D.I. tres carros auto bombas ensamblados en la Argentina y bautizados con el nombre de Neptunos. Estos carros por su enorme estructura, su capacidad de 4000 mil litros de agua, las disposiciones de cilindro de amoniaco y otros acondicionamientos para disturbios civiles, dificultaron una mayor eficiencia Bomberil por su lentitud y difícil maniobrabilidad en las accidentadas calles de La Paz.
            </p>
            <p className="text-justify">
              Hoy en día la Unidad de Bomberos Antofagasta cuenta con equipo moderno y su función se acrecentó a otros campos como son los de BERSA y explosivos, dotaciones con las cuales cumple la función de auxilio a toda la sociedad Boliviana.
            </p>
          </div>
        </div>
      </article>
    </PublicLayout>
  )
}
