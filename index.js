var express = require('express');
var app = express();


app.get('/',  (req, res)  => {
  res.send('Test API!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});