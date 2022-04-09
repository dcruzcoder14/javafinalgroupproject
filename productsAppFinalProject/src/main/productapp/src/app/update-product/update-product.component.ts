import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-update-product',
	templateUrl: './update-product.component.html',
	styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
	 id:number = 0
	 product:Product = new Product()



	projectForm = new FormGroup({
		productName: new FormControl(''),
		price: new FormControl(),
		productDesc: new FormControl(''),
		// projectDate: new FormControl(''),

	});


	constructor(private router: Router,
		private productService: ProductService, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.id = this.route.snapshot.params['id']
		this.product = new Product()
	
	}


	updateProduct() {
		this.productService.updateProduct(this.projectForm.value)
			.subscribe((data: any) => {
				console.log(data)
			
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
