<script>
    export let nibling;
    export let onShowLove;
    export let piblingName;
    export let onAskForAllowance;
    export let onEatCookie

    import { fridgeMessages } from "../../store/fridgeMessages.js";

    let fridgeMessage =""

    function handleWriteFridgeMessage() {
        $fridgeMessages.push(fridgeMessage);
        fridgeMessages.set($fridgeMessages);
    
        fridgeMessage = "";
    }
</script>

<!--if the nibling isGirl is true, it gets the class "isGirl" etc.-->
<div class:is-girl={nibling.isGirl} 
    class:is-boy={!nibling.isGirl} 
    class={nibling.blackSheep || "not-a-black-sheep"}> 
{#if nibling.isGirl }
    <p>Niece: {nibling.name}</p>

    {:else if !nibling.isGirl}
    <p>Nephew: {nibling.name}</p>
{/if}
</div>

<p>{nibling.cookies}</p>

<button on:click={() => onShowLove(`Hey ${piblingName}. It's me ${nibling.name} and i love you. `)}>Show Love</button>
<button on:click={() => onAskForAllowance(`Hey ${piblingName}. It's me ${nibling.name}. Can i have some allowance? `)}>Ask for Allowance</button>
<button on:click={() => onEatCookie()}>Eat a cookie</button>


<p>There are {$fridgeMessages.length} messages on the fridge.</p>
<input bind:value={fridgeMessage}>
<button on:click={handleWriteFridgeMessage}>Write a message on the fridge</button>

<style>
    .is-girl {
        border: 2px solid blue;
    }

    .is-boy {
        border: 2px solid pink;
    }

    .not-a-black-sheep {
        background-color: aliceblue;
    }

    .medium-black-sheep {
        background-color: burlywood;
    }

    .ultra-black-sheep {
        background-color: brown;
    }
</style>

