import dotenv from "dotenv/config";
import express from "express";
const app = express();
app.use(express.json())

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
        saveUninitialized: false,
        cookie: { secure: false }
}));


import rateLimit from 'express-rate-limit'
app.use("/auth", rateLimit({
	windowMs: 15 * 60 * 1000, 
	max: 20, 
	standardHeaders: true, 
	legacyHeaders: false
}));




import sessionRouter from "./routers/sessionRouter.js";
app.use(sessionRouter);

import authRouter from "./routers/authRouter.js";
app.use(authRouter);

import forgotPasswordRouter from "./routers/forgotPasswordRouter.js";
app.use(forgotPasswordRouter);





app.get("*", (req, res) => {
    res.send("<h1>404 - Not Found</h1>")
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log(error)
    };
    console.log("Server is running on port: ", PORT)
});

