import { Router } from "express";
const router = Router();

router.get("/auth/logout", (req, res) => {
    res.send({});
});

// we use post request so we can hide the login info 
router.post("/auth/login", (req, res) => {
    res.send({});
});

export default router;