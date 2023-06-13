import { useEffect } from 'react'
import { useStationStore } from '../../hooks'
import { CrudTable } from '../../private'
import { Loading } from '../../pages'
import { IStation } from '../../interfaces'


const header = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Nombre',
    key: 'name',
  },
  {
    title: 'Dirección',
    key: 'address',
  },
  {
    title: 'Telefono',
    key: 'phone',
  },
  {
    title: 'Correo',
    key: 'email'
  },
]

const formStructure = [
  {
    type: 'text',
    name: 'name',
    label: 'Nombre',
    placeholder: 'Nombre de la estación',
    required: true,
  },
  {
    type: 'text',
    name: 'address',
    label: 'Dirección',
    placeholder: 'Dirección de la estación',
    required: true,
  },
  {
    type: 'number',
    name: 'phone',
    label: 'Telefono',
    placeholder: 'Telefono de la estación',
    required: true,
  },
  {
    type: 'text',
    name: 'email',
    label: 'Correo',
    placeholder: 'Correo de la estación',
    required: true,
  },
]

const newInitialForm = {
  name: '',
  address: '',
  phone: '',
  email: '',
}

export const Stations = () => {

  const { stations, startLoadingStations, isLoadingStations, startSavingStation, startDeletingStation, onActiveStation, activeStation } = useStationStore()

  useEffect( () => {
    startLoadingStations()
  }, [] )

  const onSelect = ( station : IDataTable, action : string ) => {
    if ( station )
      onActiveStation( station as unknown as IStation )
    if ( action === 'delete' )
      startDeletingStation( station as unknown as IStation )
  }

  const setActiveCatgeroyNull = () => {
    onActiveStation( null )
  }

  return (
    <div className="w-full h-screen flex flex-col items-center gap-4 px-4 py-8" >
      <h1 className="text-5xl font-bold mt-8 text-white" > Estaciones </h1>
      {
        ( isLoadingStations )
          ? <Loading />
          : <CrudTable
              data={ stations as unknown as any }
              header={ header } onSelect={ onSelect }
              newInitialForm={ newInitialForm }
              activeItem={ activeStation as unknown as IDataTable }
              formStructure={ formStructure }
              startSavingItem={ startSavingStation as unknown as ( item : IDataTable ) => void }
              setActiveItemNull={ setActiveCatgeroyNull }
            />
      }
    </div>
  )
}
