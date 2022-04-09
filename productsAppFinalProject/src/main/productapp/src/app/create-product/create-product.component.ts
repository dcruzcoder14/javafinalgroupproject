import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

 projectForm = new FormGroup({
    productName: new FormControl(''),
    price: new FormControl(),
    productDesc: new FormControl(''),
   // projectDate: new FormControl(''),
    
  });

  constructor(private router:Router, 
  private productService: ProductService, 
  private route: ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  
  onSubmit(){
	this.saveProduct();
}

saveProduct(){
	this.productService.createProduct(this.projectForm.value)
	.subscribe((data: Product) => {
		console.log(data),
		alert("Product is sccessfuly submitted ")
		this.projectForm.reset()
		this.productService.onProductAdded.emit(data)
		}, error => console.log(error))
		this.gotoProcutList();
}

gotoProcutList(){
	this.router.navigate(['/products']);
}

}
