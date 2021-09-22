import mongoose from 'mongoose';

const {Schema, model} = mongoose;
interface User {
    name: string;
    email: string;
    avatar?: string;
}

// Create a schema corresponding to the document interface
const userSchema = new Schema<User>({
    name: {type: String, required: true},
    email:{type: String, required: true},
    avatar: String
});

// Create a model
export const UserModel = model<User>('User', userSchema);