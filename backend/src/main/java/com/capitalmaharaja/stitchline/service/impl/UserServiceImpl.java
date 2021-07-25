package com.capitalmaharaja.stitchline.service.impl;

import com.capitalmaharaja.stitchline.model.User;
import com.capitalmaharaja.stitchline.repository.UserRepository;
import com.capitalmaharaja.stitchline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean add(User user) {
        userRepository.save(user);
        return true;
    }

    @Override
    public boolean delete(String id) {
        userRepository.deleteById(id);
        return true;
    }

    @Override
    public boolean update(User user) {
        User user1 = userRepository.findById(user.getId()).orElseThrow(() -> new RuntimeException(
                String.format("Can't find User By ID", user.getId())
        ));

        user1.setName(user.getName());
        user1.setEmail(user.getEmail());
        user1.setMobile(user.getMobile());
        user1.setUsername(user.getUsername());
        user1.setPassword(user.getPassword());
        user1.setCustomer(user.getCustomer());
        user1.setAdmin(user.getAdmin());

        userRepository.save(user);

        return true;
    }

    @Override
    public User search(String id) {
        Optional<User> byId = userRepository.findById(id);
        if (byId == null){
            return byId.get();
        }
        return null;
    }

    @Override
    public User findByUsernameAndPassword(String username) {
        return userRepository.findUserNameAndPassword(username).orElseThrow(()-> new RuntimeException(
                String.format("Cannot find user",username)));
//        return Optional.empty();
    }
}
