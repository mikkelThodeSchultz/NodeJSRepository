import { Router } from "express";
const router = Router();
import db from "../databases/connection.js";
import bcrypt from "bcrypt";


router.post("/auth/login", async (req, res) => {
    if (!req.body){
        return res.status(400).send({message: "Empty body"})
    };
    const user = await db.get("SELECT * FROM users WHERE email = ?", [req.body.email]);
    if (!user){
        return res.status(400).send({message: "No user with that email"})
    };
    let isSame = await bcrypt.compare(req.body.password, user.password);
    if (!isSame){
        return res.status(400).send({message: "Email and password does not match"})
    };
    req.session.isUserLoggedIn = true;
    return res.status(200).send({data: req.session});
});

router.post("/auth/signup", async (req, res) => {
    
    if (!req.body){
        return res.status(400).send({message: "Empty body"})
    };
    const user = await db.get("SELECT * FROM users WHERE email = ?", [req.body.email]);
    if (user) {
        return res.status(400).send({message: "The mail is already taken"})
    };
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const result = db.run("INSERT INTO users (name, email, password) VALUES (?,?,?);", 
    [req.body.name, req.body.email, hashedPassword]);

    req.session.isUserLoggedIn = true;
    return res.status(200).send({data: req.session});
}); 


export default router;