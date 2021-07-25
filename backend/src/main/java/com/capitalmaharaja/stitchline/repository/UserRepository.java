package com.capitalmaharaja.stitchline.repository;

import com.capitalmaharaja.stitchline.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User,String> {

    @Query("{'username': ?0}")
    Optional<User> findUserNameAndPassword(String username);
}
