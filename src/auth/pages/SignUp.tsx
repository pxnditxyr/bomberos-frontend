import { ChangeEvent, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { AuthLayout } from '../layout'
import { useAuthStore, useForm } from '../../hooks'
import Swal from 'sweetalert2'

/*const formularioVacio = {
  email: 'example@example.com',
  surname: 'example1',
  name: 'example',
  password: '1234',
  password2: '1234',
}*/


const formularioVacio = {
  email: '',
  password: '',
  password2: '',
  fechaNacimiento: '',
  nombre: '',
  apellido: '',
  ci: 12345678,
  telefono: 77202020,
  estadoCivil: 'soltero',
  genero: 'masculino'
}

export const SignUp = () => {

  const { startSignUp, errorMessage } = useAuthStore();

  const {
    email, password, password2, fechaNacimiento, nombre, apellido, ci, telefono, estadoCivil, genero,
    onInputChange, form, onSelectChange
  } = useForm( formularioVacio )

  const onSubmit = ( event : ChangeEvent<HTMLFormElement> ) => {
    event.preventDefault()
    console.log( form )
    if ( password !== password2 ) {
      Swal.fire( 'Error al registrarse', 'Las contraseñas no coinciden', 'error' );
      return;
    }
    startSignUp({ email, password, fechaNacimiento, nombre, apellido, ci, telefono, estadoCivil, genero })
  }

  useEffect( () => {
    if ( errorMessage !== undefined ) {
      if ( typeof errorMessage === 'string' ) {
        Swal.fire( 'Error al registrarse', errorMessage, 'error' );
      } else {
        Swal.fire( 'Error al registrarse', errorMessage.join( ',\n' ), 'error' );
      }
    }
  }, [ errorMessage ] );

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
            name="nombre"
            type="text"
            placeholder="Nombres"
            value={ nombre }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            name="apellido"
            type="text"
            placeholder="Apellidos"
            value={ apellido }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            name="ci"
            type="number"
            placeholder="Carnet de Identidad"
            value={ ci }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            name="telefono"
            type="number"
            placeholder="Telefono"
            value={ telefono }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            name="fechaNacimiento"
            type="date"
            placeholder="Fecha de Nacimiento"
            value={ fechaNacimiento }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <select
            name="estadoCivil"
            value={ estadoCivil }
            onChange={ onSelectChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="soltero" defaultChecked>Soltero</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
            <option value="viudo">Viudo</option>
          </select>
          <select
            name="genero"
            value={ genero }
            onChange={ onSelectChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="masculino" defaultChecked>Masculino</option> 
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
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
