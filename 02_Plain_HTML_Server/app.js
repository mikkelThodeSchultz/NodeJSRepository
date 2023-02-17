const express = require("express");
const app = express();

//Setting 'public' as our static folder
//for security reasons, all inside this folder is allowed for clients to see
app.use(express.static("public"));

//__dirname gets your absolute path is
//__dirname + html page is the path to the file
//remember the '/' in fron of the file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
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
