/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.freeIMClient = (function() {

    /**
     * Namespace freeIMClient.
     * @exports freeIMClient
     * @namespace
     */
    var freeIMClient = {};

    /**
     * MsgType enum.
     * @name freeIMClient.MsgType
     * @enum {string}
     * @property {number} MSG_SHAKE=0 MSG_SHAKE value
     * @property {number} MSG_HEARTBEAT=1 MSG_HEARTBEAT value
     * @property {number} MSG_KICK_OUT=2 MSG_KICK_OUT value
     * @property {number} MSG_P2P=3 MSG_P2P value
     * @property {number} MSG_P2G=4 MSG_P2G value
     * @property {number} MSG_OFFLINE_PULL=5 MSG_OFFLINE_PULL value
     * @property {number} MSG_OFFLINE_RET=6 MSG_OFFLINE_RET value
     * @property {number} MSG_OFFLINE_ACK=7 MSG_OFFLINE_ACK value
     * @property {number} MSG_CLIENT_ACK=8 MSG_CLIENT_ACK value
     * @property {number} MSG_SERVER_ACK=9 MSG_SERVER_ACK value
     */
    freeIMClient.MsgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MSG_SHAKE"] = 0;
        values[valuesById[1] = "MSG_HEARTBEAT"] = 1;
        values[valuesById[2] = "MSG_KICK_OUT"] = 2;
        values[valuesById[3] = "MSG_P2P"] = 3;
        values[valuesById[4] = "MSG_P2G"] = 4;
        values[valuesById[5] = "MSG_OFFLINE_PULL"] = 5;
        values[valuesById[6] = "MSG_OFFLINE_RET"] = 6;
        values[valuesById[7] = "MSG_OFFLINE_ACK"] = 7;
        values[valuesById[8] = "MSG_CLIENT_ACK"] = 8;
        values[valuesById[9] = "MSG_SERVER_ACK"] = 9;
        return values;
    })();

    /**
     * MsgContentType enum.
     * @name freeIMClient.MsgContentType
     * @enum {string}
     * @property {number} MSG_TEXT=0 MSG_TEXT value
     * @property {number} MSG_IMAGE=1 MSG_IMAGE value
     * @property {number} MSG_AUDIO=2 MSG_AUDIO value
     * @property {number} MSG_VIDEO=3 MSG_VIDEO value
     * @property {number} MSG_POSITION=4 MSG_POSITION value
     */
    freeIMClient.MsgContentType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MSG_TEXT"] = 0;
        values[valuesById[1] = "MSG_IMAGE"] = 1;
        values[valuesById[2] = "MSG_AUDIO"] = 2;
        values[valuesById[3] = "MSG_VIDEO"] = 3;
        values[valuesById[4] = "MSG_POSITION"] = 4;
        return values;
    })();

    freeIMClient.Head = (function() {

        /**
         * Properties of a Head.
         * @memberof freeIMClient
         * @interface IHead
         * @property {string|null} [msgId] Head msgId
         * @property {freeIMClient.MsgType|null} [msgType] Head msgType
         * @property {freeIMClient.MsgContentType|null} [msgContentType] Head msgContentType
         * @property {string|null} [senderId] Head senderId
         * @property {string|null} [receiverId] Head receiverId
         * @property {number|Long|null} [timestamp] Head timestamp
         * @property {number|null} [statusReport] Head statusReport
         * @property {string|null} [extend] Head extend
         */

        /**
         * Constructs a new Head.
         * @memberof freeIMClient
         * @classdesc Represents a Head.
         * @implements IHead
         * @constructor
         * @param {freeIMClient.IHead=} [properties] Properties to set
         */
        function Head(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Head msgId.
         * @member {string} msgId
         * @memberof freeIMClient.Head
         * @instance
         */
        Head.prototype.msgId = "";

        /**
         * Head msgType.
         * @member {freeIMClient.MsgType} msgType
         * @memberof freeIMClient.Head
         * @instance
         */
        Head.prototype.msgType = 0;

        /**
         * Head msgContentType.
         * @member {freeIMClient.MsgContentType} msgContentType
         * @memberof freeIMClient.Head
         * @instance
         */
        Head.prototype.msgContentType = 0;

        /**
         * Head senderId.
         * @member {string} senderId
         * @memberof freeIMClient.Head
         * @instance
         */
        Head.prototype.senderId = "";

        /**
         * Head receiverId.
         * @member {string} receiverId
         * @memberof freeIMClient.Head
         * @instance
         */
        Head.prototype.receiverId = "";

        /**
         * Head timestamp.
         * @member {number|Long} timestamp
         * @memberof freeIMClient.Head
         * @instance
         */
        Head.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Head statusReport.
         * @member {number} statusReport
         * @memberof freeIMClient.Head
         * @instance
         */
        Head.prototype.statusReport = 0;

        /**
         * Head extend.
         * @member {string} extend
         * @memberof freeIMClient.Head
         * @instance
         */
        Head.prototype.extend = "";

        /**
         * Creates a new Head instance using the specified properties.
         * @function create
         * @memberof freeIMClient.Head
         * @static
         * @param {freeIMClient.IHead=} [properties] Properties to set
         * @returns {freeIMClient.Head} Head instance
         */
        Head.create = function create(properties) {
            return new Head(properties);
        };

        /**
         * Encodes the specified Head message. Does not implicitly {@link freeIMClient.Head.verify|verify} messages.
         * @function encode
         * @memberof freeIMClient.Head
         * @static
         * @param {freeIMClient.IHead} message Head message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Head.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msgId);
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.msgType);
            if (message.msgContentType != null && message.hasOwnProperty("msgContentType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.msgContentType);
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.senderId);
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.receiverId);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.timestamp);
            if (message.statusReport != null && message.hasOwnProperty("statusReport"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.statusReport);
            if (message.extend != null && message.hasOwnProperty("extend"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.extend);
            return writer;
        };

        /**
         * Encodes the specified Head message, length delimited. Does not implicitly {@link freeIMClient.Head.verify|verify} messages.
         * @function encodeDelimited
         * @memberof freeIMClient.Head
         * @static
         * @param {freeIMClient.IHead} message Head message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Head.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Head message from the specified reader or buffer.
         * @function decode
         * @memberof freeIMClient.Head
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {freeIMClient.Head} Head
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Head.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.freeIMClient.Head();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgId = reader.string();
                    break;
                case 2:
                    message.msgType = reader.int32();
                    break;
                case 3:
                    message.msgContentType = reader.int32();
                    break;
                case 4:
                    message.senderId = reader.string();
                    break;
                case 5:
                    message.receiverId = reader.string();
                    break;
                case 6:
                    message.timestamp = reader.int64();
                    break;
                case 7:
                    message.statusReport = reader.int32();
                    break;
                case 8:
                    message.extend = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Head message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof freeIMClient.Head
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {freeIMClient.Head} Head
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Head.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Head message.
         * @function verify
         * @memberof freeIMClient.Head
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Head.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isString(message.msgId))
                    return "msgId: string expected";
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                switch (message.msgType) {
                default:
                    return "msgType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.msgContentType != null && message.hasOwnProperty("msgContentType"))
                switch (message.msgContentType) {
                default:
                    return "msgContentType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                if (!$util.isString(message.senderId))
                    return "senderId: string expected";
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                if (!$util.isString(message.receiverId))
                    return "receiverId: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.statusReport != null && message.hasOwnProperty("statusReport"))
                if (!$util.isInteger(message.statusReport))
                    return "statusReport: integer expected";
            if (message.extend != null && message.hasOwnProperty("extend"))
                if (!$util.isString(message.extend))
                    return "extend: string expected";
            return null;
        };

        /**
         * Creates a Head message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof freeIMClient.Head
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {freeIMClient.Head} Head
         */
        Head.fromObject = function fromObject(object) {
            if (object instanceof $root.freeIMClient.Head)
                return object;
            var message = new $root.freeIMClient.Head();
            if (object.msgId != null)
                message.msgId = String(object.msgId);
            switch (object.msgType) {
            case "MSG_SHAKE":
            case 0:
                message.msgType = 0;
                break;
            case "MSG_HEARTBEAT":
            case 1:
                message.msgType = 1;
                break;
            case "MSG_KICK_OUT":
            case 2:
                message.msgType = 2;
                break;
            case "MSG_P2P":
            case 3:
                message.msgType = 3;
                break;
            case "MSG_P2G":
            case 4:
                message.msgType = 4;
                break;
            case "MSG_OFFLINE_PULL":
            case 5:
                message.msgType = 5;
                break;
            case "MSG_OFFLINE_RET":
            case 6:
                message.msgType = 6;
                break;
            case "MSG_OFFLINE_ACK":
            case 7:
                message.msgType = 7;
                break;
            case "MSG_CLIENT_ACK":
            case 8:
                message.msgType = 8;
                break;
            case "MSG_SERVER_ACK":
            case 9:
                message.msgType = 9;
                break;
            }
            switch (object.msgContentType) {
            case "MSG_TEXT":
            case 0:
                message.msgContentType = 0;
                break;
            case "MSG_IMAGE":
            case 1:
                message.msgContentType = 1;
                break;
            case "MSG_AUDIO":
            case 2:
                message.msgContentType = 2;
                break;
            case "MSG_VIDEO":
            case 3:
                message.msgContentType = 3;
                break;
            case "MSG_POSITION":
            case 4:
                message.msgContentType = 4;
                break;
            }
            if (object.senderId != null)
                message.senderId = String(object.senderId);
            if (object.receiverId != null)
                message.receiverId = String(object.receiverId);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.statusReport != null)
                message.statusReport = object.statusReport | 0;
            if (object.extend != null)
                message.extend = String(object.extend);
            return message;
        };

        /**
         * Creates a plain object from a Head message. Also converts values to other types if specified.
         * @function toObject
         * @memberof freeIMClient.Head
         * @static
         * @param {freeIMClient.Head} message Head
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Head.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msgId = "";
                object.msgType = options.enums === String ? "MSG_SHAKE" : 0;
                object.msgContentType = options.enums === String ? "MSG_TEXT" : 0;
                object.senderId = "";
                object.receiverId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.statusReport = 0;
                object.extend = "";
            }
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = message.msgId;
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                object.msgType = options.enums === String ? $root.freeIMClient.MsgType[message.msgType] : message.msgType;
            if (message.msgContentType != null && message.hasOwnProperty("msgContentType"))
                object.msgContentType = options.enums === String ? $root.freeIMClient.MsgContentType[message.msgContentType] : message.msgContentType;
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                object.senderId = message.senderId;
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                object.receiverId = message.receiverId;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.statusReport != null && message.hasOwnProperty("statusReport"))
                object.statusReport = message.statusReport;
            if (message.extend != null && message.hasOwnProperty("extend"))
                object.extend = message.extend;
            return object;
        };

        /**
         * Converts this Head to JSON.
         * @function toJSON
         * @memberof freeIMClient.Head
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Head.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Head;
    })();

    freeIMClient.Msg = (function() {

        /**
         * Properties of a Msg.
         * @memberof freeIMClient
         * @interface IMsg
         * @property {freeIMClient.IHead|null} [head] Msg head
         * @property {string|null} [body] Msg body
         */

        /**
         * Constructs a new Msg.
         * @memberof freeIMClient
         * @classdesc Represents a Msg.
         * @implements IMsg
         * @constructor
         * @param {freeIMClient.IMsg=} [properties] Properties to set
         */
        function Msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Msg head.
         * @member {freeIMClient.IHead|null|undefined} head
         * @memberof freeIMClient.Msg
         * @instance
         */
        Msg.prototype.head = null;

        /**
         * Msg body.
         * @member {string} body
         * @memberof freeIMClient.Msg
         * @instance
         */
        Msg.prototype.body = "";

        /**
         * Creates a new Msg instance using the specified properties.
         * @function create
         * @memberof freeIMClient.Msg
         * @static
         * @param {freeIMClient.IMsg=} [properties] Properties to set
         * @returns {freeIMClient.Msg} Msg instance
         */
        Msg.create = function create(properties) {
            return new Msg(properties);
        };

        /**
         * Encodes the specified Msg message. Does not implicitly {@link freeIMClient.Msg.verify|verify} messages.
         * @function encode
         * @memberof freeIMClient.Msg
         * @static
         * @param {freeIMClient.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.head != null && message.hasOwnProperty("head"))
                $root.freeIMClient.Head.encode(message.head, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.body);
            return writer;
        };

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link freeIMClient.Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof freeIMClient.Msg
         * @static
         * @param {freeIMClient.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @function decode
         * @memberof freeIMClient.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {freeIMClient.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.freeIMClient.Msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.head = $root.freeIMClient.Head.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.body = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof freeIMClient.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {freeIMClient.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Msg message.
         * @function verify
         * @memberof freeIMClient.Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.head != null && message.hasOwnProperty("head")) {
                var error = $root.freeIMClient.Head.verify(message.head);
                if (error)
                    return "head." + error;
            }
            if (message.body != null && message.hasOwnProperty("body"))
                if (!$util.isString(message.body))
                    return "body: string expected";
            return null;
        };

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof freeIMClient.Msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {freeIMClient.Msg} Msg
         */
        Msg.fromObject = function fromObject(object) {
            if (object instanceof $root.freeIMClient.Msg)
                return object;
            var message = new $root.freeIMClient.Msg();
            if (object.head != null) {
                if (typeof object.head !== "object")
                    throw TypeError(".freeIMClient.Msg.head: object expected");
                message.head = $root.freeIMClient.Head.fromObject(object.head);
            }
            if (object.body != null)
                message.body = String(object.body);
            return message;
        };

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof freeIMClient.Msg
         * @static
         * @param {freeIMClient.Msg} message Msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.head = null;
                object.body = "";
            }
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = $root.freeIMClient.Head.toObject(message.head, options);
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            return object;
        };

        /**
         * Converts this Msg to JSON.
         * @function toJSON
         * @memberof freeIMClient.Msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Msg;
    })();

    return freeIMClient;
})();

module.exports = $root;
