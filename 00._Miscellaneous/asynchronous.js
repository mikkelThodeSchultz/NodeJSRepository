//Why asynchonous? 
//Because javascript is single-threaded


/*
Examples:
Fetching over a network
Many / Heavy calculations
Reading / Writing to files
Hashing (cryptographic functions)
Databases
*/

/* 
Solution 1: Callbacks (cb)
Con: Callback hell, Pyramid of doom
callback within callback within callback, hard to read

Solution 2: Promises
Promises is the same thing, but it looks better
Two states: 
- Pending (ongoing)
- Fulfilled (done)
    - Rejected
    - Resolved

Solution 3: Async/Await
Still the same thing, but it is just even better syntax than promises

*/

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try{
//             resolve("Yaaaaay");
//         } catch {
//             reject("Naaaay")
//         }
        
//     }, 1000);
// })
// .then(successMessage => console.log("success message:", successMessage))
// .catch(errorMessage => console.log("error message:", errorMessage));

function celebrate(name) {  
    return new Promise ((resolve, reject) => {
        if (name) { 
        resolve(`Celebration!! ${name}`)
        }
        else {
            reject("no celebration, first argument should be a name")
        }
    })
};

celebrate("Mikkel")
.then(successMessage => console.log(successMessage))
.catch(errorMessage => console.log(errorMessage));

function somethingGoodSomethingBad() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Good");
            } catch {
                reject("Bad");
            }
        }, 2000)
    })
};

somethingGoodSomethingBad()
.then(successMessage => console.log(successMessage))
.catch(errorMessage => console.log(errorMessage));


//IIFE
//Imeadietly invoked function expression
(async function getGoodOrBadMessage () {
    try{
    const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
    const celebrationMessage = await celebrate("Torben");
    console.log(somethingGoodSomethingBadMessage, celebrationMessage);
    } 
    catch{

    }
}) ()

function parallel() {
    Promise.all([somethingGoodSomethingBad(), celebrate("All of us")])
}

