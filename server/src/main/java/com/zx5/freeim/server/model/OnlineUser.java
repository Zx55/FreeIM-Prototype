/*
 * @author Zx55
 * @project server
 * @file OnlineUser.java
 * @date 2020/2/29 23:49
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server.model;

import org.springframework.data.annotation.Id;

import java.io.Serializable;

public class OnlineUser implements Serializable {
    @Id
    private String userId;

    private String token;

    private String sessionId;

    public OnlineUser(String userId, String token, String uuid) {
        setUserId(userId);
        setToken(token);
        setSessionId(uuid);
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    @Override
    public String toString() {
        return "OnlineUser{" +
                "userId='" + userId + '\'' +
                ", token='" + token + '\'' +
                ", sessionId='" + sessionId + '\'' +
                '}';
    }
}
