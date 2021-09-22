import mongoose from 'mongoose';
const {Schema, model} = mongoose

mongoose.connect('mongodb://localhost:27017/full-stack')
.then(() => {
    console.log('conneted to db')
}).catch(err => console.log(err, 'error connecting to db'))

interface User {
    name: string,
    username: string,
}

const userSchema = new Schema<User>({
    name: {type: String, required: true},
    username: {type: String, required: true},
})

export const UserModel = model<User>('User',userSchema)
