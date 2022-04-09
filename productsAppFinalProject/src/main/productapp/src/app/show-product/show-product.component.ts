import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  
 
  //create an arry of Project

	
	productList: Product[] = []
	filterProject: Product[]= []
		

  constructor(private productService: ProductService , private router: Router) { }

  ngOnInit(): void {
    this.getProduct()
  }
  
getProduct() {
		this.productService.getProductList().subscribe(
			(data: any) => {
				this.productList = data
				// projects.push(this.project)
				console.log("the new product list", this.productList)

			},
			(error) => console.log(error)
		);
		
		//telling the service emitter to push the item onto original list
		this.productService.onProductAdded.subscribe(
			(product: Product) => {
				console.log("This is the new product has been added", product)
				if (product) {
				  console.log("found product befor pushing", this.productList)
					this.productList.push(product)
					console.log("found product", this.productList)
					
				}
			}

		)
	}


deleteProduct(id: number){
	this.productService.deleteProdcut(id)
		.subscribe(data => {
			console.log(data)
			this.getProduct()
		}, error => console.log(error))
}

//routing to another(update) component -
//passing the product object will populate all thie field in update comoponent
updateProduct(product: Product){
	this.router.navigate(['update', product]);
	
}

//this will navigate to read router compononet
productDetails(id: number){
	this.router.navigate(['details', id]); 
}
}
