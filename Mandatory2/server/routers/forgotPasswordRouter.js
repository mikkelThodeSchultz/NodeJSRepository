import { Router } from "express";
const router = Router();
import db from "../databases/connection.js";
import { sendEmail } from "../util/nodemailer.js";
import bcrypt from "bcrypt";

let randomNumber;


router.post("/api/forgot-password", async (req, res) => {
    if (!req.body){
        return res.status(400).send({message: "Empty body"})
    };
    const email = req.body.email
    const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);
    if (!user){
        return res.status(400).send({message: "No user with that email"})
    };
    randomNumber = Math.floor(Math.random() * 100);
    req.session.randomNumber = randomNumber;
    req.session.email = email;
    sendEmail(email, 'Forgot Password', randomNumber.toString());
    return res.status(200).send({data: req.session});
});

router.put("/api/password", async (req, res) => {

    if (!req.body){
        return res.status(400).send({message: "Empty body"})
    };
    const code = req.body.forgotPasswordCode;
    if (code !== req.session.randomNumber){
        return res.status(400).send({message: "Wrong code"})
    }
    const email = req.session.email;
    const newPassword = req.body.newPassword;
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    await db.run("UPDATE users SET password = ? WHERE email = ?", [hashedPassword, email])
    return res.status(200).send({message: "User updated"})
    
})

export default router;