/*
 * @author Zx55
 * @project server
 * @file Main.java
 * @date 2020/3/2 1:06
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server;

import com.alibaba.fastjson.JSON;
import com.zx5.freeim.server.model.OnlineUser;

import java.nio.charset.StandardCharsets;

public class Main {
    public static void main(String[] args) {
        var user = new OnlineUser("123456789", "qwertyuiop", "cc8ce974-593d-45cd-b571-592fa84a52d3");
        var jsonString = JSON.toJSONString(user);
        var bytes = jsonString.getBytes();
        System.out.println("bytes: " + jsonString);
        System.out.println(JSON.parseObject(new String(bytes, StandardCharsets.UTF_8), OnlineUser.class));
    }
}
