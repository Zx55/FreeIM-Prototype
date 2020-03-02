import io from 'socket.io-client';
import {
    MsgType,
    MsgContentType,
    IHead,
    makeEncodedMsg,
    decodeMsg,
} from './msg';
import { readLine, clearLine, closeReader } from './io';
import { getUser } from './user';
import { configure, getLogger } from 'log4js';

configure('./config/log4js.json');
const log = getLogger('app');
let msgCounter: number = 0;

const main = async () => {
    console.log("your user?");
    process.stdout.write('> ');
    let lineBuf = await readLine();
    const user = getUser(lineBuf);
    if (typeof(user) === 'undefined') {
        closeReader();
        log.error('invalid user: A or B');
        process.exit(-1);
    }

    const socket = io('http://localhost:8090/im-service', {
        reconnectionAttempts: 5,
        query: { userId: user.userId, token: user.token },
    });

    socket.on('connect', async () => {
        log.info(user.userId + ' connected');

        socket.on('disconnect', () => {
            log.info(user.userId + ' disconnect');
        });

        socket.on('receiveMsg', (encodedReceivedMsg: Uint8Array) => {
            clearLine();
            process.stdout.write('- ' + decodeMsg(encodedReceivedMsg).body + '\n> ');
        });

        while (true) {
            process.stdout.write('> ');
            lineBuf = await readLine();

            if (lineBuf === "quit") {
                break;
            }

            const headData: IHead = {
                msgId: msgCounter.toString(),
                msgType: MsgType.MSG_P2P,
                msgContentType: MsgContentType.MSG_TEXT,
                senderId: user.userId,
                receiverId: user.receiver,
                timestamp: new Date().getTime(),
                statusReport: 1,
            }
            const encodedSentMsg = makeEncodedMsg({ head: headData, body: lineBuf });
            socket.emit('sendMsg', encodedSentMsg, (encodedAckMsg: Uint8Array) => {
                if (decodeMsg(encodedAckMsg).head.msgType !== MsgType.MSG_SERVER_ACK) {
                    log.error(user.userId + " not ack");
                } else {
                    msgCounter += 1;
                    log.info(user.userId + " ack");
                }
            });
        }

        closeReader();
        socket.emit('close');
    })

    socket.on('bad-token', () => {
        log.error(user.userId + ' bad token');
    });
    socket.on('connect_timeout', () => log.error(user.userId + ' connect timeout'));
    socket.on('connect_error', () => log.error(user.userId + ' socket error'));
};

main();