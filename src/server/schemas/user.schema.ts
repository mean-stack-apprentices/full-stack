import mongoose from 'mongoose';
const {Schema, model} = mongoose;
interface User {
    name: string;
    email: string;
    avatar?: string;
  }
  
  // 2. Create a Schema corresponding to the document interface.
  const userSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
  });
  
  // 3. Create a Model.
  export const UserModel = model<User>('User', userSchema);