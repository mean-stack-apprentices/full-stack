import express from "express";

const port = 3000;
const app = express();

app.get('/', function (req, res) {
  console.log('app')
  res.json({ test: 'tes2' })
});


  

  app.listen(port, function () {
    console.log(`running on http://localhost:${port}`)
  })



