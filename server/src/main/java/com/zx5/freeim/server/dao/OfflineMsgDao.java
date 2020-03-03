/*
 * @author Zx55
 * @project server
 * @file OfflineMsgDao.java
 * @date 2020/3/2 19:47
 * @version 1.0
 * Copyright (c) Zx55. All rights reserved.
 */

package com.zx5.freeim.server.dao;

import com.zx5.freeim.server.model.OfflineMsg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class OfflineMsgDao {
    private MongoTemplate mongoTemplate;

    @Autowired
    public OfflineMsgDao(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public List<OfflineMsg.Msg> getOfflineMsgById(String userId) {
        var result = mongoTemplate.findOne(new Query(Criteria.where("user_id").is(userId)), OfflineMsg.class, "offline_msg");

        if (result == null) {
            return new ArrayList<>();
        } else {
            return result.getMsgList();
        }
    }

    public void removeOfflineMsgById(String userId) {
        mongoTemplate.findAndRemove(new Query(Criteria.where("user_id").is(userId)), OfflineMsg.class, "offline_msg");
    }

    public void addOfflineMsg(String userId, OfflineMsg.Msg msg) {
        var result = mongoTemplate.findOne(new Query(Criteria.where("user_id").is(userId)), OfflineMsg.class, "offline_msg");

        if (result == null) {
            List<OfflineMsg.Msg> msg_list = new ArrayList<>();
            msg_list.add(msg);
            mongoTemplate.save(new OfflineMsg(userId, msg_list));
        } else {
            var msg_list = result.getMsgList();
            msg_list.add(msg);
            result.setMsgList(msg_list);
            mongoTemplate.findAndReplace(new Query(Criteria.where("user_id").is(userId)), result, "offline_msg");
        }
    }
}
