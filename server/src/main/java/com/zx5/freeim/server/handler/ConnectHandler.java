/*
 * @author Zx55
 * @project server
 * @file ConnectHandler.java
 * @date 2020/2/29 18:15
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server.handler;

import com.zx5.freeim.server.dao.OfflineMsgDao;
import com.zx5.freeim.server.dao.OnlineUserDao;
import com.zx5.freeim.server.handler.utils.Utils;
import com.zx5.freeim.server.msg.Message;

import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ConnectHandler {
    private static final Logger logger = LoggerFactory.getLogger(MsgHandler.class);

    private OnlineUserDao onlineUserDao;

    private OfflineMsgDao offlineMsgDao;

    @Autowired
    public ConnectHandler(SocketIOServer server, OnlineUserDao onlineUserDao, OfflineMsgDao offlineMsgDao) {
        this.onlineUserDao = onlineUserDao;
        this.offlineMsgDao = offlineMsgDao;

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

            var mappedUser = onlineUserDao.getUserById(userId);
            if (mappedUser != null && mappedUser.getToken().equals(token)) {
                onlineUserDao.updateSessionId(userId, token, client.getSessionId());
                logger.info("Client[{}] connected from {}", client.getSessionId(),
                        handshake.getAddress().getHostString());

                // push offline message
                offlineMsgDao.getOfflineMsgById(userId).forEach(msg -> {
                    var msgBytes = Utils.makeDefaultMsg()
                            .setHead(Utils.makeDefaultHead()
                                    .setMsgId(msg.getMsgId())
                                    .setSenderId(msg.getSender())
                                    .setReceiverId(userId)
                                    .setMsgType(Message.MsgType.MSG_P2P)
                                    .setMsgContentType(msg.getType())
                                    .setTimestamp(msg.getTimestamp())
                                    .build())
                            .setBody(msg.getContent())
                            .build()
                            .toByteArray();
                    client.sendEvent("receiveMsg", msgBytes);
                });
                offlineMsgDao.removeOfflineMsgById(userId);
            } else {
                // onlineUserDao.updateSessionId(userId, token, client.getSessionId());
                logger.info("Client[{}] userId and token mismatch", client.getSessionId());
                client.sendEvent("bad-token");
                client.disconnect();
            }
        };
    }

    private DataListener<Void> onClose() {
        return (client, data, ackSender) -> client.disconnect();
    }

    private DisconnectListener onDisconnect() {
        return client -> logger.info("Client[{}] disconnect.", client.getSessionId());
    }
}
