import express from 'express';
import cors from 'cors';
import path from 'path';

import mongoose from 'mongoose';
import { UserModel, User } from './schemas/user.schema.js';

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
      name: 'Li',
      email: 'lee@bitwise.com'
    });
      user.save().then(user => {
        console.log(user, 'saved')
        res.json({ data: user });
      });
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
 
app.get('/', function(req, res) {
   res.json({message:'test'});
});

// app.get('/user', function(req, res) {
//     res.json({message:'test'});
//  });

app.get('/users', function(req,res){
    UserModel.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(404);
      res.json({error: err})
    })
});


app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost: ${PORT}`);
})







