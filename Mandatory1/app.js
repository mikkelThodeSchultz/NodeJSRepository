import express from 'express';
const app = express();
app.use(express.static("public"));
import templateEngine from './util/templateEngine.js';

app.use(express.urlencoded({ extended: true }));

//I use foundUser and adminLinkData to see if admin is logged in, if he is, then i show the admin page in the navbar. 
let foundUser = {};
let adminLinkData = "";
let users = [{
    username: "admin",
    password: "admin"
    },
    {
    username: "123",
    password: "123"
    }]

const javascript = templateEngine.readPage("./public/pages/javascript/javascript.html");
const javascriptPage = templateEngine.renderPage(javascript, {
    tabTitle: "Mandatory | Javascript",
    cssLink: `<link rel="stylesheet" href="pages/javascript/javascript.css">`
});

const node = templateEngine.readPage("./public/pages/node/node.html");
const nodePage = templateEngine.renderPage(node, {
    tabTitle: "Mandatory | Node",
    cssLink: `<link rel="stylesheet" href="pages/node/node.css">`
});

const npm = templateEngine.readPage("./public/pages/npm/npm.html");
const npmPage = templateEngine.renderPage(npm, {
    tabTitle: "Mandatory | NPM",
    cssLink: `<link rel="stylesheet" href="pages/npm/npm.css">`
});

const loginSignup = templateEngine.readPage("./public/pages/login-signup/login-signup.html");
const loginSignupPage = templateEngine.renderLoginPage(loginSignup, {
});

const admin = templateEngine.readPage("./public/pages/admin/admin.html");
const adminPage = templateEngine.renderPage(admin, {
    tabTitle:  "Mandatory | Admin",
    cssLink: `<link rel="stylesheet" href="pages/admin/admin.css">`
})

app.get('/frontpage', (req, res) => {
    //I have put the reading and rendering of the frontpage into the get method, so it can check who is logged in
    if (foundUser.password === "admin"){
        adminLinkData = `<a class="nav-button" href="/admin">Admin</a>`
    }
    const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
    const frontpagePage = templateEngine.renderPage(frontpage, {
        tabTitle:"Mandatory | Welcome",
        cssLink: `<link rel="stylesheet" href="pages/frontpage/frontpage.css">`,
        adminLink: adminLinkData
    }); 
    res.send(frontpagePage)
});

app.get('/node', (req, res) => {
    res.send(nodePage)
});

app.get('/admin', (req, res) => {
    res.send(adminPage)
});

app.get('/npm', (req, res) => {
    res.send(npmPage)
});

app.get('/javascript', (req, res) => {
    res.send(javascriptPage)
});

app.get('/', (req, res) => {
    res.send(loginSignupPage)
});

//-------------------API-------------------

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    foundUser = users.find(user => user.username === username && user.password === password)
    if(foundUser){    
        res.redirect("/frontpage");
    }
    else{
        console.log("Wrong username or password");
        res.redirect("/");
    }
});

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = {
        username: username,
        password: password
    };
    users.push(user)
    res.redirect("/");
});

app.post('api/admin', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    console.log(title + '\n' + description);
    res.redirect("/admin");
})

const PORT = 8080
app.listen(PORT, (error) => {
    if (error){
        console.log(error)
    };
    console.log("Server is running on port: ", PORT)
});

// I have used this site to encode my code for codesnippets 
// <!-- https://www.freewebtoolkit.com/html-encode -->
