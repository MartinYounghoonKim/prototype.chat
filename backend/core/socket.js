const socket = require('socket.io');
const redis = require('socket.io-redis');

const server = require('../index');
const io = socket.listen(server);

io.adapter(redis({ host: 'localhost', port: 6379 }));

io.on('connection', (socket) => {
    console.log('socket connection success !');
});

module.exports = io;