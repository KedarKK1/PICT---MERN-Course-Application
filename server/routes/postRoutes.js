import express from "express";
import { addPost, getAllPost, getAPost, removeAPost, editPost } from "../controllers/postController.js";
import validateUser from "../middleware/validateUser.js";


const router = express.Router();

router.post("/add", validateUser, addPost);
router.get("/getAll", getAllPost);
router.get("/get/:idOfPost", getAPost);
router.post("/edit", validateUser, editPost);
router.post("/remove", validateUser, removeAPost);

export default router;