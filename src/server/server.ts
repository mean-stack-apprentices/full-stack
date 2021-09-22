import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import { UserModel } from './schemas/user.schema.js';

 
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

app.get('/users', function(req,res){
    //res.sendFile(path.join(__dirname, 'users.json'));
    UserModel.find().then(users => {
        console.log('found users', users);
        res.json({data: users});
    }).catch( err => {
        res.status(501);
        res.json({errors: err})
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
        res.json({data});
    })
    .catch(err => {
        res.json(501);
        res.json({errors: err})
    })
});


app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost:${PORT}`);
})


// app.get('/create-user', function(req, res){
//     const newUser = {
//         name: '', email: ''
//     }
//     const user = new UserModel({newUser});

//     // user.save().then(userr => {
//     //     console.log(userr, 'saved');
//     //     res.json({data: userr})
//     // })
// })

// // const user = new UserModel({
// //     name: 'kim',
// //     email: 'kim392@gmail.com'
// // });

// // user.save().then(user => {
// //     console.log(user, 'saved');
// // })