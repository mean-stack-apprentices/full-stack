import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
 
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
