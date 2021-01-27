package com.example.productcrud.controller;


import com.example.productcrud.DAO.ProductDAO;
import com.example.productcrud.Entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class ProductController {

    @Autowired
    private ProductDAO productDAO;

    @RequestMapping(value = "/Products", method = RequestMethod.GET)
    public Iterable<Product> allProducts() {
        return productDAO.findAll();
    }

    @RequestMapping(value = "/Products/{id}", method = RequestMethod.GET)
    public Product getProduct(@PathVariable int id) {
        return productDAO.findById(id).get();
    }

    @RequestMapping(value = "/Products/save", method = RequestMethod.POST)
    public int addProduct(@RequestBody Product product) {
        int id = -1;
        id =productDAO.save(product).getId();
        return id;
    }

    @RequestMapping(value = "/Products/update", method = RequestMethod.POST)
    public boolean updateProduct(@RequestBody Product product) {
        productDAO.save(product);
        return true;
    }

    @RequestMapping(value = "/Products/delete/{id}", method = RequestMethod.GET)
    public boolean deleteProduct(@PathVariable int id) {
        productDAO.deleteById(id);
        return true;
    }

}
