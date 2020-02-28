import io from 'socket.io-client';
import {
    MsgType,
    MsgContentType,
    IHead,
    makeEncodedMsg,
    decodeMsg,
} from './msg';

const main = () => {
    const socket = io('http://localhost:8080', {
        reconnectionAttempts: 5,
    });

    socket.on('connect', () => {
        console.log('socket connected');
        socket.on('disconnect', () => console.log('socket disconnect'));
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
