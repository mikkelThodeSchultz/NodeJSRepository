//tells the script that we require the express library
const express = require("express");
//Instanciate the library
const app = express();
//To import and instanciate on the same line
//const app = require("express")();
//tells the app to parse the body as JSON if it has the right headers
app.use(express.json());
//This entire thing is a route
//get request for the "/" endpoint and a callback functions with a response
//req = request - res = response
app.get("/", (req, res) => {
    res.send({message: "Our first route" });
});


let bicycleSPins = 0;
app.get("/spinthebicycle", (req, res) => {
    bicycleSPins += 1;
    res.send({message: `people have spun the bicycle wheel ${bicycleSPins} times`});
});

let numberIfKicks = 0;
app.get("/kickthedinosaur", (req,res) => {
    numberIfKicks +=1;
    res.send({message: `people have kicked the dinosaur ${numberIfKicks} times. Ow Ow Ow it says..`})
})

//Possible to send HTML as well
app.get("/about", (req,res) => {
    res.send(`
    <h1>About</h1>
    <h3>This is my about about. </h3>
    `)
});
// /bat?adjective=spooky
//The req.query returns an object with an adjective being equels to what comes after the =. 
app.get("/bat", (req,res) => {
    console.log(req.query);
    res.send({ message: `the bat is ${req.query.adjective}` });
});

// /bottle/large
// bottleSize is the req.params
app.get("/bottle/:bottleSize", (req,res) => {
    console.log(req.params)
    res.send({ bottleSize: req.params.bottleSize });
});

//Postrequest
app.post("/package", (req, res) => {
    console.log(req.body)
    
    res.send({ message: req.body });
});






//port 8080 is the Http Dev port, so it significes that we are under development
//Should be at the bottom for, atm, unknown reasons
// in terminal ctrl + C to stop the server
app.listen(8080);

