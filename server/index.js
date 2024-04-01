import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: './.env.local' });

// executing the express app
const app = express();
app.use(express.json());
app.use(cors());

// MONGOOSE (DATABASE connection) SETUP 
const PORT = process.env.PORT || 6001;
mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT} on ${process.env.MONGO_URL}`));
}).catch((error) => console.log(`${error} did not connect`));
