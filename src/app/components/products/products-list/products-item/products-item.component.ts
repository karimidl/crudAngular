import { Store } from '@ngrx/store';
import { Product } from './../../../../model/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { DeleteProductsAction, SelectProductsAction } from 'src/app/ngrx/products.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  // @Input() product!:Product;
  constructor(private store:Store,private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(product:Product){
    this.store.dispatch(new SelectProductsAction(product))
  }
  onDelete(product:Product){
    let v=confirm("Are you sur to delete this Item!?");
    if(v)
    this.store.dispatch(new DeleteProductsAction(product))
      }

  onEdit(product:Product){
     this.router.navigateByUrl("/updateProduct/"+product.id)
  }
}
