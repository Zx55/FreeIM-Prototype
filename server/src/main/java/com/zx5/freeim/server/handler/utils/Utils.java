/*
 * @author Zx55
 * @project server
 * @file Utils.java
 * @date 2020/2/28 22:46
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server.handler.utils;

import com.zx5.freeim.server.msg.Message;

public class Utils {
    public static Message.Head.Builder makeDefaultHead() {
        return Message.Head.getDefaultInstance().toBuilder();
    }

    public static Message.Msg.Builder makeDefaultMsg() {
        return Message.Msg.getDefaultInstance().toBuilder();
    }

    public static Message.Msg makeAckMsg() {
        var head = makeDefaultHead()
                .setMsgType(Message.MsgType.MSG_SERVER_ACK)
                .build();
        return makeDefaultMsg()
                .setHead(head)
                .build();
    }
}
