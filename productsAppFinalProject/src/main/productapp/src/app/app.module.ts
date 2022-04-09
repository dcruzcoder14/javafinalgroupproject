import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ReadProductComponent } from './read-product/read-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ReadProductComponent,
    ShowProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
