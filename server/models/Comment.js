import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: "User"
        },
        content: {
            type: String,
            required: [true, "Please provide a title for the comment"],
            minLength: [4, "Please provide a title with atlleast 4 characters"],
            unique: true
        },
        post: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: "Post"
        }
    },
    { timestamp: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;