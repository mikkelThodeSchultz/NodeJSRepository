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
    //gets the request body
    const birdToSave = req.body;
    //adds the body to the list
    birds.push({data: birdToSave});
    res.send({message: `${birdToSave.name} was added to the list`});
});

app.patch("/birds/:id", (req, res ) => {
    const birdToUpdate = req.body;
    const birdId = req.params.id;
    //sets bird to updates id to be equal to the bird that is changed
    birdToUpdate.id = birdId;
    let birdToFind = birds.find(element => element.id === Number(birdId));
    birds[birds.indexOf(birdToFind)] = birdToUpdate
    res.send({message: `${birdToUpdate.name} was updated`})
});

app.delete("/birds/:id", (req, res) => {
    const birdId = req.params.id;
    const birdToDelete = birds.find(element => element.id === Number(birdId));
    birds.forEach((element, index) => {
        if (element === birdToDelete){
            birds.splice(index, 1)
        }
    });
    res.send({data: birds});
});

app.listen(8080, () => {
    console.log("Server is running on port", 8080)
})