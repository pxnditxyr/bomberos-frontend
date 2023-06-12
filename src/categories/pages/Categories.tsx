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

export const Categories = () => {

  const { categories, startLoadingCategorys, isLoadingCategories, startSavingCategory, startDeletingCategory, onActiveCategory } = useCategoryStore()

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
    <div
      className="w-full h-full flex flex-col justify-center items-center gap-4 px-4 py-8"
    >
      <h1>Categories</h1>
      {
        ( isLoadingCategories )
          ? <Loading />
          : <CrudTable title="Categorías" data={ categories as unknown as any } header={ header } onSelect={ onSelect } />
      }
    </div>
  )
}
