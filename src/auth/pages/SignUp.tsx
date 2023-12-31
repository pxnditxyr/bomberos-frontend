import { ChangeEvent, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { AuthLayout } from '../layout'
import { useAuthStore, useForm } from '../../hooks'
import Swal from 'sweetalert2'

const formularioVacio = {
  name: '',
  lastName: '',
  phone: '',
  dni: '',
  civilStatus: 'divorciado',
  gender: 'femenino',
  birthDate: '1999-12-12',
  email: '',
  password: '',
  password2: '',
}

export const SignUp = () => {

  const { startSignUp, errorMessage } = useAuthStore();

  const {
    name, lastName, phone, dni,
    civilStatus, gender, birthDate,
    email, password, password2,
    onInputChange, form, onSelectChange
  } = useForm( formularioVacio )

  const onSubmit = ( event : ChangeEvent<HTMLFormElement> ) => {
    event.preventDefault()
    console.log( form )
    if ( password !== password2 ) {
      Swal.fire( 'Error al registrarse', 'Las contraseñas no coinciden', 'error' );
      return;
    }
    startSignUp({
      name,
      lastName,
      email,
      password,
      phone: Number( phone ),
      dni: Number( dni ),
      civilStatus,
      gender,
      birthDate
    })
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
    <AuthLayout title="Registrarse" hegiht>
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
            name="name"
            type="text"
            placeholder="Nombres"
            value={ name }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            name="lastName"
            type="text"
            placeholder="Apellidos"
            value={ lastName }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            name="dni"
            type="number"
            placeholder="Carnet de Identidad"
            value={ dni }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            name="phone"
            type="number"
            placeholder="Telefono"
            value={ phone }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            name="birthDate"
            type="date"
            placeholder="Fecha de Nacimiento"
            value={ birthDate }
            onChange={ onInputChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <select
            name="civilStatus"
            value={ civilStatus }
            onChange={ onSelectChange }
            className="w-full px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="soltero" defaultChecked>Soltero</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
            <option value="viudo">Viudo</option>
          </select>
          <select
            name="gender"
            value={ gender }
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
