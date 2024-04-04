import express from "express";
import { addComment, getAllComment, getAComment, removeAComment, editComment } from "../controllers/commentController.js";
import validateUser from "../middleware/validateUser.js";


const router = express.Router();

router.post("/add", validateUser, addComment);
router.get("/getAll", getAllComment);
router.get("/get/:idOfComment", getAComment);
router.post("/edit", validateUser, editComment);
router.post("/remove", validateUser, removeAComment);

export default router;