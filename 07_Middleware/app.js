import express from "express";
const app = express();

app.get("/inilinemiddleware", //This is the idea with middleware
    (req, res, next) => {
        console.log("Enters here first");
        next();
    },
    (req, res, next) => {
        console.log();
        res.send({ message: "Called the inline middleware"});
    }
);

function guard(req, res, next) { //Det her er middleware, det kan bruges til at checke om session er logged in, eller om noget eksistere i databasen osv. 
    if (req.query.name === "Mikkel") {
        req.myName = "Mikkel"; //We can create a new "variable" in our req and use it later. 
        return next();
    }
    res.send({message: "You are not allowed to enter"})
};

app.get("/frontdoor", guard, (req, res) => {
    res. send ({message: `Please enter, ${req.myName}`})
});

function houseButler(req, res, next) {
    console.log("This way...");
    next();
};

app.use("/room", houseButler);
import roomRouter from "./routers/roomRouter.js"
app.use(roomRouter);



app.get("*", (req, res) => {
    res.send("<h1>404 - Not Found - Øv!</h1>")
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));