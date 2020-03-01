/*
 * @author Zx55
 * @project server
 * @file SocketServerApplication.java
 * @date 2020/2/29 17:27
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server;

import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOServer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SocketServerApplication {
    @Value("${freeim.server.socket.host}")
    private String host;

    @Value("${freeim.server.socket.port}")
    private Integer port;

    @Bean
    public SocketIOServer socketIOServer() {
        var config = new Configuration();
        config.setHostname(host);
        config.setPort(port);

        var server = new SocketIOServer(config);
        server.addNamespace("/im-service");
        return server;
    }

    public static void main(String[] args) {
        SpringApplication.run(SocketServerApplication.class, args);
    }
}
