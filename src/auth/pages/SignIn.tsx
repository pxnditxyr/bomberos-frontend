import { Link } from 'react-router-dom'
import { AuthLayout } from '../layout'
import { useAuthStore, useForm } from '../../hooks'
import { ChangeEvent, useEffect } from 'react'

import Swal from 'sweetalert2';

const formularioVacio = {
  email: 'moyaputo@gmail.com',
  password: '1234567'
}

export const SignIn = () => {

  const { startSignIn, errorMessage } = useAuthStore();

  const {
    email, password,
    onInputChange, form
  } = useForm( formularioVacio )

  const onSubmit = ( event : ChangeEvent<HTMLFormElement> ) => {
    event.preventDefault()
    startSignIn({ email, password });
    console.log( form )
  }

  useEffect( () => {
    if ( errorMessage !== undefined ) {
      if ( typeof errorMessage === 'string' ) {
        Swal.fire( 'Error al Iniciar Sesión', errorMessage, 'error' );
      } else {
        Swal.fire( 'Error al Iniciar Sesión', errorMessage.join( ',\n' ), 'error' );
      }
    }
  }, [ errorMessage ] );

  return (
    <AuthLayout title="Iniciar Sesión">
      <div className="w-1/4 h-full flex flex-col justify-center items-center gap-4 px-4 py-8">
        <form
          onSubmit={ onSubmit }
          className="w-full flex flex-col justify-center items-center gap-8 px-4 py-8"
        >
          <input
            name="email"
            type="email"
            placeholder="Correo"
            value={ email }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={ password }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            className="w-full bg-red-500 text-white font-bold py-2 rounded-3xl hover:bg-black focus:outline-none"
          > Iniciar Sesión </button>
        </form>
        <Link to="../signup"
          className="text-red-500 font-bold"
        > No tienes cuenta? Registrate </Link>
      </div>
    </AuthLayout>
  )
}
