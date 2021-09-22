import express from 'express';
import cors from 'cors';
import path from 'path';
import { UserModel } from './schemas/user.schema';

const app = express();
const __dirname = path.resolve();
const PORT = 3501;

app.use(cors());


app.get('/', function(req, res) {
   res.json({message:'test'});
});

app.get('/users', function(req,res){
    UserModel.find().then( users => {
        console.log('found users', users);
        res.json({data: users})
    })
});


app.get('/create-user', function(req,res){
const user = new UserModel({
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
});

user.save().then(user => {
    console.log(user, 'saved');
    res.json({data: user});
})
});
// app.get('/users', function(req,res){
//     res.sendFile(path.join(__dirname, 'users.json'));
// });


app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost: ${PORT}`);
})
