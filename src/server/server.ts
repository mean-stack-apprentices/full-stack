import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';
import { UserModel } from './schemas/user.schema.js';

mongoose .connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log('connected to db');
  }).catch(err => console.log(err, 'connecting to db'));

  const app = express();
const __dirname = path.resolve();
const PORT = 3501;

app.use(cors());
app.get('/', function(req, res) {
  res.json({message:'test'});
});


app.get('/users', function (req, res) {
  UserModel.find().then(users => {
    console.log('found users', users);
    res.json({data:users})
});

});

app.get('/create-user', function (req, res) {
  const user = new UserModel({
    name: 'Mekdes',
    email: 'mekdesb123@bitwise.com'
  
  });

  // app.get('/create-user', function (req, res) {
  //   const user = new UserModel({
  //     name: 'sol',
  //     email: 'solomon@bitwise.com'
    
  //   });

    user.save().then(user => {
      console.log(user, 'saved')
      res.json({ data: user });
    })
  });
  app.post('/create-users', function (req, res) {
    console.log('posted', req.body);
  
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'mongodb://localhost:27017/test'), 'utf8'));
    
    users.push(req.body);
    fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users))
  
    
    res.sendFile(path.join(__dirname, 'users.json'));
     
  });


  app.listen(PORT, function () {
    console.log(`starting at localhost http://localhost: ${PORT}`);
  })




