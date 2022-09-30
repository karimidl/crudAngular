import { UpdateProductsAction } from './../../../ngrx/products.actions';

import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EditProductsAction } from 'src/app/ngrx/products.actions';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId:number;
  productFormGroup!:FormGroup;
  state?:ProductsState;
  readonly productsStateEnum=ProductsStateEnum;
  formBuilt:boolean=false;
  submitted:boolean=false
  constructor(private activatedRoute:ActivatedRoute,
              private store:Store<any>,private fb:FormBuilder) {
      this.productId=this.activatedRoute.snapshot.params.id;
    }


  ngOnInit(): void {

    this.store.dispatch(new EditProductsAction(this.productId));
    this.store.subscribe(state=>{
        this.state=state.catalogState;
        if(this.state?.dataState==ProductsStateEnum.LOADED){
          if(this.state.currentProduct!=null){
            this.productFormGroup=this.fb.group({
              id:[this.state.currentProduct?.id],
              name:[this.state.currentProduct?.name,Validators.required],
              price:[this.state.currentProduct?.price,Validators.required],
              quantity:[this.state.currentProduct?.quantity,Validators.required],
              selected:[this.state.currentProduct?.selected,Validators.required],
              available:[this.state.currentProduct?.available,Validators.required]
            });
            this.formBuilt=true;
          }
          }


    });
  }
  onUpdateProduct(){
   this.submitted=true;
   if(this.productFormGroup.invalid) return;
   this.store.dispatch(new UpdateProductsAction(this.productFormGroup.value))
  }
}
