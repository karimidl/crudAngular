import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path:"products",component:ProductsComponent
  },
  {
    path:"",component:HomeComponent
  },
  {
    path:"newProduct",component:AddProductComponent
  },
  {
    path:"updateProduct/:id",component:EditProductComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
