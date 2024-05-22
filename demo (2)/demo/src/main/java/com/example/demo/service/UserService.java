package com.example.demo.service;

import com.example.demo.entity.User;

import java.util.List;

public interface UserService {
    public User registerUser(User user);
    public User findUserById(Long userId) throws Exception;
    public User findUserByEmail(String email);
    public User followUser(Long userid1,Long userId2);
    public User updateUser(User user ,Long id) throws Exception;
    public List<User> searchUser(String query);
    User findUserByJwt(String jwt) throws Exception;
}
