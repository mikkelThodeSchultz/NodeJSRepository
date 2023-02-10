
//JS have something called hoisting, it makes it possible to call a function that is declared lower down in the code.
console.log(random(0,10));
function random(min, max){
    return Math.floor(Math.random() * (max - min +1) - min);
}

//A function without a name
const randomAnonymousFunction = function (min, max){
    return Math.floor(Math.random() * (max - min +1) - min);
};
console.log(randomAnonymousFunction(0,10));

//Arrow function
const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min +1) - min); 
};
console.log(randomArrowFunction(0,10));

//Smart arrow function
const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min +1) - min);
console.log(randomArrowFunctionCompact(0,10))

//genericAction() is a callback function 
function genericActionPerformer(genericAction, genericName) {
    // do stuff...

    return genericAction(genericName);
}

const walk = (name) => console.log (`${name} is walking.`)
const subtract = (name) => console.log(`${name} is subtracting.`);
const read = (name) => console.log(`${name} is reading.`);

// task: without touching the two functions above but still using them below
// task: make it console.log "Tobias is subtracting"
// task: use both functions

const tobiasName = 'Tobias';
const nicolasName= 'Nicolas';

genericActionPerformer(subtract, tobiasName)
genericActionPerformer(walk, nicolasName)

// How to do it in one line
console.log(genericActionPerformer((name) => `${name} is reading.`, "Andrea"))