import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const imagenes = [
  {
    url: 'https://cd1.eju.tv/wp-content/uploads/2015/10/5631ff40ab343.jpg',
    alt: 'Imagen 1',
    descripcion: 'Imagen 1',
  },
  {
    url: 'https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/339071081_948272379691961_3241603791051171435_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8NSPSaMffD0AX-h2NuE&_nc_ht=scontent.flpb3-1.fna&oh=00_AfDIMBe2XxR6dT37_c5RpStnTRqEcmYIrENxx7d-QQodVA&oe=64547405',
    alt: 'Imagen 2',
    descripcion: 'Imagen 2',
  },
  {
    url: 'https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/331732236_761370075323893_6030746923581872307_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0CgSjtscqzgAX91-CwB&_nc_ht=scontent.flpb3-1.fna&oh=00_AfBMGnWpafSs3uK-WlfnAdN9xrBRTykzBbu30eVSr84Fsw&oe=6455E930',
    alt: 'Imagen 3',
    descripcion: 'Imagen 3',
  },
  {
    url: 'https://scontent.flpb3-1.fna.fbcdn.net/v/t1.18169-9/21462437_117823735586723_2912967240130479855_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=s6oxUvO_Fr4AX8sDfS7&_nc_ht=scontent.flpb3-1.fna&oh=00_AfBjvHJUGAkahGieLVj4T25JazblpIAaV0Ob8slfpPxUBg&oe=64775BB8',
    alt: 'Imagen 4',
    descripcion: 'Imagen 4',
  },
  {
    url: 'https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/331321957_8800686909973088_6451383725321536303_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=h6RG9cRNCc8AX8SMFJR&_nc_ht=scontent.flpb3-1.fna&oh=00_AfAz2ED5wdsRM2foTktvYNJTxD8i_8rtKo1UF1mM4vm9jA&oe=6454E1CF',
    alt: 'Imagen 5',
    descripcion: 'Imagen 5',
  },
  {
    url: 'https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/241861506_150879793898557_1734532917875780329_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=t_ZlEEIr1YwAX9tXWDq&_nc_ht=scontent.flpb3-2.fna&oh=00_AfA-_qE3aaWEoI-KlTIzyeD7FZcDI__BJeea7nMQVc0hNQ&oe=6454B273',
    alt: 'Imagen 6',
    descripcion: 'Imagen 6',
  },
]

export const Home = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-12 bg-blue-600"
    >
      <h1
        className="text-5xl font-bold font-serif text-center text-black"
      > Inicio </h1>

      <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-7/12">
        <Carousel infiniteLoop autoPlay showThumbs={ false } >
          {
            imagenes.map( ({ url, alt, descripcion }) => (
              <div key={ url }
                className="w-full h-full"
              >
                <img
                  src={ url } alt={ alt }
                  className="w-full h-96 object-cover"
                />
                <p className="legend"> { descripcion } </p>
              </div>
            ))
          }
          
        </Carousel>
        <iframe src={ `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5923477809806!2d-68.12867365!3d-16.49616675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206dd66ebe6d%3A0x11cee91b76d03b5f!2sbomberos%20Antofagasta%2C%20C.%20Bolivar%2C%20La%20Paz!5e0!3m2!1sen!2sbo!4v1683607754423!5m2!1sen!2sbo` } width="600" height="450" loading="lazy"></iframe>
      </div>
    </div>
  )
}
