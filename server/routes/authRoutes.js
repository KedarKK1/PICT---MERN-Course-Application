import express from "express";
// import controllers
import { register, login, getUserDetails } from "../controllers/authController.js";
// import middlewares
import validateUser from "../middleware/validateUser.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getUserDetails", validateUser, getUserDetails);

export default router;