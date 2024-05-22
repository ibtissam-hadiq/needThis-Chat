package com.example.demo.repo;

import com.example.demo.entity.User;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository  extends JpaRepository<User,Long> {
    public User findByEmail(String email);
    @Query("select  u from User u where u.firstName like %:query% or u.lastName like %:query% or u.email like %:query%")
    public List<User> searchUser(@Param("query") String query);
    User findByUsername(String username);
}
