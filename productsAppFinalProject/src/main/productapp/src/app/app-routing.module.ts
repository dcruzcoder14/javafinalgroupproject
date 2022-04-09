import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductComponent } from './show-product/show-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ReadProductComponent } from './read-product/read-product.component'

const routes: Routes = [
	{path: '', redirectTo: 'products', pathMatch: 'full'},
	{path: 'products', component: ShowProductComponent }, 
	{path: 'add', component: CreateProductComponent },
	{path: 'update', component: UpdateProductComponent },
	{path: 'details/:id', component: ReadProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
