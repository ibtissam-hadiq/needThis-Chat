package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "my-user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private  String firstName;
    private String lastName;
    private String email;
    private String username;
    private String password;

//    @ManyToMany
//    @JoinTable(
//            name = "user_followers",
//            joinColumns = @JoinColumn(name = "id"),
//            inverseJoinColumns = @JoinColumn(name = "follower_id")
//    )
//    @JsonIgnore
//    private List<User> followers;
//
//    @ManyToMany
//    @JoinTable(
//            name = "user_followings",
//            joinColumns = @JoinColumn(name = "id"),
//            inverseJoinColumns = @JoinColumn(name = "following_id")
//    )
//    @JsonIgnore
//    private List<User> followings;

@ElementCollection
@CollectionTable(name = "user_follower_ids", joinColumns = @JoinColumn(name = "user_id"))
@Column(name = "follower_id")
private List<Long> followerIds=new ArrayList<>();


@ElementCollection
@CollectionTable(name = "user_following_ids", joinColumns = @JoinColumn(name = "user_id"))
@Column(name = "following_id")
private List<Long> followingIds=new ArrayList<>();


}
