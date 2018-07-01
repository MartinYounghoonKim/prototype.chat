const Redis = require('ioredis');
const redisConfig = {
    port: 6379,
    host: '127.0.0.1',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: '',
    db: 0
};
const redis = new Redis(redisConfig);

module.exports = redis;