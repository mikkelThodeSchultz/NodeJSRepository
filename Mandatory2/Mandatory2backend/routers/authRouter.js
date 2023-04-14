import { Router } from "express";
const router = Router();

import bcrypt from "bcrypt";


router.get("/auth/logout", (req, res) => {
    res.send({});
});

router.post("/auth/login", (req, res) => {
    res.send({});
});

export default router;