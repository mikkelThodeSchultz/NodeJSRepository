//dotenv needs to be in the top, as it injects all the enviromental variables from the .env file. /config loads the variables.
import dotenv from "dotenv/config";
import express from "express";

const app = express();

import helmet from "helmet"
app.use(helmet());

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));

import session from "express-session"
app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        // secure skal være false fordi vi ikke bruger Https
        cookie: { secure: false }
}));

import rateLimit from 'express-rate-limit'

//This one is for all pages coming below the apiLimiter
const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(apiLimiter);

//This one is only for "/auth" endpoints
app.use("/auth", rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 5 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}));

import authRouter from "./routers/authRouter.js"
app.use(authRouter);

import gothamRouter from "./routers/gothamRouters.js"
app.use(gothamRouter)

app.get("/piblings", (req, res) => {
    res.send({data: ["John", "Mark"]});
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));