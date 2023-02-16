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
    res.send(birds);
});

app.get("/birds/:id", (req, res) => {
    //get id from url
    const birdId = req.params.id;
    //set birdToFind to be bird with the id
    let birdToFind = birds.find(element => element.id == birdId);
    //checks if birdToFind is undefined
    if(birdToFind){
        res.send(birdToFind);
    } else {
        res.send({message: `Can't find bird with the id: ${birdId}`});
    }
});

app.listen(8080);