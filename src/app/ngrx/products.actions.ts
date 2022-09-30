import { Product } from 'src/app/model/product.model';
import { Action } from '@ngrx/store';

export enum ProductActionsTypes{
  GET_ALL_PRODUCTS="[Product] Get All Products",
  GET_ALL_PRODUCTS_SUCCESS="[Product] Get All Products success",
  GET_ALL_PRODUCTS_ERROR="[Product] Get All Products error",

  GET_SELECTED_PRODUCTS="[Product] Get Selected Products",
  GET_SELECTED_PRODUCTS_SUCCESS="[Product] Get Selected Products success",
  GET_SELECTED_PRODUCTS_ERROR="[Product] Get Selected Products error",

  GET_AVAILABLE_PRODUCTS="[Product] Get Available Products",
  GET_AVAILABLE_PRODUCTS_SUCCESS="[Product] Get Available Products success",
  GET_AVAILABLE_PRODUCTS_ERROR="[Product] Get Available Products error",

  SEARCH_PRODUCTS="[Product] Search Products",
  SEARCH_PRODUCTS_SUCCESS="[Product] Search Products success",
  SEARCH_PRODUCTS_ERROR="[Product] Search Products error",

  SELECT_PRODUCTS="[Product] Select Products",
  SELECT_PRODUCTS_SUCCESS="[Product] Select Products success",
  SELECT_PRODUCTS_ERROR="[Product] Select Products error",

  DELETE_PRODUCTS="[Product] Delete Products",
  DELETE_PRODUCTS_SUCCESS="[Product] Delete Products success",
  DELETE_PRODUCTS_ERROR="[Product] Delete Products error",

  NEW_PRODUCTS="[Product] New Products",
  NEW_PRODUCTS_SUCCESS="[Product] New Products success",
  NEW_PRODUCTS_ERROR="[Product] New Products error",

  SAVE_PRODUCTS="[Product] Save Products",
  SAVE_PRODUCTS_SUCCESS="[Product] Save Products success",
  SAVE_PRODUCTS_ERROR="[Product] Save Products error",

  EDIT_PRODUCTS="[Product] Edit Products",
  EDIT_PRODUCTS_SUCCESS="[Product] Edit Products success",
  EDIT_PRODUCTS_ERROR="[Product] Edit Products error",

  UPDATE_PRODUCTS="[Product] Update Products",
  UPDATE_PRODUCTS_SUCCESS="[Product] Update Products success",
  UPDATE_PRODUCTS_ERROR="[Product] Update Products error",
}

export class GetAllProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload: any) { }
}
export class GetAllProductsActionSuccess implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) { }
}
export class GetAllProductsActionError implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload: string) { }
}
/* ///////////////////////////////////////////////////////////////////////////////////////////*/
export class GetSelectedProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload: any) { }
}
export class GetSelectedProductsActionSuccess implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) { }
}
export class GetSelectedProductsActionError implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload: string) { }
}
/* ///////////////////////////////////////////////////////////////////////////////////////////*/
export class GetAvailableProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_AVAILABLE_PRODUCTS;
  constructor(public payload: any) { }
}
export class GetAvailableProductsActionSuccess implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) { }
}
export class GetAvailableProductsActionError implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR;
  constructor(public payload: string) { }
}
/* ////////////////////////////////////////////////////////////////////////////////////////////*/

export class SearchProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SEARCH_PRODUCTS;
  constructor(public payload: any) { }
}
export class SearchProductsActionSuccess implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) { }
}
export class SearchProductsActionError implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload: string) { }
}
/* ////////////////////////////////////////////////////////////////////////////////////////////*/

export class SelectProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SELECT_PRODUCTS;
  constructor(public payload: Product) { }
}
export class SelectProductsActionSuccess implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SELECT_PRODUCTS_SUCCESS;
  constructor(public payload: Product) { }
}
export class SelectProductsActionError implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SELECT_PRODUCTS_ERROR;
  constructor(public payload: string) { }
}
/* ////////////////////////////////////////////////////////////////////////////////////////////*/
export class DeleteProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.DELETE_PRODUCTS;
  constructor(public payload: Product) { }
}
export class DeleteProductsActionSuccess implements Action {
  type: ProductActionsTypes = ProductActionsTypes.DELETE_PRODUCTS_SUCCESS;
  constructor(public payload: Product) { }
}
export class DeleteProductsActionError implements Action {
  type: ProductActionsTypes = ProductActionsTypes.DELETE_PRODUCTS_ERROR;
  constructor(public payload: string) { }
}
/* ////////////////////////////////////////////////////////////////////////////////////////////*/
export class NewProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.NEW_PRODUCTS;
  constructor(public payload: any) { }
}
export class NewProductsActionSuccess implements Action {
  type: ProductActionsTypes = ProductActionsTypes.NEW_PRODUCTS_SUCCESS;
  constructor(public payload: any) { }
}
export class NewProductsActionError implements Action {
  type: ProductActionsTypes = ProductActionsTypes.NEW_PRODUCTS_ERROR;
  constructor(public payload: string) { }
}
/* ////////////////////////////////////////////////////////////////////////////////////////////*/

export class SaveProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SAVE_PRODUCTS;
  constructor(public payload: Product) { }
}
export class SaveProductsActionSuccess implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SAVE_PRODUCTS_SUCCESS;
  constructor(public payload: Product) { }
}
export class SaveProductsActionError implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SAVE_PRODUCTS_ERROR;
  constructor(public payload: string) { }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////*/
export class EditProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.EDIT_PRODUCTS;
  constructor(public payload: number) { }
}
export class EditProductsActionSuccess implements Action {
  type: ProductActionsTypes = ProductActionsTypes.EDIT_PRODUCTS_SUCCESS;
  constructor(public payload: Product) { }
}
export class EditProductsActionError implements Action {
  type: ProductActionsTypes = ProductActionsTypes.EDIT_PRODUCTS_ERROR;
  constructor(public payload: string) { }
}
/* ////////////////////////////////////////////////////////////////////////////////////////////*/

export class UpdateProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.UPDATE_PRODUCTS;
  constructor(public payload: Product) { }
}
export class UpdateProductsActionSuccess implements Action {
  type: ProductActionsTypes = ProductActionsTypes.UPDATE_PRODUCTS_SUCCESS;
  constructor(public payload: Product) { }
}
export class UpdateProductsActionError implements Action {
  type: ProductActionsTypes = ProductActionsTypes.UPDATE_PRODUCTS_ERROR;
  constructor(public payload: string) { }
}
export type ProductActions=
 GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
 |GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError
 |GetAvailableProductsAction | GetAvailableProductsActionSuccess | GetAvailableProductsActionError
 |SearchProductsAction | SearchProductsActionSuccess | SearchProductsActionError
 |SelectProductsAction | SelectProductsActionSuccess | SelectProductsActionError
 |DeleteProductsAction | DeleteProductsActionSuccess | DeleteProductsActionError
 |NewProductsAction | NewProductsActionSuccess | NewProductsActionError
 |SaveProductsAction | SaveProductsActionSuccess | SaveProductsActionError
 |EditProductsAction | EditProductsActionSuccess | EditProductsActionError
 |UpdateProductsAction | UpdateProductsActionSuccess | UpdateProductsActionError
 ;

