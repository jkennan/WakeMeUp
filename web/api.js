const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    res.send('API is running. Please choose a valid route.');
})

module.exports = router;