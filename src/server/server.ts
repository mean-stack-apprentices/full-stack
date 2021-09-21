import express from "express";
const port = 3001;

const app = express();
app.get('/', function(req, res) {
  res.json({test: 'test'})
});


app.listen(port, function() {
  console.log(`running on http://localhost:${port}`)
}) 


