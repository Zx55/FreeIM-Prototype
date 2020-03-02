/*
 * @author Zx55
 * @project server
 * @file OnlineUserDao.java
 * @date 2020/3/2 23:46
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server.dao;

import com.zx5.freeim.server.model.OnlineUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class OnlineUserDao {
    private RedisTemplate<String, OnlineUser> redisTemplate;

    @Autowired
    public OnlineUserDao(RedisTemplate<String, OnlineUser> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public OnlineUser getUserById(String id) {
        return redisTemplate.opsForValue().get(id);
    }

    public void updateSessionId(String id, String token, UUID sessionId) {
        redisTemplate.opsForValue().set(id, new OnlineUser(id, token, sessionId));
    }
}
