const express = require('express');
const bodyParser = require('body-parser');
const service = require('./services');
const handlify = require('./handlers');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const usersHandler = handlify('users');
const postsHandler = handlify('posts');


app.get('/', usersHandler(service).get);
app.post('/', usersHandler(service).post);
app.put('/:id', usersHandler(service).put);
app.delete('/:id', usersHandler(service).delete);

app.get('/posts', postsHandler(service).get);
app.post('/posts', postsHandler(service).post);
app.put('/posts/:id', postsHandler(service).put);
app.delete('/posts/:id', postsHandler(service).delete);


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});