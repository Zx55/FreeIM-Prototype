/*
 * @author Zx55
 * @project server
 * @file ServerApplication.java
 * @date 2020/2/28 11:31
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server;

import com.corundumstudio.socketio.AckCallback;
import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOServer;

public class NettySocketServerApp implements Runnable {
    @Override
    public void run() {
        var config = new Configuration();
        config.setHostname("localhost");
        config.setPort(8080);

        final var server = new SocketIOServer(config);

        server.addConnectListener(client ->
                System.out.println("Client " + client.getSessionId() + "connected."));

        server.addEventListener("test-chat", String.class, (client, data, ackSender) -> {
            System.out.println("data: " + data);

            client.sendEvent("test-chat-ack", new AckCallback<>(String.class) {
                @Override
                public void onSuccess(String result) {
                    System.out.println("ack from client " + client.getSessionId() + ", data: " + result);
                }
            });
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
        new Thread(new NettySocketServerApp()).start();
    }
}
