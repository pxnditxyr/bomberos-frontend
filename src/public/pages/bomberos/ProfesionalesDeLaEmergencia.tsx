import { Carousel } from 'react-responsive-carousel'
import { PublicLayout } from '../../layout'
import { navbarLinksBomberos } from './navbarLinksBomberos'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const carouselItems = [
  {
    imgUrl: 'https://correodelsur.com/img/contents/images_840/2023/03/30/9efea424-cc61-42d6-bff4-72ab06740c9b.jpg',
    legend: 'Rescate Vehicular Bomberos define su acción en el Rescate Vehicular como de apoyo a salud: se trata de liberar a la persona atrapada en el accidente, facilitar y colaborar con la atención que puedan darle los servicios de salud en el mismo lugar del accidente y prepararla para su rápido y seguro traslado a un centro hospitalario. (SAMU, mutuales, ambulancias privadas, institucionales y otras).',

  },
  {
    imgUrl: 'https://cd1.eju.tv/wp-content/uploads/2021/08/img_612ba4c826da5-1100x502.jpg',
    legend: `Rescate Urbano Esta función merece el mayor reconocimiento en la brigada, debido a que se encuentra elmayoresfuerzo desplazadoporB.E.R.S.A. enestafunciónseencuentrala desalvarvidas y bienes que van desde la participación activa en casos trágicos como la de 19 defebrero en LaPazhastaelusodeequipohidráulico paraelrescate depersonasaprisionadasenun vehículoluegodeuna colisión`
  },
  {
    imgUrl: 'https://www.eldiario.net/portal/wp-content/uploads/2021/09/nal-102.jpg',
    legend: 'Incendios Forestales Al igual que los incendios estructurales Bomberos cuenta con vehículos de  grancapacidad  de  almacenaje  de  agua,  indumentaria  adecuada, mata  fuegos  y  otros  con  locualcumpleestafunción  demaneramuy eficiente.'
  },
  {
    imgUrl: 'https://scontent.flpb3-1.fna.fbcdn.net/v/t1.6435-9/82218727_501157157253377_8671782482384781312_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_Ov3y9NfgskAX_02ssU&_nc_ht=scontent.flpb3-1.fna&oh=00_AfB18nI4RA7f0DCBg167WmxqSAMGBYbw1NU6Sug1rOrkkQ&oe=647933A9',
    legend: 'Rescate acuatíco B.E.R.S.A. tambiéncumplela funciónderescatedepersonas enlagos,ríosasícomotambién la recuperación de cadáveres en dichos medios para lo cual cuenta con equipocomo ser camillas flotadoras,salvavidasyequipoparabuceoy otros.'
  },
  {
    imgUrl: 'https://abi.bo/images/historico_1/WhatsApp_Image_2022-01-14_at_11.29.24_AM.jpeg',
    legend: 'Los rescates de mineros son operaciones de alto riesgo que requieren habilidades y conocimientos especializados por parte de los equipos de rescate. Los bomberos son uno de los grupos de respuesta de emergencia que pueden ser llamados para ayudar en estas situaciones.'
  },
  {
    imgUrl: 'https://scontent.flpb3-2.fna.fbcdn.net/v/t1.6435-9/120242277_653137538722004_2103732170793356530_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hD3aGnv-CvYAX-siVi8&_nc_ht=scontent.flpb3-2.fna&oh=00_AfAFpZHYPBS7iPUVD1qW0tSREQ_DVbji8bk6WPhrad2ajA&oe=64792850',
    legend: 'Rescate de Altura B.E.R.S.A. cuenta con equipo moderno para el rescate de personas en pendientes degranaltura comosonlaspendientesdela carreteraalos Yungas,las diferentesquebradasde nuestropaísasítambiénsus nevadoscomoelIllimanioel Illampu.'
  },
]


export const ProfesionalesDeLaEmergencia = () => {

  return (
    <PublicLayout title="Profesionales de la Emergencia" navbarLinks={ navbarLinksBomberos } height>
      <div
        className="w-full h-full flex flex-col justify-center items-center gap-4 px-4 py-8 bg-white flex justify-center items-center gap-12 p-8 w-3/4 bg-white rounded-md"
      >
        <p className="my-2 text-xl"> Las emergencias actuales no permiten asociar a los bomberos sólo con los incendios estructurales. Hoy, en todo el mundo, son considerados como un servicio de emergencia general, que responde a una amplia gama de siniestros, originados por la naturaleza (inundaciones, aluviones, terremotos, entre otros), o por la acción u omisión del hombre, como accidentes vehiculares, derrumbes, derrames de materiales peligrosos, etc. Para enfrentar estas emergencias, Bomberos requiere no sólo de equipos modernos, sino también de capacitación técnica actualizada, como corresponde a verdaderos profesionales. Esto incluye una organización que garantice una oportuna y eficiente respuesta, todos los días y en cualquier momento. Y que permita responder en forma profesional a las diversas emergencias que se presenten y actuando de acuerdo a los estándares internacionales de atención de emergencias y los nuevos requerimientos y necesidades para responder de mejor forma, demostrando y confirmando que los bomberos de Bolivia son voluntarios y profesionales de la emergencia. Algunas de las especialidades de Bomberos son: </p>
      </div>
      <article className="flex justify-center items-center gap-12 p-8 w-3/4 bg-white rounded-md">
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-7/12">
          <Carousel autoPlay infiniteLoop showThumbs={ false }>
            {
              carouselItems.map( ({ imgUrl, legend }) => (
                <div key={ legend }>
                  <img src={ imgUrl } alt={ legend }
                    className="w-full h-96 object-cover"
                  />
                  <p className="legend">{ legend }</p>
                </div>
              ))
            }
          </Carousel>

          
        </div>
      </article>
    </PublicLayout>
  )
}
