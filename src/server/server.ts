import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose'
 
// mongoose.connect('mongodb://localhost:12701/testdb1')
// .then(()=> {
//     console.log('db connected')
// })
// .catch(err => console.log(err))

mongoose.connect('mongodb://localhost:27017/test').then(() => {
      console.log('successfully connected to db');
  }).catch(err => console.log(err, 'error connecting to db'))
98
const app = express();
const __dirname = path.resolve();
const PORT = 3501;

app.use(cors());


app.get('/', function(req, res) {
   res.json({message:'test'});
});

app.get('/users', function(req,res){
    res.sendFile(path.join(__dirname, 'users.json'));
});


app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost: ${PORT}`);
})
