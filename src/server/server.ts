import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import { UserModel } from './schemas/user.schema.js';
 
const app = express();
const __dirname = path.resolve();
const PORT = 3501;

mongoose.connect('mongodb://localhost:27017/test')
.then(() => {
    console.log('Connected to DB Successfully');
})
.catch(err => console.log('Failed to Connect to DB', err))



app.use(cors());


app.get('/', function(req, res) {
   res.json({message:'test'});
});

app.get('/users', function(req,res){
    UserModel.find()
    .then(users => res.json({data: users}))
    .catch(err => {
        res.status(501)
        res.json({errors: err})
    })
});


app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost: ${PORT}`);
})
