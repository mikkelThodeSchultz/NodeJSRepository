import { Router } from "express";
const router = Router();

//log in
router.get("/gotham/:name", (req, res) => {
    req.session.name = req.params.name;
    res.send({message: `Hi ${req.session.name}`});
});

//checks if you are logged in
router.get("/gotham", (req, res) => {
    if(!req.session.name) {
        return res.send({message: "Error. You are not welcome in this city."})
    }
    res.send({message: `I remember you ${req.session.name}`})
})

//log out
router.get("/leavegotham", (req, res) => {
    req.session.destroy(() => {
        res.send({});
    });
});

export default router;