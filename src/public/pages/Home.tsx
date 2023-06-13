import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const imagenes = [
  {
    url: 'https://cd1.eju.tv/wp-content/uploads/2015/10/5631ff40ab343.jpg',
    alt: 'Imagen 1',
    descripcion: 'Nuestro centro de operaciones, es el lugar donde se coordina y controla el trabajo de los bomberos en el lugar de la emergencia.',
  },
  {
    url: 'https://i.ibb.co/CwDpNYh/IMAGEN-2.jpg',
    alt: 'Imagen 2',
    descripcion: 'Capacitate para ser un bombero profesional.',
  },
  {
    url: 'https://i.ibb.co/XCjXR5h/IMAGEN-3.jpg',
    alt: 'Imagen 3',
    descripcion: 'Se atiende a la población en caso de emergencia.',
  },
  {
    url: 'https://i.ibb.co/GQhWKtT/IMAGEN-4.jpg',
    alt: 'Imagen 4',
    descripcion: 'Se lidia con el fuego en caso de incendio.',
  },
  {
    url: 'https://i.ibb.co/fxzL5Ym/IMAGEN-5.jpg',
    alt: 'Imagen 5',
    descripcion: 'Siempre permanecemos juento a la comunidad.',
  },
  {
    url: 'https://i.ibb.co/YhHQvMP/IMAGEN-6.jpg',
    alt: 'Imagen 6',
    descripcion: 'Bienvenido a la familia bomberil.',
  },
]

export const Home = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-12 bg-slate-800"
    >
      <h1
        className="text-5xl font-bold font-serif text-center text-white"
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
        <p className="text-justify text-lg font-serif text-black bg-white bg-opacity-50 p-4 rounded-xl">
          El Cuerpo de Bomberos Voluntarios Antofagasta de la Sierra, es una institución sin fines de lucro, que tiene como objetivo principal la protección de la vida y los bienes de la comunidad, mediante la prevención y extinción de incendios, rescate de personas y animales, y la atención de emergencias en general.
        </p>
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-full">
          <h3 className="text-3xl font-bold font-serif text-center text-white"> Ubicación </h3>
          <iframe src={ `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5923477809806!2d-68.12867365!3d-16.49616675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206dd66ebe6d%3A0x11cee91b76d03b5f!2sbomberos%20Antofagasta%2C%20C.%20Bolivar%2C%20La%20Paz!5e0!3m2!1sen!2sbo!4v1683607754423!5m2!1sen!2sbo` } width="600" height="450" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}
