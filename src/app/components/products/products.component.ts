import { DataStateEnum } from './../../state/product.state';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { AppDataState } from 'src/app/state/product.state';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // products?:Product[];
  public productsData$?:Observable<AppDataState<Product[]>>;
  readonly dataStateEnum=DataStateEnum;
  constructor(private productsService:ProductsService,private router:Router) { }

  ngOnInit(): void {
  }
  // First_Method
  // onGetAllProducts(){
  //    this.productsService.getAllProducts().subscribe(data=>{
  //     this.products=data;
  //    })
  // }

  // Second_Method
  onGetAllProducts(){
    this.productsData$=this.productsService.getAllProducts().pipe(
      map((data)=>({dataState: DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState :DataStateEnum.ERROR,errorMessage:err.message}))
      );
  }
  onGetSelectedProducts(){
    this.productsData$=this.productsService.getSelectedProducts().pipe(
      map((data)=>({dataState: DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState :DataStateEnum.ERROR,errorMessage:err.message}))
      );
  }
  onGetAvailableProducts(){
    this.productsData$=this.productsService.getAvailableProducts().pipe(
      map((data)=>({dataState: DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState :DataStateEnum.ERROR,errorMessage:err.message}))
      );
  }
  onSearch(dataForm:any ){
    this.productsData$=this.productsService.searchProducts(dataForm.keyword).pipe(
      map((data)=>({dataState: DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState :DataStateEnum.ERROR,errorMessage:err.message}))
      );
  }
  onSelect(p:Product){
    this.productsService.selectProduct(p).subscribe(data=>{
      p.selected=data.selected;
    })
  }
  onDelete(p:Product){
    let v=confirm("Are you sur to delete this Item!?");
    if(v)
      this.productsService.deleteProduct(p).subscribe(data=>{
        this.onGetAllProducts();
      })
  }
  onAddProduct(){
    this.router.navigateByUrl("/newProduct")
  }
  onEditProduct(p:Product){
    this.router.navigateByUrl("/updateProduct/"+p.id)
  }
}
