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
      
        name: 'Doe',
        email: 'Goe@bitwise.com'
    });

    user.save().then(user => {
        console.log(user, 'saved');
        res.json({data: user})
    })
})
app.post('/users', function(req, res) {
    const users = getResource('users');
   users.push(req.body);
    saveFile('users', users);
    res.json(users);
})
function getResource(resourceName: string) {
    const dataString = fs.readFileSync(path.join(__dirname, resourceName + 'mongodb://localhost:27017/test'), 'utf8');
    return JSON.parse(dataString);
}

function saveFile(resourceName: string, data: any) {
    fs.writeFileSync(path.join(__dirname, resourceName + 'mongodb://localhost:27017/test'), JSON.stringify(data))
}
app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost: ${PORT}`);
})
