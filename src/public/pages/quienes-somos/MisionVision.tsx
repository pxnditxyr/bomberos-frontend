import { PublicLayout } from '../../layout'
import { navbarLinksQuienesSomos } from './navbarLinksQuienesSomos'

export const MisionVision = () => {
  return (
    <PublicLayout title="Mision y Vision" navbarLinks={ navbarLinksQuienesSomos } height>
      <article className="flex justify-center items-center gap-4 p-8 w-3/4 bg-white rounded-md">
        <img
          className="w-1/2 rounded-md"
          src="https://i.ibb.co/L0zz5Ct/IMAGEN-1.jpg"
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
