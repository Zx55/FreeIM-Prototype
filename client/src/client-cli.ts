import io from 'socket.io-client';

const socket = io('http://localhost:8080');

socket.on('connect_error', () => console.log('connect error'));
socket.on('connect_timeout', () => console.log('connect timeout'));
socket.on('connect', () => console.log('socket connected'));
socket.on('disconnect', () => console.log('socket disconnect'));

socket.emit('test-chat', 'hello world', () => console.log('send successfully'));
socket.on('test-chat-ack', () => {
    console.log("ack from server");
    setTimeout(() => socket.close(), 3000);
});
