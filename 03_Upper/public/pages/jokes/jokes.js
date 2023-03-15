const URL = "/api/jokes/"

fetch(URL)
.then(response => response.json())
.then((result) => {


    console.log(result);
    // const tanksWrapperDiv = document.getElementById("tanks-wrapper");

    // result.data.forEach(tank => {
    //     // Never use innerHTML with scripts, cause it could include dangerous scripts. XSS (cross side scripting)
    //     const tankDiv = document.createElement("div");
    //     const tankNameP = document.createElement("p");
    //     // the || "" is if there is no name or nationality, it replaces undefined with ""
    //     tankNameP.innerText = tank.name || "";
    //     const tankNationalityP = document.createElement("p");
    //     tankNationalityP.innerText = tank.nationality || "";
    //     tankDiv.appendChild(tankNameP);
    //     tankDiv.appendChild(tankNationalityP);

    //     const breakBr = document.createElement("br");
    //     tankDiv.appendChild(breakBr);

    //     tanksWrapperDiv.appendChild(tankDiv);
    // });

});