

fetch("https://www.boredapi.com/api/activity")
.then(response => response.json())
.then(result => {
    // save the div inside the fetch call to save memory, if it is outside the scope
    // the const questDiv will use memory all the time. Now it will be discarded after the fetch call
    
    //const questDiv = document.getElementById("quest");
    //questDiv.innerText = result.activity;

    //a better way to do it would be
    document.getElementById("quest").innerText = result.activity;
    
});
