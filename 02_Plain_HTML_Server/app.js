const express = require("express");
const app = express();

//Setting 'public' as our static folder
//for security reasons, all inside this folder is allowed for clients to see
app.use(express.static("public"));


//Import the methods in tanks.js
const {getTanks, addTank} = require("./utils/tanks.js");

let visitorCount = 0;


// Pages -------------------------------------------------------
//Sends file

//__dirname gets your absolute path is
//__dirname + html page is the path to the file
//remember the '/' in fron of the file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});


app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
});

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html")
});

app.get("/museumGuards", (req, res) => {
    res.sendFile(__dirname + "/public/museumGuards/museumGuards.html")
});

// API ----------------------------------------------------------
//Sends data

app.get("/api/tanks", (req, res) => {
    res.send({ data: getTanks})
});

app.get("/api/visitors", (req, res ) => {
    res.send({ data: visitorCount })
});

app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount});
});

app.get("/api/guards", (req, res) => {
    if (req.query.passport === "theskyisblue"){
        //Return stops the request so it does not try to send 2 responses
        return res.redirect("/api/tanks");
    } 
    res.send({ message: "You are not allowed to see the tanks. Give us the secret in the query string with the key being passport."})
});



//Falsy values includes
//Undefined, NaN, null and false
//Error is undefined as a standard, but gets a value if there is an error
const PORT = 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log(error);
        return; 
    }
    console.log("Server is running on port", PORT)
});
