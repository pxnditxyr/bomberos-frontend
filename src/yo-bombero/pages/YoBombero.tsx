import { useAuthStore } from "../../hooks"

export const YoBombero = () => {

  const { startSignOut, user } = useAuthStore();
  console.log( user )

  const onSignOut = () => {
    startSignOut();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Bienvenido { `${ user.lastName } ${ user.name }` }</h1>
      <h2 className="text-2xl font-bold">Tu email es { user.email }</h2>
      <h2 className="text-2xl font-bold">Tu fecha de nacimiento es { user.birthDate }</h2>
      <h2 className="text-2xl font-bold">Tu ci es { user.dni } </h2>
      <h2 className="text-2xl font-bold">Tu telefono es { user.phone }</h2>
      <h2 className="text-2xl font-bold">Tu estado civil es { user.civilStatus }</h2>
      <h2 className="text-2xl font-bold">Tu genero es { user.gender }</h2>

      <button
        className="bg-red-500 text-white font-bold py-2 px-4 rounded-3xl hover:bg-black focus:outline-none"
        onClick={ onSignOut }
      > Cerrar Sesión </button>
    </div>
  )
}
