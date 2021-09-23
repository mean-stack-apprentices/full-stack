import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import { UserModel } from './schemas/user.schema.js';
 import { PostModel } from './schemas/post.schema.js';
const app = express();
const __dirname = path.resolve();
const PORT = 3501;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test')
.then(() => {
    console.log('Connected to DB Successfully');
})
.catch(err => console.log(err, 'connecting to db'));


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

app.post('/create-user', function(req,res){
    const {name,email} = req.body;
    const user = new UserModel({
        name,
        email,
    })
user.save()
    .then(user => {
        res.json({data:user});
    })
    .catch(err => {
        res.status(501);
        res.json({errors: err});
    })
    
});

app.get('/posts', function(req,res){
        PostModel.find()
        .then(posts => res.json({data: posts}))
        .catch(err => {
            res.status(502)
            res.json({errors: err})
        })
    });


app.post('/create-post', function(req,res){
        const {title,body} = req.body;
        const post = new PostModel({
            title,
            body,
        })

        post.save()
        .then(post => {
            res.json({data:post});
        })
        .catch(err => {
            res.status(501);
            res.json({errors: err});
        })
});

app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost: ${PORT}`);
}
)