package com.example.demo.controller;

import com.example.demo.entity.Chat;
import com.example.demo.entity.User;
import com.example.demo.request.CreateChatRequest;
import com.example.demo.service.ChatService;
import com.example.demo.service.UserService;
import com.example.demo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ChatController {
    @Autowired
    private ChatService chatService;
    @Autowired
    UserService userService;
    // same thg to create a chat
    @PostMapping("api/chats")
    public Chat creatChat(@RequestHeader("Authorization")  String authHeader,@RequestBody CreateChatRequest req) throws Exception {
        String jwt = authHeader.substring(7); // Remove "Bearer " prefix
        Long userId = JwtUtil.extractUserIdFromJwt(jwt);
        User reqUser = userService.findUserById(userId);
        User user2 = userService.findUserById(req.getUserId());
        Chat chat = chatService.createChat(reqUser, user2);
        return chat;
    }
//    public List<Chat> findUsersChat(@RequestHeader("Authorization")  String jwt){
//        User user=userService.findUserByJwt(jwt);
//         List<Chat> chats=chatService.findUsersChat(user);
//        return chat;
//    }// user should be authenticated to access chat
     public List<Chat> findUsersChat(@RequestHeader("Authorization") String authHeader) throws Exception {
             String jwt = authHeader.substring(7); // Remove "Bearer " prefix
             Long userId = JwtUtil.extractUserIdFromJwt(jwt);
             User user = userService.findUserById(userId);
             List<Chat> chats = chatService.findUsersChat(userId);
             return chats;
         }

}
