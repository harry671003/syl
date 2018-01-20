const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/ping', (request, response) => response.send('pong'));
app.get('/', (request, response) => response.send('Hey, Syl here!'));

app.listen(port, () => console.log('Listening on port 3000'));