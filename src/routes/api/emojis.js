const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        emojis: '🤖👾✅'
    })
})

module.exports = router;