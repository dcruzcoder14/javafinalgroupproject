package ca.sheridancollege.finalgroup.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ca.sheridancollege.finalgroup.domain.Product;
import ca.sheridancollege.finalgroup.repositories.ProductRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public Flux<Product> getProducts() {
		// TODO Auto-generated method stub
		return productRepository.findAll();
	}

	@Override
	public Mono<Product> getProduct(String id) {
		// TODO Auto-generated method stub
		return productRepository.findById(id);
	}

	@Override
	public Mono<Product> save(Product product) {
		// TODO Auto-generated method stub
		return productRepository.save(product);
	}

	@Override
	public Mono<Product> updateProduct(Product product) {
		// TODO Auto-generated method stub
		return productRepository.findById(product.getId()).flatMap(existingProduct -> {
			existingProduct.setProductName(product.getProductName());
			existingProduct.setPrice(product.getPrice());
			existingProduct.setProductDesc(product.getProductDesc());
			return productRepository.save(existingProduct);
		});
	}

	@Override
	public Mono<Void> deleteProduct(String id) {
		// TODO Auto-generated method stub
		return productRepository.deleteById(id);
	}

}
