package com.example.productcrud.Services;


import com.example.productcrud.DAO.UserDAO;
import com.example.productcrud.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component()
public class LoginService {

    private final UserDAO userDAO;

    @Autowired
    public LoginService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public boolean authentication(User user) {
        ArrayList<User> users = (ArrayList<User>) userDAO.findAll();
        for (User u : users) {
            if (user.getUsername().equals(u.getUsername()) &&
                    user.getPassword().equals(u.getPassword())) {
                return true;
            }
        }
        return false;
    }
}
