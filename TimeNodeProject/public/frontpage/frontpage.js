let resultData;
fetch("api/time")
.then(response => response.json())
.then(result => {
    resultData = result;
})
.then(() => {
    console.log(resultData)
});


function isItFriday(){
    const dayDiv = document.getElementById('verify-day-wrapper');
    dayDiv.innerText = "";
    const createP = document.createElement("p");
    if (resultData.data==='Friday'){
        createP.innerText = "YES, it is " + resultData.data;
    } else {
        createP.innerText = `No, it is not.. it is ${resultData.data} stupid`
    }
    dayDiv.appendChild(createP);
};
