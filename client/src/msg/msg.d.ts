import * as $protobuf from "protobufjs";

export namespace freeIMClient {

    /** MsgType enum. */
    enum MsgType {
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

    /** MsgContentType enum. */
    enum MsgContentType {
        MSG_TEXT = 0,
        MSG_IMAGE = 1,
        MSG_AUDIO = 2,
        MSG_VIDEO = 3,
        MSG_POSITION = 4
    }

    /** Properties of a Head. */
    interface IHead {

        /** Head msgId */
        msgId?: (string|null);

        /** Head msgType */
        msgType?: (freeIMClient.MsgType|null);

        /** Head msgContentType */
        msgContentType?: (freeIMClient.MsgContentType|null);

        /** Head senderId */
        senderId?: (string|null);

        /** Head receiverId */
        receiverId?: (string|null);

        /** Head timestamp */
        timestamp?: (number|null);

        /** Head statusReport */
        statusReport?: (number|null);

        /** Head extend */
        extend?: (string|null);
    }

    /** Represents a Head. */
    class Head implements IHead {

        /**
         * Constructs a new Head.
         * @param [properties] Properties to set
         */
        constructor(properties?: freeIMClient.IHead);

        /** Head msgId. */
        public msgId: string;

        /** Head msgType. */
        public msgType: freeIMClient.MsgType;

        /** Head msgContentType. */
        public msgContentType: freeIMClient.MsgContentType;

        /** Head senderId. */
        public senderId: string;

        /** Head receiverId. */
        public receiverId: string;

        /** Head timestamp. */
        public timestamp: (number);

        /** Head statusReport. */
        public statusReport: number;

        /** Head extend. */
        public extend: string;

        /**
         * Creates a new Head instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Head instance
         */
        public static create(properties?: freeIMClient.IHead): freeIMClient.Head;

        /**
         * Encodes the specified Head message. Does not implicitly {@link freeIMClient.Head.verify|verify} messages.
         * @param message Head message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: freeIMClient.IHead, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Head message, length delimited. Does not implicitly {@link freeIMClient.Head.verify|verify} messages.
         * @param message Head message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: freeIMClient.IHead, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Head message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Head
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): freeIMClient.Head;

        /**
         * Decodes a Head message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Head
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): freeIMClient.Head;

        /**
         * Verifies a Head message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Head message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Head
         */
        public static fromObject(object: { [k: string]: any }): freeIMClient.Head;

        /**
         * Creates a plain object from a Head message. Also converts values to other types if specified.
         * @param message Head
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: freeIMClient.Head, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Head to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Msg. */
    interface IMsg {

        /** Msg head */
        head?: (freeIMClient.IHead|null);

        /** Msg body */
        body?: (string|null);
    }

    /** Represents a Msg. */
    class Msg implements IMsg {

        /**
         * Constructs a new Msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: freeIMClient.IMsg);

        /** Msg head. */
        public head?: (freeIMClient.IHead|null);

        /** Msg body. */
        public body: string;

        /**
         * Creates a new Msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Msg instance
         */
        public static create(properties?: freeIMClient.IMsg): freeIMClient.Msg;

        /**
         * Encodes the specified Msg message. Does not implicitly {@link freeIMClient.Msg.verify|verify} messages.
         * @param message Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: freeIMClient.IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link freeIMClient.Msg.verify|verify} messages.
         * @param message Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: freeIMClient.IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): freeIMClient.Msg;

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): freeIMClient.Msg;

        /**
         * Verifies a Msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Msg
         */
        public static fromObject(object: { [k: string]: any }): freeIMClient.Msg;

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @param message Msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: freeIMClient.Msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
