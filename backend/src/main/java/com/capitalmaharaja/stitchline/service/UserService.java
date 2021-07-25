package com.capitalmaharaja.stitchline.service;

import com.capitalmaharaja.stitchline.model.User;

import java.util.Optional;

public interface UserService {
    public boolean add(User user);
    public boolean delete(String id);
    public boolean update(User user);
    public User search(String id);
    User findByUsernameAndPassword(String username);
}
