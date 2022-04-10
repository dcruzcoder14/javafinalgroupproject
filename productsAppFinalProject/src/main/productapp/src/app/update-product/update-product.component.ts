import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-update-product',
	templateUrl: './update-product.component.html',
	styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
	 id:string = "";
	 product:Product = new Product();

	constructor(private route: ActivatedRoute, private router: Router,
		private productService: ProductService) { }

	ngOnInit(): void {
		this.product = new Product()
		this.id = this.route.snapshot.params['id']
		
		this.productService.getProduct(this.id)
		.subscribe(data => {
			this.product = data;
		})
	}


	updateProduct() {
		this.productService.updateProduct(this.product)
			.subscribe((data: any) => {
				console.log(data)
				this.product = new Product();
				this.gotoList();
			})

	}

	onSubmit() {
		this.updateProduct()
	}

	gotoList() {
		this.router.navigate(['/products'])
	}

			
}
