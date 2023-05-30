import Swal from 'sweetalert2';
import { bomberosApi } from '../api';
import { formatErrors } from '../helpers';
import { useAppDispatch, useAppSelector } from '../store';
import { clearErrorMessage, onChecking, onSignIn, onSignOut } from '../store/auth';

const exampleUsers = [
  {
    id: 1,
    email: 'jhonnael.ivan20@gmail.com',
    password: '123456',
    fechaNacimiento: '04/10/2002',
    nombre: 'Jhonnael',
    apellido: 'Quispe Choque',
    ci: 5700519,
    telefono: 72919405,
    estadoCivil: 'Soltero',
    genero: 'Masculino'
  },
  {
    id: 2,
    email: 'ejemplo@ejemplo.com',
    password: 'ejemplo',
    fechaNacimiento: '01/01/2000',
    nombre: 'Ejemplo',
    apellido: 'Ejemplo Ap',
    ci: 1234567,
    telefono: 72000000,
    estadoCivil: 'Soltero',
    genero: 'Masculino'
  },
  {
    id: 3,
    email: 'example@example.com',
    password: 'example',
    fechaNacimiento: '01/01/2000',
    nombre: 'Example',
    apellido: 'Example Ap',
    ci: 1234567,
    telefono: 72000000,
    estadoCivil: 'Soltero',
    genero: 'Masculino'
  }
]

export const useAuthStore = () => {

  const { status, user, errorMessage } = useAppSelector( state => state.auth );
  const dispatch = useAppDispatch();

  const startSignIn = async ( { email, password } : { email: string, password: string } ) => {

    dispatch( onChecking() )

    try {
      const { data } = await bomberosApi.post( '/auth/signin', { email, password } );
      localStorage.setItem( 'token', data.token );
      localStorage.setItem( 'token-init-date', new Date().getTime().toString() );
      const { id, fechaNacimiento, nombre, apellido, ci, telefono, estadoCivil, genero } = data;
      dispatch( onSignIn({
        id,
        email,
        fechaNacimiento,
        nombre,
        apellido,
        ci,
        telefono,
        estadoCivil,
        genero
      }) );
    } catch ( error : any ) {
      dispatch( onSignOut( error.response.data.msg || 'Unknown Error' ) );
      setTimeout( () => {
        dispatch( clearErrorMessage() );
      }, 1 );
    }
  }

  const startSignInOff = async ( { email, password } : { email: string, password: string } ) => {

    

    dispatch( onChecking() )

    try {

      const data = exampleUsers.find( user => user.email === email && user.password === password );
      console.log( data )
      if ( !data ) {
        Swal.fire( 'Error', 'Usuario o contraseña incorrectos', 'error' );
        dispatch( onSignOut( 'Usuario o contraseña incorrectos' ) );
        setTimeout( () => {
          dispatch( clearErrorMessage() );
        }, 1 );
        return;
      }
      localStorage.setItem( 'token', email );
      const { id, fechaNacimiento, nombre, apellido, ci, telefono, estadoCivil, genero } = data;
      dispatch( onSignIn({
        id,
        email,
        fechaNacimiento,
        nombre,
        apellido,
        ci,
        telefono,
        estadoCivil,
        genero
      }) );
    } catch ( error : any ) {
      dispatch( onSignOut( error.response.data.msg || 'Unknown Error' ) );
      setTimeout( () => {
        dispatch( clearErrorMessage() );
      }, 1 );
    }
  }

  const startSignUp = async ( { email, password, fechaNacimiento, nombre, apellido, ci, telefono, estadoCivil, genero } : { email: string, password: string, fechaNacimiento: string, nombre: string, apellido: string, ci: number, telefono: number, estadoCivil: string, genero: string } ) => {
    dispatch( onChecking() );
    try {
      const { data } = await bomberosApi.post( '/auth/signup', { email, password, fechaNacimiento, nombre, apellido, ci, telefono, estadoCivil, genero } );
      localStorage.setItem( 'token', data.token );
      localStorage.setItem( 'token-init-date', new Date().getTime().toString() );
      dispatch( onSignIn({
        id: data.id,
        email,
        fechaNacimiento,
        nombre,
        apellido,
        ci,
        telefono,
        estadoCivil,
        genero
      }) );
    } catch ( error : any ) {
      dispatch( onSignOut( formatErrors( error.response.data ) ) );
      setTimeout( () => {
        dispatch( clearErrorMessage() );
      }, 1 );
      
    }
  };

  const checkAuthTokenOff = () => {
    const token = localStorage.getItem( 'token' );
    if ( !token ) {
      dispatch( onSignOut( undefined ) );
      return;
    }
    try {
      const data = exampleUsers.find( user => user.email === token );
      if ( !data ) {
        dispatch( onSignOut( undefined ) );
        return;
      }
      const { id, fechaNacimiento, nombre, apellido, ci, telefono, estadoCivil, genero } = data;
      dispatch( onSignIn({
        id,
        email: token,
        fechaNacimiento,
        nombre,
        apellido,
        ci,
        telefono,
        estadoCivil,
        genero
      }) );
    } catch ( error : any ) {
      dispatch( onSignOut( formatErrors( error.response.data ) ) );
    }
    
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem( 'token' );
    if ( !token ) {
      dispatch( onSignOut( undefined ) );
      return;
    }
    try {
      const { data } = await bomberosApi.get( '/auth/renew-token' );
      localStorage.setItem( 'token', data.token );
      localStorage.setItem( 'token-init-date', new Date().getTime().toString() );
      dispatch( onSignIn({
        uid: data.uid,
        lastName: data.lastName,
        name: data.name,
        username: data.username,
        email: data.email
      }) );

    } catch ( error : any ) {
      localStorage.removeItem( 'token' );
      localStorage.removeItem( 'token-init-date' );
      dispatch( onSignOut( formatErrors( error.response.data ) ) );
    }
  }

  const startSignOut = () => {
    localStorage.removeItem( 'token' );
    localStorage.removeItem( 'token-init-date' );
    dispatch( onSignOut( undefined ) );
  }

  return {
    checkAuthToken,
    checkAuthTokenOff,
    errorMessage,
    startSignIn,
    startSignInOff,
    startSignOut,
    startSignUp,
    status,
    user,
  }
};
