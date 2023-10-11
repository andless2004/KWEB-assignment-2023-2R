const express = require('express');
const app = express();
const port = 3000;

// query
app.get('/factorial', (req, res) => {
    const { number } = req.query;
    return res.redirect(`/factorial/${number}`);
});

// dynamic routing
app.get('/factorial/:number', (req, res) => {
    const { number } = req.params;
    const num = parseInt(number, 10);   // +'123' = 123 | +'123asd'=NaN | parseInt('123abc')=123
    let s = 1;
    for (let i = 0; i < num; i++) 
        s *= (i + 1);
    return res.send(`${num}! = ${s}`);
});

// test..?
app.listen(port, () => console.log(`Server listening on port ${port}!`));