const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const objectToString = obj =>
    Object.keys(obj).map(keyN => `${keyN}: ${obj[keyN]}`).join('\n');

app.get('/', (req, res) => res.send(objectToString(req.query)));    //query로!!
app.post('/', (req, res) => res.send(objectToString(req.body)));
app.put('/', (req, res) => res.send(objectToString(req.body)));
app.delete('/', (req, res) => res.send(objectToString(req.body)));

// test..?
app.listen(port, () => console.log(`Server listening on port ${port}!`));