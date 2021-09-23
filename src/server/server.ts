import express from 'express';
import cors from 'cors';
import path from 'path';

import mongoose from 'mongoose';
import { UserModel } from './schemas/user.schema.js';
import { PostModel } from './schemas/post.schema.js';

 mongoose.connect('mongodb://localhost:27017/test').then(() => {
      console.log('connected to db');
  }).catch(err => console.log(err, 'connecting to db'))


  const app = express();
  const __dirname = path.resolve();
  const PORT = 3501;
  

  app.use(cors());
  app.use(express.json())
  
  app.get('/create-user', function (req, res) {
    const user = new UserModel({
      name: 'mekdes',
      email:'mekdes123@bitwise.com'
    });
      user.save().then(user => {
        console.log(user, 'saved')
        res.json({ data: user });
      });
  });
       
  app.get('/create-post', function (req, res) {
    const post = new PostModel({
      title: 'first meanstack project',
      body:'test',
    });
      post.save().then(post => {
        console.log(post, 'saved')
        res.json({ data: post });
      });
       });
      
app.get('/', function(req, res) {
   res.json({message:'test'});
});


app.get('/posts', function (req, res) {
  PostModel.find()
    .then((posts) =>
      res.json({ data: posts }))
    .catch((err) => {
      res.status(501);
      res.json({ errors: err })
    })
})

app.get('/users', function(req,res){
    UserModel.find()
    .then((users) => 
      res.json({data:users}))
    .catch((err) => {
      res.status(404);
      res.json({error: err})
    })
});

app.post('/create-user',function(req,res){
  const newUser = new UserModel({
    email: req.body.email,
    name: req.body.name,
  });

  newUser.save()
  .then(user => {
    res.json({data: user});
  })
  .catch((err) => {
   res.status(404);
   res.json({error: err})
 })

});


app.post('/create-post', function (req, res) {
  const post = new PostModel({
    title: req.body.title,
    body: req.body.body,
   });

  post.save()
  .then(post => {
    res.json({data: post});
  })
  .catch((err) => {
   res.status(404);
   res.json({error: err})
 })

});




  app.listen(PORT, function () {
    console.log(`starting at localhost http://localhost: ${PORT}`);
  })
