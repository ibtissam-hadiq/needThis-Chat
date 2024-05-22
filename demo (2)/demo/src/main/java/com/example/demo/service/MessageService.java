package com.example.demo.service;

import com.example.demo.entity.Chat;
import com.example.demo.entity.Message;
import com.example.demo.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;


public interface MessageService {
    public Message createMessage(User user, Long chatId, Message message) throws Exception;
    List<Message> findChatMessages(Long chatId) throws Exception;
}
