const express = require('express');

const app = express();
let requestCount = 0;

// Create a middleware function that logs each incoming request’s 
// HTTP method, URL, and timestamp to the console


app.use((req, res, next)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(new Date());
    next();
});

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
  });
  
app.post('/user', function(req, res) {
res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3000);
