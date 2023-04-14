import { Router } from "express";
const router = Router();

// with 2 of the same endpoints, we will get the first one.
// next(); will call the next endpoint of the same text
router.get("/room", (req, res, next) => {
    res.send({message: "I am in room 1"})
});

router.get("/room", (req, res, next) => {
    res.send({message: "I am in room 2"})
});

export default router;