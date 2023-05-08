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
    onResetForm()
    console.log( form )
  }

  return (
    <AuthLayout title="Registrarse">
      <div>
        <form
          onSubmit={ onSubmit }
        >
          <input
            name="email"
            type="email"
            placeholder="Correo"
            value={ email }
            onChange={ onInputChange }
          />
          <input
            name="surname"
            type="text"
            placeholder="Apellidos"
            value={ surname }
            onChange={ onInputChange }
          />
          <input
            name="name"
            type="text"
            placeholder="Nombres"
            value={ name }
            onChange={ onInputChange }
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={ password }
            onChange={ onInputChange }
          />
          <input
            name="password2"
            type="password"
            placeholder="Repetir Contraseña"
            value={ password2 }
            onChange={ onInputChange }
          />
          <button> Registrarse </button>
        </form>
        <Link to="../signin"> Ya tienes cuenta? Inicia Sesión </Link>
      </div>
    </AuthLayout>
  )
}
