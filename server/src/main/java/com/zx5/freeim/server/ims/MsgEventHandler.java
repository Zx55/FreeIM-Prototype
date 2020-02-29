/*
 * @author Zx55
 * @project server
 * @file MsgEventHandler.java
 * @date 2020/2/29 17:32
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server.ims;

import com.zx5.freeim.server.ims.utils.Utils;
import com.zx5.freeim.server.msg.Message;

import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MsgEventHandler {
    private static final Logger logger = LoggerFactory.getLogger(MsgEventHandler.class);

    @Autowired
    public MsgEventHandler(SocketIOServer server) {
        var namespace = server.addNamespace("/im-service");
        namespace.addConnectListener(onConnect());
        namespace.addEventListener("sendMsg", byte[].class, onSendMsg());
        namespace.addEventListener("heartbeat", byte[].class, onHeartBeat());
    }

    private ConnectListener onConnect() {
        return client -> {
            var handshake = client.getHandshakeData();
            logger.info("Client[{}] connected from {}", client.getSessionId(), handshake.getUrl());
        };
    }

    private DataListener<byte[]> onSendMsg() {
        return (client, data, ackSender) -> {
            var msg = Message.Msg.parseFrom(data);
            logger.info("Client[{}] send message[{}]", client.getSessionId(), msg.getHead().getMsgId());

            switch (msg.getHead().getMsgType()) {
                case MSG_P2P:
                case MSG_P2G: {
                    ackSender.sendAckData(Utils.makeAckMsg().toByteArray());
                    break;
                }

                default:
                    logger.error("Client[{}] send unsupported message[{}]", client.getSessionId(), msg.getHead().getMsgId());
            }
        };
    }

    private DataListener<byte[]> onHeartBeat() {
        return (client, data, ackSender) -> {
            var msg = Message.Msg.parseFrom(data);
            if (msg.getHead().getMsgType() == Message.MsgType.MSG_HEARTBEAT) {
                logger.info("Client[{}] send a heartbeat", client.getSessionId());
            } else {
                logger.error("Client[{}] wrong heartbeat", client.getSessionId());
            }
        };
    }
}
