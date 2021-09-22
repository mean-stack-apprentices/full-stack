import { UserModel } from './schema/user.schema.js';
import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
 
const app = express();
const __dirname = path.resolve();
const PORT = 3501;


mongoose.connect('mongodb://localhost:27017/test')
.then(() =>{
    console.log('Successfully connected to DB');
}).catch(err => {
    console.log(err, 'DB failed')
})


app.use(cors());
app.use(express.json());


app.get('/', function(req, res) {
   res.json({message:'test'});
});

app.get('/users', function(req,res){
    UserModel.find()
    .then(users => {
        res.json({data:users})
    }).catch(err => {
        res.status(501);
        res.json({errors: err})
    })
});

app.post('/create-user', function (req,res){
    const {name, email} = req.body;
    const user = new UserModel({
        name, 
        email,
    });
    user.save()
    .then(data => {
        res.json({data});
    }).catch(error =>{
        res.status(501);
        res.json({errors:error})
    })
});

app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost: ${PORT}`);
})
