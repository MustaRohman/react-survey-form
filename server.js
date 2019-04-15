const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('dist'));

// app.get('/', (req, res) => { res.send(__dirname + '/public/index.html') })

app.listen(port, () => {
    console.log('Now listening on port ' + port);
})

app.post('/submit-survey', (req, res) => {
    console.log('survey form route', req.body);
    res.send('Success');
})