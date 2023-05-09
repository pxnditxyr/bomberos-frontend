import { Carousel } from 'react-responsive-carousel'
import { PublicLayout } from '../../layout'
import { navbarLinksBomberos } from './navbarLinksBomberos'

const carouselItems = [
  {
    imgUrl: 'https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/331321957_8800686909973088_6451383725321536303_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=p63jXZcrtSkAX_21HwO&_nc_ht=scontent.flpb3-1.fna&oh=00_AfAf3fnEvlJXwxop2zRx6aHu8dXAU1uadDQ7_7UAg3UDRQ&oe=645EC50F',
    legend: 'Los Cuerpos de Bomberos de Bolivia son organizaciones encargadas de la  prevención  y  lucha  contra  incendios  y  otras  emergencias  en  las ciudades  y  regiones  de  Bolivia.  Estos  cuerpos  son organizaciones  sin fines de lucro y están integrados por bomberos voluntarios y profesionales, quienes   trabajan   en   estrecha   colaboración   con   otras   agencias   de respuesta   a   emergencias,   como   la   policía   y   servicios   médicos   de emergencia.',
  },
  {
    imgUrl: 'https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/331700834_898742164707587_6275391326370680990_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=V5i-WhcvnnQAX_yv5Yh&_nc_ht=scontent.flpb3-1.fna&oh=00_AfB-M55ntRa7CWE6IsAaW6BgTJFG2pJnJWUbdJn20h43lA&oe=645EF2E2',
    legend: 'El Comando Nacional de Bomberos de Bolivia es la autoridad principal de los Cuerpos de Bomberos en Bolivia y es responsable de establecer políticas y directrices para la prevención y lucha contra incendios en el país. Este organismo cuenta con un directorio compuesto por representantes de los diferentes cuerpos de bomberos del país, y está dirigido por un comandante nacional, quien es el máximo responsable del cuerpo de bomberos.',
  },
  {
    imgUrl: 'https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/331721089_607696457860305_4742895370554933610_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ZhcmSItOq-sAX9f2s4e&_nc_ht=scontent.flpb3-1.fna&oh=00_AfBI-RHBCCYKAw-SDu2-R9WVJF9eBjpR-f3FqXdn7er4fw&oe=645E9280',
    legend: 'La formación de nuevos Cuerpos de Bomberos en Bolivia está regulada por el Comando  Nacional  de  Bomberos  de  Bolivia,  que  establece  los  requisitos  y procedimientos para la creación de nuevos cuerpos de bomberos en el país.Para  la  formación  de  un  nuevo  Cuerpo  de  Bomberos  en  Bolivia,  es  necesario que un grupo de ciudadanos interesados en  el tema se organicen y presenten una  solicitud  formal  al   Comando   Nacional   de  Bomberos,  proporcionando información  sobre  la  necesidad  y  justificación  para  la  creación  de  un  nuevo cuerpo de bomberos en su comunidad.',
  },
  
]

export const CuerpoDeBomberos = () => {
  return (
    <PublicLayout title="Cuerpo de Bomberos" navbarLinks={ navbarLinksBomberos }>
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
