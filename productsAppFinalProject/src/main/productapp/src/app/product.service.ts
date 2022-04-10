import { Injectable,  Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
 import { EventEmitter } 
from "@angular/core";
import { BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
	
	private baseUrl = 'http://localhost:8080/api';
		private product$ = new BehaviorSubject<Product[]>([])
	
	 @Output() onProductAdded = new EventEmitter<Product>();

  constructor(private http: HttpClient) { }
  public init(): void{
	
	}
  
 getProduct(id: string): Observable<any>{
	return this.http.get(this.baseUrl + '/products/'+id);
}

createProduct(product: Product): Observable<Product>{
	return this.http.post<Product>(this.baseUrl+'/products/',product);
}

updateProduct(product: Object): Observable<Object>{
	return this.http.put(this.baseUrl+'/products/',product);
}

deleteProduct(id:string): Observable<any>{
	return this.http.delete(this.baseUrl+'/products/'+id);
}

getProductList(): Observable<Product>{
	return this.http.get<Product>(this.baseUrl+'/products/');
}

}
