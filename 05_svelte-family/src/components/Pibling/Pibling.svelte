<script>
    import Nibling from "../Nibling/Nibling.svelte";

    export let name;
    // niblings = [] to say that it does not need to be used
    export let niblings = [];

    let cookies = ["🍪","🍪","🍪","🍪","🍪"];

    function handleShowLove(message) {
        console.log(message);
    }

    function handleAskForAllowance(message) {
        console.log(message)
        niblings.forEach(nibling => {
            nibling.money = nibling.money + 100;
            console.log(`${nibling.name}: just got 100, now ${nibling.name} have ${nibling.money}.`);
        });
    }

    function handleEatCookie(){
        if (cookies.length === 0){
            console.log("Damn, no more cookies");
        } else {
            cookies.pop();
            cookies = cookies;
            console.log("Here, have a cookie");
        }
    }

</script>


<h2>{name}</h2>

<p> Cookie Jar {cookies}</p>

<!--add the (something.id) so we can crud a specific element-->
{#each niblings as nibling (nibling.id)}
    <Nibling nibling={nibling} onShowLove={handleShowLove} piblingName={name} onAskForAllowance={handleAskForAllowance} onEatCookie={handleEatCookie}/>    
{/each}

