import { PublicLayout } from '../../layout'
import { navbarLinksQuienesSomos } from './navbarLinksQuienesSomos'

export const MisionVision = () => {
  return (
    <PublicLayout title="Mision y Vision" navbarLinks={ navbarLinksQuienesSomos } className="h-auto">
      <article className="flex justify-center items-center gap-4 p-8 w-3/4 bg-white rounded-md">
        <img
          className="w-1/2 rounded-md"
          src="https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/331745467_606715381298507_3300585523777897240_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8SzZGPB7J6wAX-m84en&_nc_ht=scontent.flpb3-2.fna&oh=00_AfAbtan_51MuUjwU3ECeu4exRr46fXtTDYScKLzziug7Wg&oe=645E7A24"
          alt="Mision"
        />
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-1/2">
          <h3 className="text-3xl font-bold font-serif text-center text-black"> Misión </h3>
          <p className="text-xl font-serif text-center text-black"> Desempeñar las funciones en forma eficiente y profesional, ya que, en diferentes casos de incendio y rescate, el público agradece y aplaude los servicios prestados por esta Unidad. </p>
          <h3 className="text-3xl font-bold font-serif text-center text-black"> Visión </h3>
          <p className="text-xl font-serif text-center text-black"> Ser un centro de excelencia en la respuesta a emergencias, la prevención de riesgos y la educación de la comunidad, comprometidos con la seguridad y el bienestar de todos los ciudadanos. </p>
        </div>
      </article>
    </PublicLayout>
  )
}
