const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist'));

// app.get('/', (req, res) => { res.send(__dirname + '/public/index.html') })

app.listen(port, () => {
    console.log('Now listening on port ' + port);
})