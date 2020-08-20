const express = require('express');
const router = express.Router();

// main api route
router.get('/', ((req, res, next) => {
    res.json({
        message: 'Hello world!'
    })
}))

// api files
const emoji = require('./api/emojis');

// api routes
router.use('/emoji', emoji);

module.exports = router;