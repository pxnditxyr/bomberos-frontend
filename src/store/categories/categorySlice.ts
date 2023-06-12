import { createSlice } from '@reduxjs/toolkit';
import { ICategory } from '../../interfaces';

interface IInitialState {
  categories: ICategory[]
  activeCategory: ICategory | null
  isLoadingCategories: boolean
}

const initialState : IInitialState = {
  activeCategory: null,
  categories: [],
  isLoadingCategories: true,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    onAddNewCategory: ( state, { payload } ) => {
      state.categories.push( payload );
      state.activeCategory = null;
    },
    onSetActiveCategory: ( state, { payload } ) => {
      state.activeCategory = payload;
    },
    onUpdatedCategory: ( state, { payload } ) => {
      state.categories = state.categories.map( ( category ) => category.id === payload.id ? payload : category );
      state.activeCategory = null;
    },
    onDeleteCategory: ( state, { payload } ) => {
      state.categories = state.categories.filter( ( category ) => category.id !== payload.id );
      state.activeCategory = null;
    },
    onLoadingCategorys: ( state, { payload } ) => {
      state.isLoadingCategories = false;
      payload.forEach( ( category : ICategory ) => {
        const exists = state.categories.some( ( dbCategory ) => dbCategory.id === category.id );
        if ( !exists )
          state.categories.push( category );
      });
    },
    onSignOutCategorys: ( state ) => {
      state.activeCategory = null;
      state.categories = [];
      state.isLoadingCategories = true;
    }
  }
});

export const {
  onAddNewCategory,
  onDeleteCategory,
  onLoadingCategorys,
  onSetActiveCategory,
  onSignOutCategorys,
  onUpdatedCategory,
} = categorySlice.actions;
