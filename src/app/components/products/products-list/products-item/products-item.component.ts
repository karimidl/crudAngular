import { ProductActionsTypes } from 'src/app/state/product.state';
import { ActionEvent } from '../../../../state/product.state';
import { Product } from '../../../../model/product.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() product?:Product;
  @Output() productEventEmitter:EventEmitter<ActionEvent>=new EventEmitter();
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
}
