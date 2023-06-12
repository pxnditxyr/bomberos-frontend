import { useEffect, useState } from 'react';
import { Modal } from '..';
import { useForm, useUiStore } from '../../hooks';
import { capitalizeString } from '../../helpers';

interface IHeader {
  title: string;
  key: string;
}

interface IProps {
  header: IHeader[]
  data: IDataTable[]
  onSelect: ( item : IDataTable, action : string ) => void
  newInitialForm: IDataTable
  formStructure: IFormStructure[]
  activeItem: IDataTable | null
  startSavingItem: ( item : IDataTable ) => void
}

export const CrudTable = ( { data, header, onSelect, newInitialForm, formStructure, activeItem, startSavingItem } : IProps ) => {
  const { openDateModal, closeDateModal } = useUiStore()
  const { form, onInputChange, setNewFormState } = useForm({ ...newInitialForm })
  const [ isDeleting, setIsDeleting ] = useState( false )

  const onUpdateClick = ( itemId : string ) => {
    const selectedItem = data.find( item => item.id === itemId )
    if ( !selectedItem ) return
    const validValues = Object.keys( selectedItem ).reduce( ( acc, key ) => {
      const formStructureNames = formStructure.map( item => item.name )
      if ( formStructureNames.includes( key ) )
        acc[ key ] = selectedItem[ key ]
      return acc
    }, {} as IDataTable )
    setNewFormState( { ...validValues } )
    onSelect( { ...form, id: itemId }, 'update' )
  }

  const onDeleteClick = ( itemId : string ) => {
    setIsDeleting( true )
    const selectedItem = data.find( item => item.id === itemId )
    onSelect( { ...selectedItem }, 'delete' )
  }

  const onAddClick = () => {
    setNewFormState( { ...newInitialForm } )
    onSelect( { ...newInitialForm }, 'add' )
  }

  const onSubmit = ( event : React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault()
    startSavingItem( { ...activeItem, ...form } )
    closeDateModal()
  }

  useEffect( () => {
    if ( activeItem && !isDeleting )
      openDateModal()
    setIsDeleting( false )
  }, [ activeItem ] )

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 px-4 py-8" >
      <article className="relative overflow-x-auto shadow-md sm:rounded-lg" >
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-700 text-gray-400 p-12 text-white">
            <tr>
              {
                header.map( ( { title, key } ) => (
                  <th className="p-4 text-base font-semibold" key={ key }>{ title }</th>
                ) )
              }
              <th className="p-4 text-base font-semibold"> Acciones </th>
            </tr>
          </thead>
          <tbody>
            {
              data.map( ( item, index ) => (
                <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600" key={ index } >
                  <td className="px-6 py-4 font-semibold text-white">{ index + 1 }</td>
                  {
                    header.map( ( { key } ) => (
                      ( key!=='id' ) && <td className="px-6 py-4 font-semibold text-white" key={ key }>{ item[ key ] }</td>
                    ) )
                  }
                  <td className="px-6 py-4 flex justify-center gap-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={ () => onUpdateClick( String( item.id ) || '0' ) }
                    >
                      Editar
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={ () => onDeleteClick( String( item.id ) || '0' ) }
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ) )
            }
          </tbody>
        </table>
      </article>
      <div className="absolute bottom-8 right-12 p-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold p-4 rounded-full"
          onClick={ onAddClick }
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M12 6v6m0 0v6m0-6h6m-6 0H6" ></path>
          </svg>
        </button>
      </div>
      {

        <Modal title="Agregar">
            <form
                className="space-y-6"
                onSubmit={ onSubmit }
              >
                {
                  Object.keys( form ).map( ( key, index ) => (
                    <div key={ index }>
                      <label htmlFor={ key } className="block mb-2 text-sm font-medium text-white">{ capitalizeString( key ) }</label>
                      <input
                        type="text"
                        name={ key }
                        id={ key }
                        className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                        placeholder={ key }
                        value={ form[ key ] || '' }
                        onChange={ onInputChange }
                        required
                      />
                    </div>
                  ))
                }
                <button className="w-full text-white focus:ring-4 focus:outline-none ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"> Enviar </button>
              </form>
        </Modal>
      }
    </div>
  )
}
