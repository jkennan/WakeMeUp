const express = require('express');
const app     = express();
var path = require('path');


app.use(express.static(__dirname));


// Request to main server 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})




app.listen(8080, () => console.log('API running on port 8080'));