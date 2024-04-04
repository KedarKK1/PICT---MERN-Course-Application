// import User from "../models/User.js";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";
  
export const addComment = async (req, res) => {
    try {
        const { content, postId } = req.body;
        if (!postId || !content) {
            return res.status(400).json({ success: false, message: "postId/content is not given in req.body!" });
        }
        let post = await Post.findById(postId);
        if(!post){
            throw new Error("No such post exists with given postId!");
        }
        let comment = new Comment({ post: postId, content, author: req.user.id });
        const savedComment = comment.save();
        let postCommentCount = post.commentCount;
        post.commentCount = postCommentCount + 1;
        let savedPost = await post.save();
        res.status(201).json({ success: true, comment: comment });

    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
}

export const getAllComment = async (req, res) => {
    try {
        let comment = await Comment.find();
        res.status(200).json({ success: true, comment: comment });
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
}

export const getAComment = async (req, res) => {
    try {
        const commentId = req.params.idOfComment;
        let comment = await Comment.findById( commentId );
        res.status(200).json({ success: true, comment });
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
}

export const removeAComment = async (req, res) => {
    try {
        const {id} = req.body;
        if (!id) {
            return res.status(400).json({ success: false, message: "id is not given in req.body!" });
        }
        let comment = await Comment.findById( id );
        if(comment){
            // check whether author of this post is same as req.user or not
            if(comment.author != req.user.id){
                return res.status(403).json({ success: false, message: "Unauthorized!" });
            }else{
                let post = await Post.findById(comment.post);

                if(!post){
                    throw new Error("No such post exists with given comment.post!");
                }
                let postCommentCount = post.commentCount;
                post.commentCount = Math.max(postCommentCount - 1, 0);
                let savedPost = await post.save();


                const removed = await Comment.deleteOne({ _id: comment._id });
                return res.status(200).json({ success: true, message: removed });
            }
        }else{
            return res.status(404).json({ success: false, message: "comment Not Found!" });
        }
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
}

export const editComment = async (req, res) => {
    try {
        const { id, content } = req.body;
        if (!id) {
            return res.status(400).json({ success: false, message: "id is not given in req.body!" });
        }
        if (!content) {
            return res.status(400).json({ success: false, message: "content is not given in req.body!" });
        }
        let comment = await Comment.findById( id );
        if(comment){
            // check whether author of this comment is same as req.user or not
            if(comment.author != req.user.id){
                return res.status(403).json({ success: false, message: "Unauthorized!" });
            }else{
                comment.content = content;
                const savedComment = await comment.save();
                return res.status(200).json({ success: true, message: savedComment });
            }
        }else{
            return res.status(404).json({ success: false, message: "comment Not Found!" });
        }
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
}