import { Router } from "express";
const router = Router();

router.get("/api/session", async (req, res) => {
    const sessionData = {
        isUserLoggedIn: req.session.isUserLoggedIn
    }
    res.json(sessionData)
});

router.get("/api/logout", async (req, res) => {
    req.session.destroy();
    res.json(req.session)
        
});

export default router;
