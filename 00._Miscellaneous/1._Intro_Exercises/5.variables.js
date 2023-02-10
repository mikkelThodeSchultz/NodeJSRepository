"use strict"
// use strict catches alot of bad style coding and naming

//Why not to use var
{
    var somevalue = true;
    {
        var someValue = false;
    }
    console.log(someValue);
}

{
    let someValue = true;
    {
        let someValue = false;
    }
    console.log(someValue)
}

// var vil printe 666666, men let er fanget i loopets scope så den vil print 0-5
for (var i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
}