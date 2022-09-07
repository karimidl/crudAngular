import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productFormGroup!:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder,private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required]
    });
  }

  onSaveProduct(){
    this.submitted=true;
    if(this.productFormGroup?.invalid) return;
      this.productsService.SaveProduct(this.productFormGroup.value).subscribe(data=>{
        alert('bien jouer!!');
      })
  }

}
