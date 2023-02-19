const express = require("express");
const app = express();
app.use(express.json());

const birds = [
    {id : 2,
    name : 'sparrow',
    family : 'prunelidae',
    species : 'prunella modularis',
    wingspan : 21},

    {id : 1,
    name : 'crow',
    family : 'corvidae',
    species : 'corvus',
    wingspan : 150},
    
    {id : 3,
    name : 'golden eagle',
    family : 'accipitridae',
    species : 'aquila chrysaetos',
    wingspan : 228.6},    
    
    {id : 4,
    name : 'albatros',
    family : 'diomedeidae',
    species : 'diomedea epomophora',
    wingspan : 330},
    
    {id : 5,
    name : 'robin',
    family : 'muscicapidae',
    species : 'erithacus rubecula',
    wingspan : 22},
    
    {id : 6,
    name : 'blue jay',
    family : 'corvidae',
    species : 'cyanocitta cristata',
    wingspan : 43},

    {id : 7,
    name : 'great tit',
    family : 'paridae',
    species : 'parus major',
    wingspan : 25.5}
]


app.get("/", (req, res) => {
    res.send("Frontpage");
});

app.get("/birds", (req, res) => {
    res.send({data: birds});
});

app.get("/birds/:id", (req, res) => {
    //get id from url
    const birdId = req.params.id;
    //set birdToFind to be bird with the id
    const birdToFind = birds.find(element => element.id === Number(birdId));
    //checks if birdToFind is undefined
    if(birdToFind){
        res.send({data: birdToFind});
    } else {
        res.send({message: `Can't find bird with the id: ${birdId}`});
    }
});
app.post("/birds", (req, res) => {
    const birdToSave = req.body;
    // checks if the object is empty
    if (Object.keys(birdToSave).length !== 0){
        // finds the highest id and makes the new birds id autoincremental 
        const highestID = Math.max(...birds.map(o => o.id)) +1;
        birdToSave.id = highestID;
        birds.push(birdToSave);
        res.send({message: `${birdToSave.name} was added to the list`});
    } else {
        res.send ({message: 'not a valid bird'});
    }
    
});

app.patch("/birds/:id", (req, res ) => {
    const birdToUpdate = req.body;
    const birdId = req.params.id;
    //sets birdToUpdates id to be equal to the bird that is changed
    birdToUpdate.id = birdId;
    let birdToFind = birds.find(element => element.id === Number(birdId));
    if(birdToFind){
    birds[birds.indexOf(birdToFind)] = birdToUpdate;
    res.send({data: birds});
    } else {
        res.send({message: `Can't find bird with id: ${birdId} `})
    }
});

app.delete("/birds/:id", (req, res) => {
    const birdId = req.params.id;
    const birdToDelete = birds.find(element => element.id === Number(birdId));
    const birdIndex = birds.indexOf(birdToDelete);
    // checks if a bird could be found with the given id
    if (birdIndex === -1){
        res.send({message: `Can't find bird with id: ${birdId} `});
    } else {
    birds.splice(birdIndex,1);
    res.send({data: birds});
    };
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log(error);
        return; 
    }
    console.log("Server is running on port", PORT)
});