
<script>
    import {fridgeMessages} from "../../store/fridgeMessages.js"

    function eraseFridgeMessages() {
        fridgeMessages.set([])
    }
</script>

<!-- The $ in front of the fridgeMessages gets the value, without it we just get the Object -->
<h5>{$fridgeMessages}</h5>
<button on:click={eraseFridgeMessages}>Erase Fridge Messages</button>
<!-- the slot is the place where the parent of the element can send data-->
<slot> </slot>

<p>--------------------</p>
<p>|      Welcome     |</p>
<p>--------------------</p>