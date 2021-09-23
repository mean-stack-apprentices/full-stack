import express from 'express';
import cors from 'cors';
import path from 'path';
import { UserModel } from './schemas/user.schema.js'

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

app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost:${PORT}`);
})
