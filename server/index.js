import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

dotenv.config({ path: './.env.local' });

// executing the express app
const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);

// MONGOOSE (DATABASE connection) SETUP 
const PORT = process.env.PORT || 6001;
mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT} on ${process.env.MONGO_URL}`));
}).catch((error) => console.log(`${error} did not connect`));
