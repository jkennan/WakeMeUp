const express = require('express');
const app     = express();

// Request to main server 
app.get('/', (req, res) => {
    res.send('Server active');
})


app.listen(8080, () => console.log('API running on port 8080'));