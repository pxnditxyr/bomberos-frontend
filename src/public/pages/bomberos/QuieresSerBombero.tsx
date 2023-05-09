import { PublicLayout } from '../../layout'
import { navbarLinksBomberos } from './navbarLinksBomberos'

export const QuieresSerBombero = () => {
  return (
    <PublicLayout title="¿Quieres ser Bombero?" navbarLinks={ navbarLinksBomberos } className="h-auto">
      <article className="flex justify-center items-center gap-12 p-8 w-3/4 bg-white rounded-md">
        <img
          className="w-1/2 rounded-md"
          src="https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/331729607_1312031306026249_8786779700122288861_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=J1Rm3zhJyoEAX9_g7Ee&_nc_ht=scontent.flpb3-1.fna&oh=00_AfAxoS2b9LwS6sVdxoKsjgUmS40mpzqJ6ohgmBsudWZE0w&oe=645E091D"
          alt="Mision"
        />
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-1/2">
          <p className="my-2 text-xl"> Para ser bombero es necesario haber cumplido 18 años, no tener antecedentes y contar con salud compatible con el servicio. </p>
         
          <p className="my-2 text-xl"> Los postulantes deben pasar una etapa inicial de ocho meses, tiempo en el cual reciben formación básica en tres áreas específicas de trabajo: agua, fuego y tácticas bomberiles, rescate y atención hospitalaria. </p>

          <p className="my-2 text-xl"> Después de ese tiempo, estarán preparados/as para realizar las tareas que se les vaya a encomendar. </p>
          
        </div>
      </article>
      
    </PublicLayout>
  )
}
