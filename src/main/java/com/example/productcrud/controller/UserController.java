package com.example.productcrud.controller;


import com.example.productcrud.DAO.UserDAO;
import com.example.productcrud.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserDAO userDAO;

    @RequestMapping(value="/users", method= RequestMethod.GET)
    public Iterable<User> allProducts() {
        return userDAO.findAll();
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public User getProduct(@PathVariable int id) {
        return userDAO.findById(id).get();
    }

    @RequestMapping(value = "/users/save", method = RequestMethod.POST)
    public String addProduct(@RequestBody User user) {
        userDAO.save(user);
        return "User has been saved";
    }

    @RequestMapping(value = "/users/update", method = RequestMethod.POST)
    public String updateProduct(@RequestBody User user) {
        userDAO.save(user);
        return "User has been updated";
    }
}
