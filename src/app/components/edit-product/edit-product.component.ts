import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  // productId:number;
  // productFormGroup!:FormGroup;
  // submitted:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,private productsService:ProductsService,private fb:FormBuilder) {

  }

  ngOnInit(): void {
    // this.productsService.getProduct(this.productId).subscribe(
    //   product=>{
    //     this.productFormGroup=this.fb.group({
    //       id:[product.id,Validators.required],
    //       name:[product.name,Validators.required],
    //       price:[product.price,Validators.required],
    //       quantity:[product.quantity,Validators.required],
    //       selected:[product.selected,Validators.required],
    //       available:[product.available,Validators.required]
    //     })
    //   }
    // )
  }

  onUpdateProduct(){
    // this.productsService.updateProduct(this.productFormGroup.value).subscribe(
    //   data=>{
    //     alert('bien jouer!!!')
    //   }
    // )
  }





}
