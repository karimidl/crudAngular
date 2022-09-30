import { ProductActions, ProductActionsTypes } from './products.actions';

import { Product } from 'src/app/model/product.model';
import { Action } from '@ngrx/store';


export enum ProductsStateEnum {
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial",
  NEW="New",
  UPDATED="Updated"
}

export interface ProductsState{
  products:Product[],
  errorMessage:string,
  dataState:ProductsStateEnum,
  currentProduct:Product|null
}

const initState:ProductsState={
  products:[],
  errorMessage:"",
  dataState:ProductsStateEnum.INITIAL,
  currentProduct:null
}

 export function productsReducer(state:ProductsState=initState,action:Action):ProductsState{

  switch(action.type){
    case ProductActionsTypes.GET_ALL_PRODUCTS:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductActions>action).payload}
    case ProductActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}

    case ProductActionsTypes.GET_SELECTED_PRODUCTS:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductActions>action).payload}
    case ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}

    case ProductActionsTypes.GET_AVAILABLE_PRODUCTS:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductActions>action).payload}
    case ProductActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}

    case ProductActionsTypes.SEARCH_PRODUCTS:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductActions>action).payload}
    case ProductActionsTypes.SEARCH_PRODUCTS_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}

    case ProductActionsTypes.SELECT_PRODUCTS:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionsTypes.SELECT_PRODUCTS_SUCCESS:
      let product:Product=(<ProductActions>action).payload
      let listProducts=[...state.products];
      let data:Product[]=listProducts.map(p=>p.id==product.id?product:p);
      return {...state,dataState:ProductsStateEnum.LOADED,products:data}
    case ProductActionsTypes.SELECT_PRODUCTS_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}

    case ProductActionsTypes.DELETE_PRODUCTS:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionsTypes.DELETE_PRODUCTS_SUCCESS:
        let p:Product=(<ProductActions>action).payload;
        let index=state.products.indexOf(p)
        let productsList=[...state.products];
        productsList.splice(index,1);
      return {...state,dataState:ProductsStateEnum.LOADED,products:productsList}
    case ProductActionsTypes.DELETE_PRODUCTS_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}


    case ProductActionsTypes.NEW_PRODUCTS:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionsTypes.NEW_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductsStateEnum.NEW}
    case ProductActionsTypes.NEW_PRODUCTS_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}

    case ProductActionsTypes.SAVE_PRODUCTS:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionsTypes.SAVE_PRODUCTS_SUCCESS:
      let prods:Product[]=[...state.products]
      prods.push((<ProductActions>action).payload);
      return {...state,dataState:ProductsStateEnum.LOADED,products:prods}
    case ProductActionsTypes.SAVE_PRODUCTS_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}


    case ProductActionsTypes.EDIT_PRODUCTS:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionsTypes.EDIT_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductsStateEnum.LOADED,currentProduct:(<ProductActions>action).payload}
    case ProductActionsTypes.EDIT_PRODUCTS_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}

    case ProductActionsTypes.UPDATE_PRODUCTS:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionsTypes.UPDATE_PRODUCTS_SUCCESS:
      let updatedProduct:Product=(<ProductActions>action).payload;
      let productsLIst:Product[]=state.products.map(p=>(p.id==updatedProduct.id)?updatedProduct:p);
      return {...state,dataState:ProductsStateEnum.UPDATED,products:productsLIst}
    case ProductActionsTypes.UPDATE_PRODUCTS_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}


    default : return {...state}
  }
 }
