package com.example.demo.service;

import com.example.demo.entity.Chat;
import com.example.demo.entity.User;

import java.util.List;

public interface ChatService {
    public Chat createChat(User reqUser, User user2);
    public Chat findChatById(Long chatId) throws Exception;
    public List<Chat> findUsersChat(Long userId);
}
