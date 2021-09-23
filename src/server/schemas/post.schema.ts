import mongoose from 'mongoose'
import type { Post } from '../../shared/models/post.model'

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    user: {type: String,}
})

export const PostModel = mongoose.model<Post>('post', postSchema); 