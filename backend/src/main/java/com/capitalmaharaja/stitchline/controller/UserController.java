package com.capitalmaharaja.stitchline.controller;

import com.capitalmaharaja.stitchline.model.User;
import com.capitalmaharaja.stitchline.service.UserService;
import com.capitalmaharaja.stitchline.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addUser(@RequestBody User user){
        boolean addUser = userService.add(user);
        if (addUser){
            return new ResponseEntity(new StandardResponse("200","success",null),HttpStatus.OK);
        }
        return new ResponseEntity(new StandardResponse("500","fail",null),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateUser(@RequestBody User user){
        boolean updateUser = userService.update(user);
        if (updateUser){
            return new ResponseEntity(new StandardResponse("200","success",null),HttpStatus.OK);
        }
        return new ResponseEntity(new StandardResponse("500","fail",null),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteUser(@PathVariable String id){
        boolean deleteUser = userService.delete(id);
        if (deleteUser){
            return new ResponseEntity(new StandardResponse("200","success",null),HttpStatus.OK);
        }
        return new ResponseEntity(new StandardResponse("500","fail",null),HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @GetMapping("/search/{username}")
    public ResponseEntity searchUser(@PathVariable String username){
        User user = userService.findByUsernameAndPassword(username);
        return new ResponseEntity(new StandardResponse("200","success",user),HttpStatus.OK);
//        return null;
    }

}
