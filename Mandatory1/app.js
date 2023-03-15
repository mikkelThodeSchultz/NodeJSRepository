import express from 'express';
const app = express();
app.use(express.static("public"));
import path from "path";

app.get('/', (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"))
});

app.get('/node', (req, res) => {
    res.sendFile(path.resolve("public/pages/node/node.html"))
});

app.get('/mavenandnpm', (req, res) => {
    res.sendFile(path.resolve("public/pages/mavenAndNpm/mavenAndNpm.html"))
});

app.get('/javascript', (req, res) => {
    res.sendFile(path.resolve("public/pages/javascript/javascript.html"))
});





const PORT = 8080
app.listen(PORT, (error) => {
    if (error){
        console.log(error)
    };
    console.log("Server is running on port: ", PORT)
});
