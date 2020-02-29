import io from 'socket.io-client';
import {
    MsgType,
    MsgContentType,
    IHead,
    makeEncodedMsg,
    decodeMsg,
    makeEncodedHeartBeatMsg
} from './msg';

const main = () => {
    const socket = io('http://localhost:8090/im-service', {
        reconnectionAttempts: 5,
    });

    socket.on('connect', () => {
        console.log('socket connected');
        const interval = setInterval(() => {
            socket.emit("heartbeat", makeEncodedHeartBeatMsg(), () => console.log("beat"));
        }, 15000);

        socket.on('disconnect', () => {
            console.log('socket disconnect');
            clearInterval(interval);
        });
    });
    socket.on('connect_timeout', () => console.log('connect timeout'));
    socket.on('connect_error', () => console.log('socket error'));

    const headData: IHead = {
        msgId: "123456789",
        msgType: MsgType.MSG_P2P,
        msgContentType: MsgContentType.MSG_TEXT,
        senderId: "987654321",
        receiverId: "192837465",
        timestamp: 77989,
        statusReport: 1,
    };

    const encodedSentMsg = makeEncodedMsg({ head: headData, body: "hello world" });
    socket.emit('sendMsg', encodedSentMsg, (encodedAckMsg: Uint8Array) => {
        if (decodeMsg(encodedAckMsg).head.msgType !== MsgType.MSG_SERVER_ACK) {
            console.log("not ack");
        } else {
            console.log("ack");
        }
    });
};

main();
