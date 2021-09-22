import express from 'express';
import cors from 'cors';
import path from 'path';

import { UserModel } from './schemas/user.schema.js'

const app = express();
const __dirname = path.resolve();
const PORT = 3501;

// const adminUser = new UserModel({name: 'admin', username:'admin'});
// adminUser.save(err => {
//     if (err) {
//         throw new Error('ouch.. admin aint save:/')
//     } else {
//         console.log('admin added to users')
//     }
// })

app.use(cors());

app.get('/', function(req, res) {
   res.json({message:'test'});
});
app.get('/users', function(req,res) {
    UserModel.find().then(users => res.json(users))
});

app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost:${PORT}`);
})
