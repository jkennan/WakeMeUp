const express = require('express');
const app     = express();

// Request to main server 
app.get('/', (req, res) => {
    res.send('Server active');
})