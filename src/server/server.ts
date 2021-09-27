import express from 'express';
import cors from 'cors';
import path from 'path';
import { PostModel } from './schemas/post.schema.js';
import { UserModel } from './schemas/user.schema.js'
import mongoose from 'mongoose';

const app = express();
const __dirname = path.resolve();
const PORT = 3501;
mongoose.connect('mongodb://localhost:27017/full-stack')

.then(() => {
    console.log('Connected to DB Successfully');
})
.catch(err => console.log('Failed to Connect to DB', err))



app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
   res.json({message:'test'});
});

app.get('/posts', function(req,res){
    PostModel.find()
    .then(data => res.json({data}))
    .catch(err => {
        res.status(501)
        res.json({errors: err});
    })
});

app.get('/users', function(req,res){
    UserModel.find()
    .then(users => res.json({data: users}))
    .catch(err => {
        res.status(501)
        res.json({errors: err});
    })
});
app.post('/create-user', function(req,res){
    const {name, email, username} = req.body;
    const user = new UserModel({
        name,
        username,
        email,
    });
    user.save()
    .then((data) => {
        res.json({data});
    })
    .catch(err => {
        res.status(501);
        res.json({errors: err});
    })
});
app.put('/update-user', function(req,res){
    const {_id, updatedName,} = req.body;
    UserModel.findByIdAndUpdate(_id, {$set: {name: updatedName}})
    .then((data) => {
        res.json({data});
    })
    .catch(err => {
        res.status(501);
        res.json({errors: err});
    })
});
app.delete('/delete-user/:id', function(req,res){
    UserModel.findByIdAndDelete(req.params.id)
    .then(data => res.json(data))
    .catch(err => {
        res.status(501)
        res.json({errors: err});
    })
});

app.post('/create-post', function(req,res){
    const {title, body} = req.body;
    const post = new PostModel({
        title,
        body,
    });
    post.save()
    .then((data) => {
        res.json({data});
    })
    .catch(err => {
        res.status(501);
        res.json({errors: err});
    })
});


app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost:${PORT}`);
})
