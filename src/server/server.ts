import express from 'express';
const app = express();
const port = 3002

app.get('/', function(req, res) {
    res.json({test: 'Hello'})
  });

app.listen(port, function() {
    console.log(`running on http://localhost:${port}`)
  }) 
  