import { AppDataState, DataStateEnum, ActionEvent, ProductActionsTypes } from './../../../state/product.state';
import { Observable } from 'rxjs';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  @Input() public productsDataInput$?:Observable<AppDataState<Product[]>>;
  @Output() productEventEmitter:EventEmitter<ActionEvent>=new EventEmitter();
  readonly dataStateEnum=DataStateEnum;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(p:Product){
      this.productEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:p})
  }
  onEditProduct(p:Product){
    this.productEventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:p})
  }
  onDelete(p:Product){
    this.productEventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT,payload:p})
  }

  onActionEvent($event:ActionEvent){

    this.productEventEmitter.emit($event)

   }
}
