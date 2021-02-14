const express = require("express");

const app = express();

app.get('/',(req,resp) => {

    resp.send('First Express code. horray');
});

app.listen(8080,
    ()=> console.log('Running Server on port 8080'));