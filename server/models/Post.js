import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: "User"
        },
        title: {
            type: String,
            required: [true, "Please provide a title"],
            minLength: [4, "Please provide a title with atlleast 4 characters"],
            unique: true
        },
        content: {
            type: String,
            required: true,
            min: 10
        },
        commentCount: {
            type: Number,
            default: 0
        }
    },
    { timestamp: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;