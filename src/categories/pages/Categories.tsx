import { useEffect } from 'react'
import { useCategoryStore } from '../../hooks'
import { CrudTable } from '../../private'
import { Loading } from '../../pages'
import { ICategory } from '../../interfaces'


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
    title: 'Descripción',
    key: 'description',
  },
  {
    title: 'Usuario',
    key: 'user',
  },
]
// interface IFormStructure {
//   type: string
//   label: string
//   name: string
//   value: string
//   placeholder: string
//   required?: boolean
//   isMulti?: boolean
// }

const formStructure = [
  {
    type: 'text',
    name: 'name',
    label: 'Nombre',
    placeholder: 'Nombre de la categoría',
    required: true,
  },
  {
    type: 'text',
    name: 'description',
    label: 'Descripción',
    placeholder: 'Descripción de la categoría',
    required: true,
  },
]

const newInitialForm = {
  name: '',
  description: '',
}

export const Categories = () => {

  const { categories, startLoadingCategorys, isLoadingCategories, startSavingCategory, startDeletingCategory, onActiveCategory, activeCategory } = useCategoryStore()

  useEffect( () => {
    startLoadingCategorys()
  }, [] )

  const onSelect = ( category : IDataTable, action : string ) => {
    if ( category )
      onActiveCategory( category as unknown as ICategory )
    if ( action === 'delete' )
      startDeletingCategory( category as unknown as ICategory )
  }

  return (
    <div className="w-full h-screen flex flex-col items-center gap-4 px-4 py-8" >
      <h1 className="text-5xl font-bold mt-8 text-teal-300" >Categorías</h1>
      {
        ( isLoadingCategories )
          ? <Loading />
          : <CrudTable
              data={ categories as unknown as any }
              header={ header } onSelect={ onSelect }
              newInitialForm={ newInitialForm }
              activeItem={ activeCategory as unknown as IDataTable }
              formStructure={ formStructure }
              startSavingItem={ startSavingCategory as unknown as ( item : IDataTable ) => void }
            />
      }
    </div>
  )
}
