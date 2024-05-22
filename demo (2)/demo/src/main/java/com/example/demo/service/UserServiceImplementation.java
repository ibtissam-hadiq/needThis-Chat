package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repo.UserRepository;
import com.example.demo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplementation   implements  UserService{
    @Autowired
    UserRepository userRepository;
    @Override
    public User registerUser(User user) {
        User newUser=new User();
        newUser.setEmail(user.getEmail());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setPassword(user.getPassword());
        newUser.setId(user.getId());
        User savedUser=userRepository.save(newUser);
        return savedUser;
    }

    @Override
    public User findUserById(Long userId) throws Exception {
        Optional<User> user=userRepository.findById(userId);
        if(user.isPresent()){
            return user.get();
        }
        throw new Exception("user doesnt exist with userId"+userId);
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);

    }

    @Override
    public User followUser(Long userid1, Long userId2) {
          User user1=userRepository.findById(userid1).get();
          User user2=userRepository.findById(userId2).get();
          user2.getFollowerIds().add(userid1);
          user1.getFollowerIds().add(userId2);
          userRepository.save(user1);
          userRepository.save(user2);
          return user1;

    }

    @Override
    public User updateUser(User user,Long userId) throws Exception {
        Optional<User> user1 =userRepository.findById(userId);
        if(user1.isEmpty()){
            throw new Exception("user doesnt exit with id"+userId);
        }
        User oldUser=user1.get();
        if(user.getFirstName()!= null){
            oldUser.setFirstName(user.getFirstName());
        }
        if(user.getLastName()!= null){
            oldUser.setLastName(user.getLastName());
        }
        if(user.getEmail()!= null){
            oldUser.setEmail(user.getEmail());
        }


        return userRepository.save(oldUser);
    }

    @Override
    public List<User> searchUser(String query) {
        return userRepository.searchUser(query);
    }

    @Override
    public User findUserByJwt(String jwt) throws Exception {
        Long userId= JwtUtil.extractUserIdFromJwt(jwt);
        return userRepository.findById(userId).orElseThrow(()->new Exception("user not found"));
    }
}
