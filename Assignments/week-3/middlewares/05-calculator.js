const express = require('express');
const app = express();

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// Define a POST route to handle JSON data
app.post('/sum', (req, res) => {
  // Access the parsed JSON data from req.body
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.status(200).send('Sum: ' + (a + b));
});

app.post('/subtract', (req, res) => {
  // Access the parsed JSON data from req.body
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.status(200).send('Difference: ' + (a - b));
});

app.post('/multiply', (req, res) => {
  // Access the parsed JSON data from req.body
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.status(200).send('Product: ' + (a * b));
});

app.post('/divide', (req, res) => {
  // Access the parsed JSON data from req.body
  const a = parseFloat(req.body.a);
  const b = parseFloat(req.body.b);
  res.status(200).send('Quotient: ' + (a / b));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
