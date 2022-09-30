import { DataStateEnum } from './../../../state/product.state';
import {ProductsState, ProductsStateEnum } from './../../../ngrx/products.reducer';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NewProductsAction, SaveProductsAction } from 'src/app/ngrx/products.actions';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productFormGroup?:FormGroup;
  state?:ProductsState;
  readonly productsStateEnum=ProductsStateEnum;
  submitted:boolean=false
  constructor(private store:Store<any>,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.store.dispatch(new NewProductsAction({}));
    this.store.subscribe(state=>{
      this.state=state.catalogState;

     if(this.state?.dataState==this.productsStateEnum.NEW){
      this.productFormGroup=this.fb.group({
        name:["",Validators.required],
        price:[0,Validators.required],
        quantity:[0,Validators.required],
        selected:[true,Validators.required],
        available:[true,Validators.required]
      });
     }

    })
  }
  onSaveProduct(){
     this.store.dispatch(new SaveProductsAction(this.productFormGroup?.value))
  }
}
