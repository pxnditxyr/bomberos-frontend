import { useAuthStore } from '../../hooks'

export const YoBombero = () => {

  const { startSignOut, user } = useAuthStore();

  const onSignOut = () => {
    startSignOut();
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <article
        // wrap
        className="w-full flex flex-row items-center justify-between gap-2 p-8"
      >
        <section
          className="w-full flex flex-col items-center justify-center px-4 py-4"
        >
          <img
            src="https://previews.123rf.com/images/ihorbiliavskyi/ihorbiliavskyi1812/ihorbiliavskyi181200079/114296315-fireman-avatar-icon-profession-logo-male-character-a-man-in-professional-clothes-people.jpg"
            alt="bombero"
            className="w-1/2 h-full rounded-full object-cover relative border-4 border-red-500"
          />
        </section>
        <section
          className="w-full flex flex-col justify-center gap-4 px-4 py-8"
        >
          <section
            className="w-full flex flex-col justify-center gap-4 px-4 py-8"
          >
            <h1 className="text-6xl font-bold"> Bienvenido <br/> <span className="text-red-500"> { user.name } { user.lastName } </span> </h1>
          </section>
          <section
            className="w-full flex flex-col justify-center gap-4 px-4 py-8"
          >
            <p className="text-xl font-bold"> <span className="font-bold text-red-500"> Email: </span> { user.email } </p>
            <p className="text-xl font-bold"> <span className="font-bold text-red-500"> Fecha de nacimiento: </span> { user.birthDate }</p>
            <p className="text-xl font-bold"> <span className="font-bold text-red-500"> Cedula de Identidad: </span> { user.dni } </p>
            <p className="text-xl font-bold"> <span className="font-bold text-red-500"> Telefono: </span> { user.phone }</p>
            <p className="text-xl font-bold"> <span className="font-bold text-red-500"> Estado civil: </span> { user.civilStatus }</p>
            <p className="text-xl font-bold"> <span className="font-bold text-red-500"> Genero: </span> { user.gender } </p>
          </section>
        </section>
      </article>

      <button
        className="bg-red-500 text-white font-bold py-2 px-4 rounded-3xl hover:bg-black focus:outline-none"
        onClick={ onSignOut }
      > Cerrar Sesión </button>
    </div>
  )
}
