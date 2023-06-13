import { PublicLayout } from '../../layout'
import { navbarLinksBomberos } from './navbarLinksBomberos'

export const QuieresSerBombero = () => {
  return (
    <PublicLayout title="¿Quieres ser Bombero?" navbarLinks={ navbarLinksBomberos } height>
      <article className="flex justify-center items-center gap-12 p-8 w-3/4 bg-white rounded-md">
        <img
          className="w-1/2 rounded-md"
          src="https://i.ibb.co/j5R21m0/BOMBERO.jpg"
          alt="Mision"
        />
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-1/2">
          <p className="my-2 text-xl text-justify"> Para ser bombero es necesario haber cumplido 18 años, no tener antecedentes y contar con salud compatible con el servicio. </p>
         
          <p className="my-2 text-xl text-justify"> Los postulantes deben pasar una etapa inicial de ocho meses, tiempo en el cual reciben formación básica en tres áreas específicas de trabajo: agua, fuego y tácticas bomberiles, rescate y atención hospitalaria. </p>

          <p className="my-2 text-xl text-justify"> Después de ese tiempo, estarán preparados/as para realizar las tareas que se les vaya a encomendar. </p>
          
        </div>
      </article>
      
    </PublicLayout>
  )
}
