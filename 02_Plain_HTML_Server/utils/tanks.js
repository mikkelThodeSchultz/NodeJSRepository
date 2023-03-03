const {tanks} = require("./tanks.json");



function getTanks(){
    return tanks;
}

function addTank(tank) {
    tanks.push(tank);
    return tanks;
}

//export the methods from the module
module.exports = {
    getTanks,
    addTank
};