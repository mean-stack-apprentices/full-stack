import mongoose from 'mongoose';


interface Post {
    title: string,
    body: string
}

const PostSchema = new mongoose.Schema<Post>({
    title: {type: String, required: true},
    body: {type: String, required: true}
});

export const PostModel = mongoose.model<Post>('Post', PostSchema);
