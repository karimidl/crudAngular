
import { Observable ,of} from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ProductsService } from './../services/products.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetAllProductsActionSuccess, ProductActionsTypes, GetAllProductsActionError,
         GetSelectedProductsActionSuccess, GetSelectedProductsActionError,
         GetAvailableProductsActionSuccess, GetAvailableProductsActionError, ProductActions,
         SearchProductsActionSuccess,SearchProductsActionError, SelectProductsActionSuccess,
         SelectProductsActionError, DeleteProductsActionSuccess, DeleteProductsActionError,
         NewProductsActionSuccess, SaveProductsActionSuccess, SaveProductsActionError, EditProductsActionSuccess,
         EditProductsActionError, UpdateProductsActionSuccess, UpdateProductsActionError} from './products.actions';

import {mergeMap,map,catchError} from 'rxjs/operators';

@Injectable()
export class ProductsEffects{
  constructor(private productsService:ProductsService,
             private effectsActions:Actions
             ){}


  getAllProductsEffect: Observable<ProductActions> = createEffect(
    () => this.effectsActions.pipe(
      ofType(ProductActionsTypes.GET_ALL_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productsService.getAllProducts()
          .pipe(
            map((products) => new GetAllProductsActionSuccess(products)),
            catchError((err) => of(new GetAllProductsActionError(err)))
               )
      })
    )
  );


  getSelectedProductsEffect: Observable<ProductActions> = createEffect(
    () => this.effectsActions.pipe(
      ofType(ProductActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productsService.getSelectedProducts()
          .pipe(
            map((products) => new GetSelectedProductsActionSuccess(products)),
            catchError((err) => of(new GetSelectedProductsActionError(err)))
               )
      })
    )
  );


  getAvailableProductsEffect: Observable<ProductActions> = createEffect(
    () => this.effectsActions.pipe(
      ofType(ProductActionsTypes.GET_AVAILABLE_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productsService.getAvailableProducts()
          .pipe(
            map((products) => new GetAvailableProductsActionSuccess(products)),
            catchError((err) => of(new GetAvailableProductsActionError(err)))
               )
      })
    )
  );


  SearchProductsEffect: Observable<ProductActions> = createEffect(
    () => this.effectsActions.pipe(
      ofType(ProductActionsTypes.SEARCH_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productsService.searchProducts(action.payload)
          .pipe(
            map((products) => new SearchProductsActionSuccess(products)),
            catchError((err) => of(new SearchProductsActionError(err)))
               )
      })
    )
  );


  SelectProductsEffect: Observable<ProductActions> = createEffect(
    () => this.effectsActions.pipe(
      ofType(ProductActionsTypes.SELECT_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productsService.selectProduct(action.payload)
          .pipe(
            map((product) => new SelectProductsActionSuccess(product)),
            catchError((err) => of(new SelectProductsActionError(err)))
               )
      })
    )
  );

  DeleteProductsEffect: Observable<ProductActions> = createEffect(
    () => this.effectsActions.pipe(
      ofType(ProductActionsTypes.DELETE_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productsService.deleteProduct(action.payload.id)
          .pipe(
            map(() => new DeleteProductsActionSuccess(action.payload)),
            catchError((err) => of(new DeleteProductsActionError(err)))
               )
      })
    )
  );

  NewProductsEffect: Observable<ProductActions> = createEffect(
    () => this.effectsActions.pipe(
      ofType(ProductActionsTypes.NEW_PRODUCTS),
      map((action: ProductActions) => {
        return new NewProductsActionSuccess({})
      })
    )
  );

  SaveProductsEffect: Observable<ProductActions> = createEffect(
    () => this.effectsActions.pipe(
      ofType(ProductActionsTypes.SAVE_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productsService.SaveProduct(action.payload)
          .pipe(
            map((product) => new SaveProductsActionSuccess(product)),
            catchError((err) => of(new SaveProductsActionError(err)))
               )
      })
    )
  );

  EditProductsEffect: Observable<ProductActions> = createEffect(
    () => this.effectsActions.pipe(
      ofType(ProductActionsTypes.EDIT_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productsService.getProduct(action.payload)
          .pipe(
            map((product) => new EditProductsActionSuccess(product)),
            catchError((err) => of(new EditProductsActionError(err)))
               )
      })
    )
  );

  UpdateProductsEffect: Observable<ProductActions> = createEffect(
    () => this.effectsActions.pipe(
      ofType(ProductActionsTypes.UPDATE_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productsService.updateProduct(action.payload)
          .pipe(
            map((product) => new UpdateProductsActionSuccess(product)),
            catchError((err) => of(new UpdateProductsActionError(err)))
               )
      })
    )
  );
}




