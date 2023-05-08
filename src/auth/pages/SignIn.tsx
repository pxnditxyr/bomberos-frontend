import { Link } from 'react-router-dom'
import { AuthLayout } from '../layout'
import { useForm } from '../../hooks'
import { ChangeEvent } from 'react'

const formularioVacio = {
  email: '',
  password: '',
}

export const SignIn = () => {

  const {
    email, password,
    onInputChange, onResetForm, form
  } = useForm( formularioVacio )

  const onSubmit = ( event : ChangeEvent<HTMLFormElement> ) => {
    event.preventDefault()
    console.log( form )
    onResetForm()
  }

  return (
    <AuthLayout title="Iniciar Sesión">
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
            name="password"
            type="password"
            placeholder="Contraseña"
            value={ password }
            onChange={ onInputChange }
          />
          <button> Iniciar Sesión </button>
        </form>
        <Link to="../signup"> No tienes cuenta? Registrate </Link>
      </div>
    </AuthLayout>
  )
}
