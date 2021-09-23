import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import { UserModel } from './schemas/user.schema.js';
import { PostModel } from './schemas/post.schema.js';

 
const app = express();
const __dirname = path.resolve();
const PORT = 3501;

mongoose.connect('mongodb://localhost:27017/fullStack').then
( () => {
    console.log('Successfully connected to database');
}).catch( err => console.log('Error connecting to database'));


app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
   res.json({message:'test'});
});

//Users
app.get('/users', function(req,res){
    UserModel.find().then(users => {
        console.log('found users', users);
        res.json({data: users});
    }).catch( err => {
        res.status(501).json({errors: err});
        
    })
});

app.post('/create-user', function(req,res){
    const {name,email} = req.body;
    const user = new UserModel({
        //name: req.body.name
        name,
        email,
    });
    user.save()
    .then((data) => {
        console.log(data, 'saved');
        res.json({data});
    })
    .catch(err => {
        res.status(501).json({errors: err});
    })
});
// Posts
app.get('/post', function(req,res){
    PostModel.find().then(posts => {
        console.log('found posts', posts);
        res.json({data: posts});
    }).catch( err => {
        res.status(501).json({errors: err});
        
    })
});

app.post('/create-post', function(req,res){
    const {body, title} = req.body;
    const post = new PostModel({
        body,
        title
    });
    post.save()
    .then((data) => {
        console.log(data, 'post saved');
        res.json({data});
    })
    .catch(err => {
        res.status(501).json({errors: err});
    })
});


app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost:${PORT}`);
})


