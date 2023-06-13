import Swal from 'sweetalert2';
import { bomberosApi } from '../api';
import { IStation } from '../interfaces';
import { useAppDispatch, useAppSelector } from '../store';
import { onAddNewStation, onDeleteStation, onSetActiveStation, onUpdatedStation, onLoadingStations } from '../store/stations'

export const useStationStore = () => {

  const { stations, activeStation, isLoadingStations } = useAppSelector( state => state.station );

  const dispatch = useAppDispatch();

  const onActiveStation = ( station : IStation ) => {
    dispatch( onSetActiveStation( station ) );
  };

  const startSavingStation = async ( station : IStation ) => {
    try {
      const newStation = {
        ...station,
        phone: Number( station.phone ),
      }
      if ( station.id ) {
        const { id, ...updateStation } = newStation;
        const { data } = await bomberosApi.patch( `/stations/${ station.id }`, updateStation );
        dispatch( onUpdatedStation({ ...newStation, }) );
        return;
      }

      const { data } = await bomberosApi.post( '/stations', newStation )
      const { id, name, address, phone, email } = data
      dispatch( onAddNewStation({
        id,
        name,
        address,
        phone,
        email,
      }) )
    } catch ( error : any ) {
      console.log( error )
      Swal.fire( 'Error', String( error.response.data.message ), 'error' );
    }
    
  };

  const startDeletingStation = async ( station : IStation ) => {
    try {
      await bomberosApi.delete( `/stations/${ station.id }` );
      dispatch( onDeleteStation( station ) );
    } catch ( error : any ) {
      Swal.fire( 'Error', error.response.data.message, 'error' );
    }
  };

  const startLoadingStations = async () => {
    try {
      const { data } = await bomberosApi.get( '/stations' );
      const stations = data
      dispatch( onLoadingStations( stations ) );
    } catch ( error : any ) {
      Swal.fire( 'Error', error.response.data.message, 'error' );
    }
  }

  return {
    stations,
    activeStation,
    onActiveStation,
    startSavingStation,
    startDeletingStation,
    startLoadingStations,
    hasStationSelected: !!activeStation,
    isLoadingStations
  }
};
