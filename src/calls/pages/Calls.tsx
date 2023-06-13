import { useEffect } from 'react'
import { useCallStore } from '../../hooks'
import { CrudTable } from '../../private'
import { Loading } from '../../pages'
import { ICall } from '../../interfaces'

const header = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Nombre del afectado',
    key: 'affectedName',
  },
  {
    title: 'Descripción',
    key: 'description',
  },
  {
    title: 'Direccion de la llamada',
    key: 'callAddress',
  },
  {
    title: 'Telefono del afectado',
    key: 'affectedPhone'
  },
  {
    title: 'Estación',
    key: 'station'
  },
  {
    title: 'Bomberos',
    key: 'users'
  },
]

const formStructure = [
  {
    type: 'text',
    name: 'affectedName',
    label: 'Nombre del afectado',
    placeholder: 'Nombre del afectado',
    required: true,
  },
  {
    type: 'text',
    name: 'description',
    label: 'Descripción de la llamada',
    placeholder: 'Descripción de la llamada',
    required: true,
  },
  {
    type: 'text',
    name: 'callAddress',
    label: 'Direccion de la llamada',
    placeholder: 'Direccion de la llamada',
    required: true,
  },
  {
    type: 'number',
    name: 'affectedPhone',
    label: 'Telefono del afectado',
    placeholder: 'Telefono del afectado',
    required: true,
  },
  {
    type: 'text',
    name: 'station',
    label: 'Estación',
    placeholder: 'Estación',
    required: true,
  },
  {
    type: 'text',
    name: 'users',
    label: 'Bomberos',
    placeholder: 'Bomberos',
    required: true,
  }
]

const newInitialForm = {
  affectedName: '',
  description: '',
  callAddress: '',
  affectedPhone: 0,
  station: '',
  users: ''
}

export const Calls = () => {

  const { calls, startLoadingCalls, isLoadingCalls, startSavingCall, startDeletingCall, onActiveCall, activeCall } = useCallStore()

  useEffect( () => {
    startLoadingCalls()
  }, [] )

  const onSelect = ( call : IDataTable, action : string ) => {
    if ( call )
      onActiveCall( call as unknown as ICall )
    if ( action === 'delete' )
      startDeletingCall( call as unknown as ICall )
  }

  const setActiveCatgeroyNull = () => {
    onActiveCall( null )
  }

  return (
    <div className="w-full h-screen flex flex-col items-center gap-4 px-4 py-8" >
      <h1 className="text-5xl font-bold mt-20 text-white" > Registro de llamadas </h1>
      {
        ( isLoadingCalls )
          ? <Loading />
          : <CrudTable
              data={ calls as unknown as any }
              header={ header } onSelect={ onSelect }
              newInitialForm={ newInitialForm }
              activeItem={ activeCall as unknown as IDataTable }
              formStructure={ formStructure }
              startSavingItem={ startSavingCall as unknown as ( item : IDataTable ) => void }
              setActiveItemNull={ setActiveCatgeroyNull }
            />
      }
    </div>
  )
}
