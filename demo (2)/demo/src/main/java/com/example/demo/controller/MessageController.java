package com.example.demo.controller;

import com.example.demo.entity.Message;
import com.example.demo.entity.User;
import com.example.demo.service.MessageService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    @Autowired
    private MessageService messageService;
    @Autowired
    private UserService userService;
    @PostMapping("/chat/{id}")
    public Message createMessage(@RequestBody Message req, @RequestHeader("Authorization") String jwt,
                                 @PathVariable Long chatId) throws Exception {
        User user=userService.findUserByJwt(jwt);
        Message message=messageService.createMessage(user,chatId,req);
        return  message;
    }
    @GetMapping("/messages/chat/{chatId}")
    public List<Message> findChatMessages(@RequestHeader("Authorization") String jwt, @PathVariable Long chatId) throws Exception {
        User user=userService.findUserByJwt(jwt);
      return   messageService.findChatMessages(chatId);
    }
}
