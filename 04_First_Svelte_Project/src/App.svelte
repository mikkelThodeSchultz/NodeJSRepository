

<script>
  import FavoriteBirds from "./lib/FavoriteBirds.svelte";
    import Garden from "./lib/Garden.svelte";
    import GardenGate from "./lib/GardenGate.svelte";
  import Greeter from "./lib/Greeter.svelte";

</script>

<Greeter/>
<Greeter name="Tobias" greeting="Goodbye"/>
<Greeter name="Søren" />

<FavoriteBirds />

<GardenGate/>
<Garden />