const { SocketAddress } = require("net");

const spaceships =  [
    { name: "Chinese Weather Balloon", isPriceless: false, cost: 1_000_000},
    {name: undefined, type: "UFO", isPriceless: true, cost: Number.MAX_SAFE_INTEGER},
    {name: "Apollo 13", versionNumber: 13, isPriceless: false, cost: 2_000_000}
]



//spaceships.forEach((spaceships, index, array) => console.log(array));

// task: for all spaceship make the owner china

const ownedByChina = spaceships.map(spaceship => {
    // This syntax means that you return a new list with all of the objects parameters, and add owner as China.
    // This way you won't change the original list
    return {...spaceship, owner: "China"};
    }
);

// task: add a cost of "priceless" to all
// const spaceshipsWithPrice = spaceships.map(spaceships => {
// spaceships.isPriceless = true;
// return spaceships;
// });

// task: make 2 lists of spaceships that are either priceless or not.

// const spaceshipsThatArePriceless = spaceships.filter(spaceships => spaceships.isPriceless === true);
// const spaceshipsThatAreNotPriceless = spaceships.filter(spaceships => spaceships.isPriceless === false);


// task: find a spaceship that costs less than 2 million 


const spaceshipsThatCostUnderTwoMil = spaceships.find(spaceships => spaceships.cost < 2_000_000);

console.log(spaceshipsThatCostUnderTwoMil);