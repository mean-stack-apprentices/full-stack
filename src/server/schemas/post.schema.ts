import  mongoose from 'mongoose';
interface post {
    title:string;
    body:string;
}

const PostSchema = new mongoose.Schema({
    title: {type:String, required:true},
    body: {type:String, required:true},
});

export const PostModel = mongoose.model
('Post', PostSchema);