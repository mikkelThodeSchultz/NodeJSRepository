<script>
    import { onMount } from "svelte"
    import { BASE_URL } from "../../store/globalStore";

onMount(async () => {
    const response = await fetch( $BASE_URL + "/planets");
    const { data: planets} = await response.json();
    
});
</script>
<h1>This is Planets</h1>
