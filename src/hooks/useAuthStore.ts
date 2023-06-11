import Swal from 'sweetalert2';
import { bomberosApi } from '../api';
import { formatErrors } from '../helpers';
import { IUser } from '../interfaces';
import { useAppDispatch, useAppSelector } from '../store';
import { clearErrorMessage, onChecking, onSignIn, onSignOut } from '../store/auth';

export const useAuthStore = () => {

  const { status, user, errorMessage } = useAppSelector( state => state.auth );
  const dispatch = useAppDispatch();

  const startSignIn = async ( { email, password } : { email: string, password: string } ) => {

    dispatch( onChecking() )

    try {
      const { data } = await bomberosApi.post( '/auth/signin', { email, password } );
      localStorage.setItem( 'token', data.token );
      localStorage.setItem( 'token-init-date', new Date().getTime().toString() );
      dispatch( onSignIn({
        id: data.id,
        lastName: data.lastName,
        name: data.name,
        phone: data.phone,
        dni: data.dni,
        civilStatus: data.civilStatus,
        gender: data.gender,
        birthDate: data.birthDate,
        email: data.email
      }) );
    } catch ( error : any ) {
      dispatch( onSignOut( error.response.data.message ) );
      setTimeout( () => {
        dispatch( clearErrorMessage() );
      }, 1 );
    }
  }

  const startSignUp = async ( { lastName, name, phone, dni, civilStatus, gender, birthDate, email, password } : IUser ) => {
    dispatch( onChecking() );
    try {
      const response = await bomberosApi.post( '/auth/signup', {
        lastName, name, phone, dni,
        civilStatus, gender, birthDate,
        email, password
      } );

      
      const { data } = response

      localStorage.setItem( 'token', data.token );
      localStorage.setItem( 'token-init-date', new Date().getTime().toString() );
      console.log({
        idPrueba: data.id,
        lastNamePrueba: data.lastName,
        namePrueba: data.name,
        phonePrueba: data.phone,
        dniPrueba: data.dni,
        civilStatusPrueba: data.civilStatus,
        genderPrueba: data.gender,
        birthDatePrueba: data.birthDate,
        emailPrueba: data.email
      })
      dispatch( onSignIn({
        id: data.id,
        lastName: data.lastName,
        name: data.name,
        phone: data.phone,
        dni: data.dni,
        civilStatus: data.civilStatus,
        gender: data.gender,
        birthDate: data.birthDate,
        email: data.email
      }) );
    } catch ( error : any ) {
      console.log(error)
      dispatch( onSignOut( error.response.data.message ) );
      setTimeout( () => {
        dispatch( clearErrorMessage() );
      }, 1 );
      
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem( 'token' );
    console.log({ token })
    if ( !token ) {
      dispatch( onSignOut( undefined ) );
      return;
    }
    try {
      const { data } = await bomberosApi.get( '/auth/check-auth-status' );
      localStorage.setItem( 'token', data.token );
      localStorage.setItem( 'token-init-date', new Date().getTime().toString() );
      dispatch( onSignIn({
        id: data.id,
        lastName: data.lastName,
        name: data.name,
        phone: data.phone,
        dni: data.dni,
        civilStatus: data.civilStatus,
        gender: data.gender,
        birthDate: data.birthDate,
        email: data.email
      }) );

    } catch ( error : any ) {
      localStorage.removeItem( 'token' );
      localStorage.removeItem( 'token-init-date' );
      dispatch( onSignOut( undefined ) );
    }
  }

  const startSignOut = () => {
    localStorage.removeItem( 'token' );
    localStorage.removeItem( 'token-init-date' );
    dispatch( onSignOut( undefined ) );
  }

  const startUpdatingProfile = async ( user : IUser ) => {
    try {
      await bomberosApi.put( '/profile/update', user );
      dispatch( onSignIn({ ...user }) );
      return true;
    } catch ( error : any ) {
      Swal.fire( 'Error', formatErrors( error.response.data ), 'error' );
      setTimeout( () => {
        dispatch( clearErrorMessage() );
      }, 1 );
      return false;
    }
  };

  const startDeletingAccount = async () => {
    try {
      await bomberosApi.delete( '/profile/delete' );
      startSignOut();
    } catch ( error : any ) {
      dispatch( onSignOut( formatErrors( error.response.data ) ) );
      setTimeout( () => {
        dispatch( clearErrorMessage() );
      }, 1 );
    }
  };

  return {
    checkAuthToken,
    errorMessage,
    startSignIn,
    startSignOut,
    startSignUp,
    startUpdatingProfile,
    startDeletingAccount,
    status,
    user,
  }
};
