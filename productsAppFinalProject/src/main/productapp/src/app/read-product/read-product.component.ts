import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.css']
})
export class ReadProductComponent implements OnInit {
	
	@Input() id: string = "";

	public productName: string = ""
	public productDesc: string = ""
	public price:number = 0.0
	
	product = new Product(this.id, this.productName, this.price, this.productDesc)
	

  constructor(private route: ActivatedRoute, private router:Router,
  			  private productService: ProductService) { }

  ngOnInit(): void {
		
	this.id = this.route.snapshot.params['id'];
	
	this.productService.getProduct(this.id)
		.subscribe(data => {
			console.log(data);
			this.product = data
		}, error => console.log(error))
  }
  
  list(){
	this.router.navigate(['products']) //go back to show product component
  }
  

}
