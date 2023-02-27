const timeDiv = document.getElementById('startStopWatch');
let myInterval;
let timeAsNumber = Number(timeDiv.innerText);
isForward = true;

function increaseEverySecond(){
    if (isForward){
    timeAsNumber++
    } else {
        timeAsNumber--
    }
    timeDiv.innerText = timeAsNumber;
}

function startTimer(){
    myInterval = setInterval(increaseEverySecond, 1000);
}
function stopTimer(){
    clearInterval(myInterval);
}
function resetTimer(){
    timeAsNumber = 0;
    timeDiv.innerText = 0;
}
function forwardOrBackwards(){
    if (isForward){
        isForward = false;
    } else {
        isForward = true;
    }
}

