package com.loadbalancer.websocket;

import com.loadbalancer.model.ServerNode;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WebSocketPublisher {

    private final SimpMessagingTemplate messagingTemplate;

    public WebSocketPublisher(
            SimpMessagingTemplate messagingTemplate
    ) {
        this.messagingTemplate = messagingTemplate;
    }

    public void publishServerUpdates(
            List<ServerNode> servers
    ) {

        messagingTemplate.convertAndSend(
                "/topic/servers",
                servers
        );
    }
}