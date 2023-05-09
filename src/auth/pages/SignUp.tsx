import { ChangeEvent } from 'react'

import { Link } from 'react-router-dom'
import { AuthLayout } from '../layout'
import { useForm } from '../../hooks'

/*const formularioVacio = {
  email: 'example@example.com',
  surname: 'example1',
  name: 'example',
  password: '1234',
  password2: '1234',
}*/

const formularioVacio = {
  email: '',
  surname: '',
  name: '',
  password: '',
  password2: '',
}

export const SignUp = () => {
  
  const {
    email, surname, name, password, password2,
    onInputChange, onResetForm, form
  } = useForm( formularioVacio )

  const onSubmit = ( event : ChangeEvent<HTMLFormElement> ) => {
    event.preventDefault()
    // onResetForm()
    console.log( form )
  }

  return (
    <AuthLayout title="Registrarse">
      <div
        className="w-1/4 h-full flex flex-col justify-center items-center gap-4 px-4 py-8"
      >
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
            name="surname"
            type="text"
            placeholder="Apellidos"
            value={ surname }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            name="name"
            type="text"
            placeholder="Nombres"
            value={ name }
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
          <input
            name="password2"
            type="password"
            placeholder="Repetir Contraseña"
            value={ password2 }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            className="w-full bg-red-500 text-white font-bold py-2 rounded-3xl hover:bg-black focus:outline-none"
          > Registrarse </button>
        </form>
        <Link
          to="../signin"
          className="text-red-500 font-bold"
        > Ya tienes cuenta? Inicia Sesión </Link>
      </div>
    </AuthLayout>
  )
}
