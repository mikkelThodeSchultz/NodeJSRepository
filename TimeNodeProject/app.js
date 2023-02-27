const express = require("express");
const app = express();
app.use(express.static("public"));

// --------- Pages --------------
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html" )
});



// --------- API --------------

const days = ["Sunday", "Monday", "Thursday", "Wednesday", "Thursday", "Friday", "Saturday"]
app.get("/api/time", (req, res) => {
    res.send({data: days[new Date().getDay()]})
});




const PORT = 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log(error);
        return; 
    }
    console.log("Server is running on port", PORT)
});
