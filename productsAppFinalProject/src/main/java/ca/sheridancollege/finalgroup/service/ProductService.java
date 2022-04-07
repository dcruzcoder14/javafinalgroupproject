package ca.sheridancollege.finalgroup.service;

import ca.sheridancollege.finalgroup.domain.Product;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ProductService {
	public Flux<Product> getProducts();
	public Mono<Product> getProduct(String id);
	public Mono<Product> save(Product product);
	public Mono<Product> updateProduct(Product product);
	public Mono<Void> deleteProduct(String id);
}
