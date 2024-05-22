package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.repo.UserRepository;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    UserService userService;
    @PostMapping("/users")
    public User createUser(@RequestBody User user){

        return userService.registerUser(user);
    }
    @GetMapping("/users/{userId}")
    public User getUserById(@PathVariable("userId") Long id) throws Exception {
        return userService.findUserById(id);
    }
    @PutMapping("/users/update/{userId}")
    public User updateUser(@RequestBody User user , @PathVariable Long userId) throws Exception{
        return userService.updateUser(user,userId);
    }
    @PutMapping("/users/follow/{userId1}/{UserId2}")
    public User followUserHanddler(@PathVariable Long userId1,@PathVariable Long userId2) throws Exception{
        //System.out.println("userId1: " + userId1 + ", userId2: " + userId2); // Ajout de logs pour débogage
         return userService.followUser(userId1,userId2);
    }
    @GetMapping("users/search")
    public List<User> searchUser(@RequestParam("query") String query){
       return userService.searchUser(query);
    }
}
