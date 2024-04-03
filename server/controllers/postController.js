// import User from "../models/User.js";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

export const addPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ success: false, message: "title/content is not given in req.body!" });
        }
        let post = new Post({ title, content, author: req.user.id });
        const savedPost = post.save();
        res.status(201).json({ success: true, post });

    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
}

export const getAllPost = async (req, res) => {
    try {
        let posts = await Post.find();
        res.status(200).json({ success: true, posts: posts });
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
}

export const getAPost = async (req, res) => {
    try {
        const postId = req.params.idOfPost;
        let post = await Post.findById( postId );
        let comments = await Comment.find({ post: post._id });
        res.status(200).json({ success: true, post, comments });
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
}

export const removeAPost = async (req, res) => {
    try {
        const id = req.body;
        if (!id) {
            return res.status(400).json({ success: false, message: "id is not given in req.body!" });
        }
        let post = await Post.findById( id );
        if(post){
            // check whether author of this post is same as req.user or not
            if(post.author != req.user.id){
                return res.status(403).json({ success: false, message: "Unauthorized!" });
            }else{
                const removed = await Post.deleteOne({ _id: post._id });
                res.status(200).json({ success: true, message: removed });
            }
        }else{
            return res.status(404).json({ success: false, message: "Post Not Found!" });
        }
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
}

export const editPost = async (req, res) => {
    try {
        const { id, title, content } = req.body;
        if (!id) {
            return res.status(400).json({ success: false, message: "id is not given in req.body!" });
        }
        if (!title && !content) {
            return res.status(400).json({ success: false, message: "title & content both are not given in req.body!" });
        }
        let post = await Post.findById( id );
        if(post){
            // check whether author of this post is same as req.user or not
            if(post.author != req.user.id){
                return res.status(403).json({ success: false, message: "Unauthorized!" });
            }else{
                post.title = title;
                post.content = content;
                const savedPost = await post.save();
                return res.status(200).json({ success: true, message: savedPost });
            }
        }else{
            return res.status(404).json({ success: false, message: "Post Not Found!" });
        }
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
}