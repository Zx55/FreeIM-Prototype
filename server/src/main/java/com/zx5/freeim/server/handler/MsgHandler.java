/*
 * @author Zx55
 * @project server
 * @file MsgEventHandler.java
 * @date 2020/2/29 17:32
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server.handler;

import com.zx5.freeim.server.dao.OfflineMsgDao;
import com.zx5.freeim.server.dao.OnlineUserDao;
import com.zx5.freeim.server.handler.utils.Utils;
import com.zx5.freeim.server.model.OfflineMsg;
import com.zx5.freeim.server.msg.Message;

import com.corundumstudio.socketio.SocketIONamespace;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.DataListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MsgHandler {
    private static final Logger logger = LoggerFactory.getLogger(MsgHandler.class);

    private SocketIONamespace namespace;

    private OnlineUserDao onlineUserDao;

    private OfflineMsgDao offlineMsgDao;

    @Autowired
    public MsgHandler(SocketIOServer server, OnlineUserDao onlineUserDao, OfflineMsgDao offlineMsgDao) {
        this.onlineUserDao = onlineUserDao;
        this.offlineMsgDao = offlineMsgDao;
        this.namespace = server.getNamespace("/im-service");

        namespace.addEventListener("sendMsg", byte[].class, onSendMsg());
    }

    private DataListener<byte[]> onSendMsg() {
        return (client, data, ackSender) -> {
            var msg = Message.Msg.parseFrom(data);
            var header = msg.getHead();
            logger.info("Client[{}] send message[{}]", client.getSessionId(), header.getMsgId());

            switch (header.getMsgType()) {
                case MSG_P2P:
                case MSG_P2G: {
                    ackSender.sendAckData(Utils.makeAckMsg().toByteArray());

                    var receiverId = header.getReceiverId();
                    var mappedUser = onlineUserDao.getUserById(receiverId);
                    if (mappedUser != null) {
                        var receiver = this.namespace.getClient(mappedUser.getSessionId());
                        receiver.sendEvent("receiveMsg", data);
                        logger.info("send to User[{}] - session[{}]", receiverId, receiver.getSessionId());
                    } else {
                        var offlineMsg = new OfflineMsg.Msg(header.getMsgId(), header.getSenderId(),
                                header.getMsgContentType(), header.getTimestamp(), msg.getBody());
                        offlineMsgDao.addOfflineMsg(receiverId, offlineMsg);
                        logger.info("User[{}] offline", msg.getHead().getReceiverId());
                    }
                    break;
                }

                default:
                    logger.error("Client[{}] send unsupported message[{}]", client.getSessionId(), header.getMsgId());
            }
        };
    }
}
