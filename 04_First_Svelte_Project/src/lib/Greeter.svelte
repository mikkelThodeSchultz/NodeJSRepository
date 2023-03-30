<script>
    export let name = "Martin";
    export let greeting = "Hello";

    function changeGreet() {
    if (greeting === "Hello"){
        greeting = "Goodbye";
    } else {
        greeting = "Hello";
    }
}

</script>


<h1 on:click={changeGreet} on:keydown={changeGreet}>{greeting} {name}.</h1>


<style>
    h1 {
    color: burlywood;
    user-select: none;
    }
</style>