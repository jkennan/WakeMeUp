const express = require('express');
const app     = express();
const path    = require('path');
const parser  = require('body-parser');
const api     = require('./api');
const port    = process.env.PORT || 5000;

app.use(express.static(__dirname));
app.use(parser.urlencoded({ extended : true }));
app.use(parser.json());
app.use('/api', api);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Request to main server 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})


app.listen(port, () => console.log(`API running on port ${port}`));