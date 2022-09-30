import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

import { Router } from '@angular/router';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsState$!:Observable<ProductsState>
  readonly productsStateEnum=ProductsStateEnum
  constructor(private productsService:ProductsService,
    private router:Router,private store:Store<any>) { }

  ngOnInit(): void {
  this.productsState$=this.store.pipe(
    map((state)=> state.catalogState)
  );
  }



  onGetAllProducts(){

  }
  onGetSelectedProducts(){

  }
  onGetAvailableProducts(){

  }
  onSearch(dataForm:any ){

  }
  onSelect(p:Product){

  }
  onDelete(p:Product){

  }
  onAddProduct(){
    this.router.navigateByUrl("/newProduct")
  }
  onEditProduct(p:Product){
    this.router.navigateByUrl("/updateProduct/"+p.id)
  }

}
