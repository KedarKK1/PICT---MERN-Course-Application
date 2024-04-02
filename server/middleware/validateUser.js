import jwt from "jsonwebtoken";

const validateUser = (req, res, next) => {
    const token = req.header("auth-token");
    if(!token){
        return res.status(401).send({ success: false, message: "Please user valid token!" });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        
        next();
    } catch (err) {
        return res.status(400).send({ success: false, message: "Please authenticate using valid token!" });
    }
}

export default validateUser;