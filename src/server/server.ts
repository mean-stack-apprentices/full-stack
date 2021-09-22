import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';

const {Schema, model} = mongoose;
interface User {
        id: number;
	    name: string;
        username: string;
	    email: string;
	  }

 // 2. Create a Schema corresponding to the document interface.
 const userSchema = new Schema<User>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    
  });

 // 3. Create a Model.
 export const UserModel = model<User>('User', userSchema);
 
 const user = new UserModel({
     id: 1,
     name: 'Leanne Graham',
     username: 'Bret',
     email: 'Sincere@april.biz'
 })
 

mongoose.connect('mongodb://localhost:27017/test').then(() => {
console.log('connected to db');
}).catch(err => console.log(err, 'connecting to db')) 
 
const app = express();
const __dirname = path.resolve();
const PORT = 3501;

app.use(cors());


app.get('/', function(req, res) {
   res.json({message:'test'});
});

app.get('/users', function(req,res){
    res.sendFile(path.join(__dirname, 'users.json'));
});


app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost: ${PORT}`);
})
