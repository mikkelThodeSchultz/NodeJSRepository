<script>
    let door = "🚪";

    function openOrCloseDoor(){
        if (door === "🚪"){
            door = "closed";
        } else {
            door = "🚪";
        }
    }
</script>

<h1 on:click={openOrCloseDoor} on:keydown={openOrCloseDoor}>{door}</h1>

<style>
    h1{
        user-select: none;
    }
</style>