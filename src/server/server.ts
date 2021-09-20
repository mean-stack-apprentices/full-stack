import express from 'express';
const app = express();
const port = 3000;


app.get('/', function(req, res) {
    res.json({test: 'express-app'})
  });


app.listen(port, function() {
    console.log(`running on http://localhost:${port}`)
  }) 
  