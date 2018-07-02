const express = require('express');
const router = express.Router();
const io = require('../core/socket');

router.get('/', () => {
    io.emit('add user', {
        key: 'foo'
    });
});

module.exports = router;