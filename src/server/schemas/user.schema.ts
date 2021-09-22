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
 
 
 
 mongoose.connect('mongodb://localhost:27017/test').then(() => {
console.log('connected to db');
}).catch(err => console.log(err, 'connecting to db')) 
 