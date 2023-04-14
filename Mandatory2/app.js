import dotenv from "dotenv/config";
import express from "express";
const app = express();

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));

import helmet from "helmet"
app.use(helmet());

import session from "express-session"
app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
}));

import rateLimit from 'express-rate-limit'
app.use("/auth", rateLimit({
	windowMs: 15 * 60 * 1000, 
	max: 5, 
	standardHeaders: true, 
	legacyHeaders: false, 
}));

import authRouter from "./routers/authRouter.js"
app.use(authRouter);



app.get("*", (req, res) => {
    res.send("<h1>404 - Not Found</h1>")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log(error)
    };
    console.log("Server is running on port: ", PORT)
});