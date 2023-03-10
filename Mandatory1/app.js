import express from 'express';
const app = express();
app.use(express.static("public"));
import path from "path";

app.get('/', (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"))
});


app.get('/about', (req, res) => {

});

// What is Node
// Datatypes, numbers, strings, objects, booleans and functions
    // Function vs Method
    // Arrow functions
    // Falsy types
// Data structures (Const, let, why not var)
// Terminal kommandoer 
// Måske anatomien for en URL
// Maven og NPM
// Express
// Nodemon
// Vercel
// Code snippets, not screenshots




const PORT = 8080
app.listen(PORT, (error) => {
    if (error){
        console.log(error)
    };
    console.log("Server is running on port: ", PORT)
});
