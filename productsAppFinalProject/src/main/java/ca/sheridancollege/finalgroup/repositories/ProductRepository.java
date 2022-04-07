package ca.sheridancollege.finalgroup.repositories;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import ca.sheridancollege.finalgroup.domain.Product;

@Repository
public interface ProductRepository extends ReactiveMongoRepository<Product, String> {

}
