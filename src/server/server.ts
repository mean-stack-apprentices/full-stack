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


app.get('/', function(req, res) {
   res.json({message:'test'});
});

app.get('/users', function(req,res){
    UserModel.find().then(users => {
        console.log('found users', users);
        res.json({data: users})
    })
});

app.get('/create-user', function(req, res) {
    const user = new UserModel({
      
        name: 'Saba',
        email: 'saba@bitwise.com'
    });

    user.save().then(user => {
        console.log(user, 'saved');
        res.json({data: user})
    })
})

app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost: ${PORT}`);
})
