import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
 
const app = express();
const __dirname = path.resolve();
const PORT = 3501;

mongoose.connect('mongodb://localhost:27017/test')
.then(() => {
    console.log('Connected to DB Successfully');
})
.catch(err => console.log('Failed to Connect to DB', err))



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
