package com.example.demo.service;

import com.example.demo.entity.Chat;
import com.example.demo.entity.Message;
import com.example.demo.entity.User;
import com.example.demo.repo.ChatRepository;
import com.example.demo.repo.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MessageServiceImplement implements MessageService{
//    @Autowired
//    private MessageService messageService;
    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private  ChatService chatService;
    @Autowired
    private ChatRepository chatRepository;
    @Override
    public Message createMessage(User user, Long chatId, Message req) throws Exception {
        Message message=new Message();
        Chat chat=chatService.findChatById(chatId);
        message.setChat(chat);
        message.setContent(req.getContent());
        message.setUser(user);
        message.setTimeStamp(req.getTimeStamp());
        chat.getMessages().add(message);
        chatRepository.save(chat);
        return messageRepository.save(message);
    }

    @Override
    public List<Message> findChatMessages(Long chatId) throws Exception {
       // Chat chat=chatService.findChatById(chatId);
        return messageRepository.findByChatId(chatId);
    }
}
