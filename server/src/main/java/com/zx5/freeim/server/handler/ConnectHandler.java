/*
 * @author Zx55
 * @project server
 * @file ConnectHandler.java
 * @date 2020/2/29 18:15
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server.handler;

import com.corundumstudio.socketio.listener.DataListener;
import com.zx5.freeim.server.model.OnlineUser;

import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

@Component
public class ConnectHandler {
    private static final Logger logger = LoggerFactory.getLogger(MsgHandler.class);

    private RedisTemplate<String, OnlineUser> redisTemplate;

    @Autowired
    public ConnectHandler(SocketIOServer server, RedisTemplate<String, OnlineUser> redisTemplate) {
        this.redisTemplate = redisTemplate;
        var namespace = server.getNamespace("/im-service");
        namespace.addConnectListener(onConnect());
        namespace.addEventListener("close", Void.class, onClose());
        namespace.addDisconnectListener(onDisconnect());
    }

    private ConnectListener onConnect() {
        return client -> {
            var handshake = client.getHandshakeData();
            var userId = handshake.getUrlParams().get("userId").get(0);
            var token = handshake.getUrlParams().get("token").get(0);

            var mappedUser = redisTemplate.opsForValue().get(userId);
            if (mappedUser != null && mappedUser.getToken().equals(token)) {
                redisTemplate.opsForValue().set(userId, new OnlineUser(userId, token, client.getSessionId()));
                logger.info("Client[{}] connected from {}", client.getSessionId(),
                        handshake.getAddress().getHostString());
            } else {
                redisTemplate.opsForValue().set(userId, new OnlineUser(userId, token, client.getSessionId()));
                logger.info("Client[{}] userId and token mismatch", client.getSessionId());
                client.sendEvent("bad-token");
                client.disconnect();
            }
        };
    }

    private DataListener<Void> onClose() {
        return (client, data, ackSender) -> {
            client.disconnect();
        };
    }

    private DisconnectListener onDisconnect() {
        return client -> {
            // redisTemplate.delete(client.getHandshakeData().getUrlParams().get("userId").get(0));
            logger.info("Client[{}] disconnect.", client.getSessionId());
        };
    }
}
