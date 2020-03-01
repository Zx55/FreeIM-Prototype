/*
 * @author Zx55
 * @project server
 * @file MsgEventHandler.java
 * @date 2020/2/29 17:32
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server.handler;

import com.zx5.freeim.server.handler.utils.Utils;
import com.zx5.freeim.server.model.OnlineUser;
import com.zx5.freeim.server.msg.Message;

import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.DataListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class MsgHandler {
    private static final Logger logger = LoggerFactory.getLogger(MsgHandler.class);

    private SocketIOServer server;

    private RedisTemplate<String, OnlineUser> redisTemplate;

    @Autowired
    public MsgHandler(SocketIOServer server, RedisTemplate<String, OnlineUser> redisTemplate) {
        this.server = server;
        this.redisTemplate = redisTemplate;
        var namespace = server.getNamespace("/im-service");
        namespace.addEventListener("sendMsg", byte[].class, onSendMsg());
    }

    private DataListener<byte[]> onSendMsg() {
        return (client, data, ackSender) -> {
            var msg = Message.Msg.parseFrom(data);
            logger.info("Client[{}] send message[{}]", client.getSessionId(), msg.getHead().getMsgId());

            switch (msg.getHead().getMsgType()) {
                case MSG_P2P:
                case MSG_P2G: {
                    ackSender.sendAckData(Utils.makeAckMsg().toByteArray());

                    var mappedUser = redisTemplate.opsForValue().get(msg.getHead().getReceiverId());
                    if (mappedUser != null) {
                        var receiver = this.server.getClient(UUID.fromString(mappedUser.getSessionId()));
                        receiver.sendEvent("receiveMsg", data);
                        logger.info("send to User[{}]", msg.getHead().getReceiverId());
                    } else {
                        logger.info("User[{}] offline", msg.getHead().getReceiverId());
                    }
                    break;
                }

                default:
                    logger.error("Client[{}] send unsupported message[{}]", client.getSessionId(), msg.getHead().getMsgId());
            }
        };
    }
}
