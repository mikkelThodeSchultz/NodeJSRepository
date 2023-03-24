import express from "express";


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// since our package.json now has type: modules, __dirname does not exist in modules/the browser
// there are files that you can import in node, one of the is path
//path.resolve finds your absolute path and adds whatever you add with the resolve method 
import path from "path";

// const acceptableJoke = await jokesImport.getJoke(); 
// if (acceptableJoke.type === "single"){
//     console.log(acceptableJoke.joke)
// } else {
//     console.log(acceptableJoke.setup + "\n" + acceptableJoke.delivery)
// } 

import templateEngine from "./util/templateEngine.js"

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle:"Upper | Welcome"
});

const irlQuests = templateEngine.readPage("./public/pages/irlQuests/irlQuest.html");
const irlQuestPage = templateEngine.renderPage(irlQuests, {
    tabTitle: "Upper | irlQuests"
});

const contact = templateEngine.readPage("./public/pages/contact/contact.html");
const contactPage = templateEngine.renderPage(contact, {
    tabTitle: "Upper | Contact"
});


app.get("/", (req, res) => {
    res.send(frontpagePage)
});

app.get("/contact", (req, res) => {
    res.send(contactPage)
});

app.get("/IRLQuests", (req, res) => {
    res.send(irlQuestPage);
});

app.get("/jokes", async (req, res) => {
    const jokesPage = await templateEngine.renderJokePage();
    res.send(jokesPage);
});

//----------------API------------------

app.post("/api/contact", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});




// you can create a script in the package.json file under 'scripts'
// name it dev and tell it to use port something
// on windows, you need to use 'set' and then the port. 

// or you could download the --save-dev cross-env packages
// now we can add     "cross-dev": "cross-env PORT=9090 nodemon app.js"     in our package.json scripts
// and     "cross-prod": "cross-prod PORT=8080 nodemon app.js"
// This is a lot like enviromental variables in spring. For passwords, PORTS etc. 
// now we can run the server by typing 'npm run cross-dev' and it will run the script above with the port 8080

// the || 8082 is a fallback port, in case i dont give it a port

const PORT = process.env.PORT || 8082;
app.listen(PORT, (error) => {
    if(error){
        console.log(error);
    }
    console.log("the server is running on port", PORT);
});