const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, this is the home route!');
});

router.get('/about', (req, res) => {
    res.send('About page');
});

module.exports = router;
