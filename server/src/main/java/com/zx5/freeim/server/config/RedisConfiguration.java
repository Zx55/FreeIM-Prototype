/*
 * @author Zx55
 * @project server
 * @file RedisConfiguration.java
 * @date 2020/3/1 22:18
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server.config;

import com.zx5.freeim.server.model.OnlineUser;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.parser.ParserConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.SerializationException;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

@Configuration
public class RedisConfiguration {

    @Bean
    public RedisTemplate<String, OnlineUser> redisTemplate(RedisConnectionFactory factory) {
        var template = new RedisTemplate<String, OnlineUser>();
        template.setConnectionFactory(factory);

        template.setKeySerializer(new StringRedisSerializer());
        template.setHashKeySerializer(new StringRedisSerializer());
        template.setValueSerializer(new FastJsonRedisSerializer());
        template.setHashValueSerializer(new FastJsonRedisSerializer());
        template.afterPropertiesSet();
        return template;
    }
}

class FastJsonRedisSerializer implements RedisSerializer<OnlineUser> {
    public static final Charset DEFAULT_CHARSET = StandardCharsets.UTF_8;
    private static final Logger logger = LoggerFactory.getLogger(RedisConfiguration.class);

    static {
        ParserConfig.getGlobalInstance().setAutoTypeSupport(true);
    }

    @Override
    public byte[] serialize(OnlineUser onlineUser) throws SerializationException {
        if (onlineUser == null) {
            return new byte[0];
        }

        return JSON.toJSONString(onlineUser).getBytes(DEFAULT_CHARSET);
    }

    @Override
    public OnlineUser deserialize(byte[] bytes) throws SerializationException {
        if (bytes == null || bytes.length < 1) {
            return null;
        }

        return JSON.parseObject(new String(bytes, DEFAULT_CHARSET), OnlineUser.class);
    }
}

