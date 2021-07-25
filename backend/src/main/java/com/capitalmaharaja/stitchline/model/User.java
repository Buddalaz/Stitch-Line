package com.capitalmaharaja.stitchline.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document("User")
public class User {
    @Id
    private String id;
    private String name;
    @Indexed(unique = true)
    private String email;
    private String mobile;
    private String username;
    private String password;
    private String userRole;
    private Customer customer = new Customer();
    private Admin admin = new Admin();
}
