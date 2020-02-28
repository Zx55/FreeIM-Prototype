/*
 * @author Zx55
 * @project server
 * @file ServerApplication.java
 * @date 2020/2/28 11:31
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server;

import com.zx5.freeim.server.msg.Message;

import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOServer;
import com.zx5.freeim.server.utils.Utils;

public class NettySocketServerApp extends Thread {
    private int port;

    public NettySocketServerApp(final int port) {
        this.port = port;
    }

    @Override
    public void run() {
        var config = new Configuration();
        config.setHostname("localhost");
        config.setPort(port);

        final var server = new SocketIOServer(config);

        server.addConnectListener(client ->
                System.out.println("Client " + client.getSessionId() + " connected."));

        server.addEventListener("sendMsg", byte[].class, (client, data, ackSender) -> {
            var msg = Message.Msg.parseFrom(data);
            System.out.println("receive msg " + msg.getHead().getMsgId() + " from client "
                    + client.getSessionId());
            
            switch (msg.getHead().getMsgType()) {
                case MSG_P2P:
                case MSG_P2G: {
                    ackSender.sendAckData(Utils.makeAckMsg().toByteArray());
                    break;
                }

                default:
                    System.out.println("not supported");
            }
        });

        server.start();
        try {
            Thread.sleep(Integer.MAX_VALUE);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        server.stop();
    }

    public static void main(String[] args) {
        new NettySocketServerApp(8080).start();
    }
}
