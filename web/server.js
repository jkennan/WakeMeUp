const express = require('express');
const app     = express();
const parser  = require('body-parser');
const api     = require('./api');

app.use(parser.urlencoded({ extended : true }));
app.use(parser.json());

const port = process.env.PORT || 8080;

app.use('/api', api);

// Request to main server 
app.get('/', (req, res) => {
    res.send('Server active');
})


app.listen(8080, () => console.log('API running on port 8080'));