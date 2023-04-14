
<script>
    import {fridgeMessages} from "../../store/fridgeMessages.js"

    function eraseFridgeMessages() {
        fridgeMessages.set([])
    }
</script>

<!-- The $ in front of the fridgeMessages gets the value, without it we just get the Object -->
<h5>{$fridgeMessages}</h5>
<button on:click={eraseFridgeMessages}>Erase Fridge Messages</button>
<!-- the slot is the place where the child of the element can send data (here, from Home.svelte to App.svelte) TROR JEG!!!!-->
<slot> </slot>

<p>--------------------</p>
<p>|      Welcome     |</p>
<p>--------------------</p>