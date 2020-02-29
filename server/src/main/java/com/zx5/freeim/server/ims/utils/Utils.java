/*
 * @author Zx55
 * @project server
 * @file Utils.java
 * @date 2020/2/28 22:46
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server.ims.utils;

import com.zx5.freeim.server.msg.Message;

public class Utils {
    public static Message.Msg makeAckMsg() {
        var head = Message.Head
                .getDefaultInstance()
                .toBuilder()
                .setMsgType(Message.MsgType.MSG_SERVER_ACK)
                .build();
        return Message.Msg
                .getDefaultInstance()
                .toBuilder()
                .setHead(head)
                .build();
    }
}
