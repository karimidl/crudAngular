import { EventDriverService } from './../../state/event.driver.service';
import { DataStateEnum, ProductActionsTypes, ActionEvent } from './../../state/product.state';
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
  constructor(private productsService:ProductsService,
    private eventDriverService:EventDriverService,
    private router:Router) { }

  ngOnInit(): void {
    this.eventDriverService.sourceEventSubjectObservable.subscribe(
      (actionEvent:ActionEvent)=>{
        this.onActionEvent(actionEvent);
      }
    )
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
  onActionEvent($event:ActionEvent){
        switch($event.type){
          case ProductActionsTypes.GET_ALL_PRODUCTS:
              this.onGetAllProducts();
              break;
          case ProductActionsTypes.GET_AVAILABLE_PRODUCTS:
              this.onGetAvailableProducts();
              break;
          case ProductActionsTypes.GET_SELECTED_PRODUCTS:
              this.onGetSelectedProducts();
              break;
          case ProductActionsTypes.NEW_PRODUCT:
              this.onAddProduct();
              break;
          case ProductActionsTypes.SEARCH_PRODUCTS:
              this.onSearch($event.payload);
              break;
          case ProductActionsTypes.SELECT_PRODUCT:
              this.onSelect($event.payload);
              break;
          case ProductActionsTypes.EDIT_PRODUCT:
              this.onEditProduct($event.payload);
              break;
          case ProductActionsTypes.DELETE_PRODUCT:
              this.onDelete($event.payload);
              break;
        }
  }
}
