import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import { UserModel } from './schemas/user.schema.js';

 
const app = express();
const __dirname = path.resolve();
const PORT = 3501;

app.use(cors());


const user = new UserModel({
    name: 'aman',
    email: 'amankaur212@gmail.com'
});

user.save().then(user => {
    console.log(user, 'saved');
})



mongoose.connect('mongodb://localhost:27017/fullStack').then
( () => {
    console.log('Successfully connected to database');
}).catch( err => console.log('Error connecting to database'));


app.get('/', function(req, res) {
   res.json({message:'test'});
});

app.get('/users', function(req,res){
    //res.sendFile(path.join(__dirname, 'users.json'));
    UserModel.find().then(users => {
        console.log('found users', users);
        res.json({data: users});
    })
});


app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost:${PORT}`);
})
