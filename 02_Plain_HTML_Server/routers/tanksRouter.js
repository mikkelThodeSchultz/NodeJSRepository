import { Router } from "express";
const router = Router();

router.get("/api/tanks", (req, res) => {
    res.send({ data: getTanks})
});


export default router;