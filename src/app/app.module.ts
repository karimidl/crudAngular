import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './ngrx/products.effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';

import { ProductsNavBarComponent } from './components/products/products-nav-bar/products-nav-bar.component';
import { StoreModule } from '@ngrx/store';

import { productsReducer } from './ngrx/products.reducer';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsItemComponent } from './components/products/products-list/products-item/products-item.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    AddProductComponent,
    EditProductComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
    ProductsItemComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({catalogState:productsReducer}),
    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
