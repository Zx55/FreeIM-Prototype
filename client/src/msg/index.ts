import freeIMMsgProtoBuf from './msg';

export enum MsgType {
    MSG_SHAKE = 0,
    MSG_HEARTBEAT = 1,
    MSG_KICK_OUT = 2,
    MSG_P2P = 3,
    MSG_P2G = 4,
    MSG_OFFLINE_PULL = 5,
    MSG_OFFLINE_RET = 6,
    MSG_OFFLINE_ACK = 7,
    MSG_CLIENT_ACK = 8,
    MSG_SERVER_ACK = 9
}

export enum MsgContentType {
    MSG_TEXT = 0,
    MSG_IMAGE = 1,
    MSG_AUDIO = 2,
    MSG_VIDEO = 3,
    MSG_POSITION = 4
}

export interface IHead {
    msgId?: string | null;
    msgType?: MsgType | null;
    msgContentType?: MsgContentType | null;
    senderId?: string | null;
    receiverId?: string | null;
    timestamp?: number | null;
    statusReport?: number | null;
    extend?: string | null;
}

export interface IMsg {
    head?: IHead | null;
    body?: string | null;
}

export const makeMsg = (msg: IMsg) => {
    return freeIMMsgProtoBuf.freeIMClient.Msg.create(msg);
};

export const makeEncodedMsg = (msg: IMsg) => {
    return freeIMMsgProtoBuf.freeIMClient.Msg.encode(makeMsg(msg)).finish();
};

export const decodeMsg = (data: Uint8Array) => {
    return freeIMMsgProtoBuf.freeIMClient.Msg.decode(data);
};