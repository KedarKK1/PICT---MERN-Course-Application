import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try {
        // get input
        let { email, password, username } = req.body;
        // validate the input
        if (!email || !password || !username) {
            return res.status(400).json({ success: false, message: "Email/Password/Username is not given in req.body!" });
        }

        // check whether user with that email already exists or not
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, message: "User with same Email already exists!" });
        }

        // dealing with jwt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // console.log("hashedPassword ", hashedPassword);

        // create user
        let newUser = await User.create({ username: username, email, password: hashedPassword });
        const data = { user: { id: newUser.id } };

        const authToken = jwt.sign(data, process.env.JWT_SECRET);

        res.status(201).json({ success: true, authToken });
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
}

export const login = async (req, res) => {
    try {
        let { email } = req.body;
        let userGivenPassword = req.body.password;

        if (!email || !userGivenPassword) {
            return res.status(400).json({ success: false, message: "Email/Password is not given in req.body!" });
        }

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Please try to login using different credentials!" });
        }

        const passwordCompare = await bcrypt.compare(userGivenPassword, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success: false, message: "Please try to login using different credentials!" });
        }
        const data = { user: { id: user.id } };

        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        res.status(200).json({ success: true, authToken, userId: user.id });


    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
}

export const getUserDetails = async (req, res) => {
    try {
        const userId = req.user.id;
        if (!userId) {
            return res.status(400).json({ success: false, message: "userId not given!" });
        }

        const user = await User.findById(userId).select("-password");
        res.send(user);

    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
}