/*
 * @author Zx55
 * @project server
 * @file OfflineMsg.java
 * @date 2020/3/2 13:06
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server.model;

import com.zx5.freeim.server.msg.Message;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document(collection = "offline_msg")
public class OfflineMsg {
    @Id
    private String userId;

    @Field("msg_list")
    private List<Msg> msgList;

    public OfflineMsg(String userId, List<Msg> msgList) {
        setUserId(userId);
        setMsgList(msgList);
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public List<Msg> getMsgList() {
        return msgList;
    }

    public void setMsgList(List<Msg> msgList) {
        this.msgList = msgList;
    }

    public static class Msg {
        @Id
        private String id;

        @Field("sender")
        private String sender;

        @Field("type")
        private Message.MsgContentType type;

        @Field("timestamp")
        private long timestamp;

        @Field("content")
        private String content;

        public Msg(String id, String sender, Message.MsgContentType type, long timestamp, String content) {
            setId(id);
            setSender(sender);
            setType(type);
            setTimestamp(timestamp);
            setContent(content);
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getSender() {
            return sender;
        }

        public void setSender(String sender) {
            this.sender = sender;
        }

        public Message.MsgContentType getType() {
            return type;
        }

        public void setType(Message.MsgContentType type) {
            this.type = type;
        }

        public long getTimestamp() {
            return timestamp;
        }

        public void setTimestamp(long timestamp) {
            this.timestamp = timestamp;
        }

        public String getContent() {
            return content;
        }

        public void setContent(String content) {
            this.content = content;
        }
    }
}
