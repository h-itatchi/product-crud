package com.example.productcrud.DAO;


import com.example.productcrud.Entities.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductDAO extends CrudRepository<Product, Integer> {

}
