import Swal from 'sweetalert2';
import { bomberosApi } from '../api';
import { ICall } from '../interfaces';
import { useAppDispatch, useAppSelector } from '../store';
import { onAddNewCall, onDeleteCall, onSetActiveCall, onUpdatedCall, onLoadingCalls } from '../store/calls';

export const useCallStore = () => {

  const { calls, activeCall, isLoadingCalls } = useAppSelector( state => state.call );

  const dispatch = useAppDispatch();

  const onActiveCall = ( call : ICall | null ) => {
    dispatch( onSetActiveCall( call ) );
  };

  const startSavingCall = async ( call : ICall ) => {
    try {
      let usersFromForm : string[]
      if ( typeof call.users === 'string')
        usersFromForm = call.users.split( ',' )
      else
        usersFromForm = call.users
      const newCall = {
        ...call,
        affectedPhone: Number( call.affectedPhone ),
        users: usersFromForm,
      }
      if ( call.id ) {
        const { id, ...updateCall } = newCall;
        const { data } = await bomberosApi.patch( `/call-registers/${ call.id }`, updateCall );
        dispatch( onUpdatedCall({
          ...newCall,
          users: data.users.join( ', ' )
        }) );
        return;
      }

      const { data } = await bomberosApi.post( '/call-registers', newCall )
      console.log( data )
      const { id, affectedName, affectedPhone, callAddress, description, station, users } = data
      dispatch( onAddNewCall({
        id,
        affectedName,
        affectedPhone,
        callAddress,
        description,
        station: station.name,
        users: users.join( ', ' )
      }) )
    } catch ( error : any ) {
      console.log( error )
      Swal.fire( 'Error', String( error.response.data.message ), 'error' );
    }
    
  };

  const startDeletingCall = async ( call : ICall ) => {
    try {
      await bomberosApi.delete( `/call-registers/${ call.id }` );
      dispatch( onDeleteCall( call ) );
    } catch ( error : any ) {
      Swal.fire( 'Error', error.response.data.message, 'error' );
    }
  };

  const startLoadingCalls = async () => {
    try {
      const { data } = await bomberosApi.get( '/call-registers' );
      const calls = data
      const callsWithUsers = calls.map( ( call : ICall ) => {
        if ( typeof call.users === 'string' ) 
          return call
        return {
          ...call,
          users: call.users.join( ', ' )
        }
      })
      dispatch( onLoadingCalls( callsWithUsers ) );
    } catch ( error : any ) {
      Swal.fire( 'Error', error.response.data.message, 'error' );
    }
  }

  return {
    calls,
    activeCall,
    onActiveCall,
    startSavingCall,
    startDeletingCall,
    startLoadingCalls,
    hasCallSelected: !!activeCall,
    isLoadingCalls
  }
};
