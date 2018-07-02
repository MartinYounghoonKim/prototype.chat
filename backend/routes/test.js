const express = require('express');
const router = express.Router();
const io = require('../core/socket');



exports.testing = () => {
    io.on('connection', (socket) => {
        var addedUser = false;
        // when the client emits 'add user', this listens and executes
        socket.on('add user', (username) => {
            if (addedUser) return;
            console.log(username);
            // we store the username in the socket session for this client
            socket.username = username;
            addedUser = true;
        });
    });
}


