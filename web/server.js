const express = require('express');
const app     = express();
var path      = require('path');
const parser  = require('body-parser');
const api     = require('./api');
const port    = process.env.PORT || 8080;

app.use(express.static(__dirname));
app.use(parser.urlencoded({ extended : true }));
app.use(parser.json());
app.use('/api', api);

// Request to main server 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})


app.listen(8080, () => console.log('API running on port 8080'));