import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import { UserModel } from './schemas/user.schema.js'
import { PostModel } from './schemas/post.schema.js';

mongoose.connect('mongodb://localhost:27017/full-stack')
.then(() => {
    console.log('conneted to db')
}).catch(err => console.log(err, 'error connecting to db'))

const app = express();
const __dirname = path.resolve();
const PORT = 3501;

app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
   res.json({message:'test'});
});
app.get('/users', function(req,res) {
    UserModel.find().then(users => res.json(users))
    .catch(err => {throw new Error ('server aint receive users')})
});
app.get('/posts', function(req, res) {
    res.json({message: 'got /posts'})
})

app.post('/addUser', function(req,res) {
    const newUser = new UserModel(req.body);
    newUser.save(err => {
        if (err) {
            throw new Error('ouch.. newUser aint save:/')
        } else {
            console.log('new user added to users')
        }
    })
    res.json(req.body);
});
app.post('/addPost', function(req, res) {
    const newPost =  new PostModel(req.body)
    newPost.save(err => {
        if (err) {
            throw new Error('ouch.. newPost aint save :/')
        } else {
            console.log('new post');
        }
    });
    res.json(req.body);
})

app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost:${PORT}`);
})
