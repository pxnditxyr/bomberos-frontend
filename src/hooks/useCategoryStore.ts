import Swal from 'sweetalert2';
import { bomberosApi } from '../api';
import { ICategory } from '../interfaces';
import { useAppDispatch, useAppSelector } from '../store';
import { onAddNewCategory, onDeleteCategory, onSetActiveCategory, onUpdatedCategory, onLoadingCategorys } from '../store/categories';

export const useCategoryStore = () => {

  const { categories, activeCategory, isLoadingCategories } = useAppSelector( state => state.category );

  const dispatch = useAppDispatch();

  const onActiveCategory = ( category : ICategory ) => {
    dispatch( onSetActiveCategory( category ) );
  };

  const startSavingCategory = async ( category : ICategory ) => {

    try {
      if ( category.id ) {
        await bomberosApi.patch( `/categories/${ category.id }`, category );
        dispatch( onUpdatedCategory({ ...category }) );
        return;
      }
      const { data } = await bomberosApi.post( '/categories', category )
      dispatch( onAddNewCategory({ ...data.category, }) )
    } catch ( error : any ) {
      Swal.fire( 'Error', error.response.data.message, 'error' );
    }
    
  };

  const startDeletingCategory = async ( category : ICategory ) => {
    try {
      await bomberosApi.delete( `/categories/${ category.id }` );
      dispatch( onDeleteCategory( category ) );
    } catch ( error : any ) {
      Swal.fire( 'Error', error.response.data.message, 'error' );
    }
  };

  const startLoadingCategorys = async () => {
    try {

      const { data } = await bomberosApi.get( '/categories' );
      const categories = data
      dispatch( onLoadingCategorys( categories ) );
    } catch ( error : any ) {
      Swal.fire( 'Error', error.response.data.message, 'error' );
    }
  }

  return {
    categories,
    activeCategory,
    onActiveCategory,
    startSavingCategory,
    startDeletingCategory,
    startLoadingCategorys,
    hasCategorySelected: !!activeCategory,
    isLoadingCategories
  }
};
