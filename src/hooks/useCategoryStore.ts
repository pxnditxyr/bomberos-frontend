import Swal from 'sweetalert2';
import { bomberosApi } from '../api';
import { ICategory } from '../interfaces';
import { useAppDispatch, useAppSelector } from '../store';
import { onAddNewCategory, onDeleteCategory, onSetActiveCategory, onUpdatedCategory, onLoadingCategories } from '../store/categories';

export const useCategoryStore = () => {

  const { categories, activeCategory, isLoadingCategories } = useAppSelector( state => state.category );

  const dispatch = useAppDispatch();

  const onActiveCategory = ( category : ICategory ) => {
    dispatch( onSetActiveCategory( category ) );
  };

  const startSavingCategory = async ( category : ICategory ) => {

    try {
      if ( category.id ) {
        const { id, ...updateCategory } = category;
        const { data } = await bomberosApi.patch( `/categories/${ category.id }`, updateCategory );
        dispatch( onUpdatedCategory({ ...category, user: data.user.email }) );
        return;
      }
      const { data } = await bomberosApi.post( '/categories', category )
      const { id, name, description, user } = data
      dispatch( onAddNewCategory({ id, name, description, user: user.email }) )
    } catch ( error : any ) {
      Swal.fire( 'Error', String( error.response.data.message ), 'error' );
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

  const startLoadingCategories = async () => {
    try {
      const { data } = await bomberosApi.get( '/categories' );
      const categories = data
      dispatch( onLoadingCategories( categories ) );
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
    startLoadingCategories,
    hasCategorySelected: !!activeCategory,
    isLoadingCategories
  }
};
