import express from "express";

const port = 3000;
const app = express();
import cors from "cors";
import path from "path";
const __dirname = path.resolve();


app.use(cors());
app.get('/users', function (req, res) {
  res.sendFile(path.join(__dirname, 'users.json'));
   
});

app.get('/', function (req, res) {
  console.log('app')
  res.json({ test: 'tes2' })
});


  

  app.listen(port, function () {
    console.log(`running on http://localhost:${port}`)
  })



