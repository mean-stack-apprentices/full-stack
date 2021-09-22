import express from 'express';
import cors from 'cors';
import path from 'path';

import { UserModel } from './schemas/user.schema.js'

const app = express();
const __dirname = path.resolve();
const PORT = 3501;

app.use(cors());

app.get('/', function(req, res) {
   res.json({message:'test'});
});
app.get('/users', function(req,res) {
    UserModel.find().then(users => res.json(users))
});

app.post('/add-user', function(req,res) {
    const newUser = new UserModel(req.body);
    res.json(newUser);
});

app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost:${PORT}`);
})
