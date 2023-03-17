import express from "express";
const app = express();

// since our package.json now has type: modules, __dirname does not exist in modules/the browser
// there are files that you can import in node, one of the is path
//path.resolve finds your absolute path and adds whatever you add with the resolve method 
import path from "path";

import jokes from "./util/jokes.js" 


app.use(express.static("public"));


const acceptableJoke = await jokes.getJoke(); 
if (acceptableJoke.type === "single"){
    console.log(acceptableJoke.joke)
} else {
    console.log(acceptableJoke.setup + "\n" + acceptableJoke.delivery)
} 


app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"))
});

app.get("/IRLQuests", (req, res) => {
    res.sendFile(path.resolve("public/pages/irlQuests/irlQuest.html"))
});

app.get("/jokes", (req, res) => {
    res.sendFile(path.resolve("public/pages/jokes/jokes.html"))
});

//----------------API------------------



const PORT = 8080;
app.listen(PORT, (error) => {
    if(error){
        console.log(error);
    }
    console.log("the server is running on port", PORT);
});