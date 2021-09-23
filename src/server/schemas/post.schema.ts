import mongoose from 'mongoose';
export interface Post {
    title: string;
    body: string;
  
  }
  
  // 2. Create a Schema corresponding to the document interface.
  const postSchema = new mongoose.Schema<Post>({
    title: { type: String, required: true },
    body: { type: String, required: true },
  
  });
  
  // 3. Create a Model.
  export const PostModel = mongoose.model<Post>('Post', postSchema);