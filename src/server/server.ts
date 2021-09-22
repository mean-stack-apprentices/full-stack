import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

import mongoose from 'mongoose';
import { UserModel } from './schemas/user.schema.js';

 mongoose.connect('mongodb://localhost:27017/test').then(() => {
      console.log('connected to db');
  }).catch(err => console.log(err, 'connecting to db'))


  const app = express();
  const __dirname = path.resolve();
  const PORT = 3501;
  
  app.use(cors());
  
  app.get('/create-user', function (req, res) {
    const user = new UserModel({
      name: 'Li',
      email: 'lee@bitwise.com'
    });
      user.save().then(user => {
        console.log(user, 'saved')
        res.json({ data: user });
      });
       });
      
app.post('/create-user',function(req,res){
    const users = JSON.parse(fs.readFileSync(path.join(__dirname,'mongodb://localhost:27017/test' ), 'utf8'));
    users.push(req.body);
    fs.writeFileSync(path.join(__dirname, 'mongodb://localhost:27017/test'), JSON.stringify(users))
    res.sendFile(path.join(__dirname, 'mongodb://localhost:27017/test'));


    });
 
app.get('/', function(req, res) {
   res.json({message:'test'});
});

// app.get('/user', function(req, res) {
//     res.json({message:'test'});
//  });

app.get('/users', function(req,res){
    res.sendFile(path.join(__dirname, 'mongodb://localhost:27017/test'));
});


app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost: ${PORT}`);
})







