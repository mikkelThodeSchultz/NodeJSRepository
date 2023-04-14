<script>
    import { onMount } from "svelte";
    import Home from "./components/Home/Home.svelte"
    import Pibling from "./components/Pibling/Pibling.svelte"
    import { BASE_URL } from "./store/urlDomain";

    // onMount only runs when the server starts?
    onMount(async () => {
      const registerURL = `${BASE_URL}/gotham/batman?hobby=Cathing the bad guys.`
      const response = await fetch(registerURL, {
        credentials: "include"
      });
      const batmanRegisteredMessageResponse = await response.json();
      console.log(batmanRegisteredMessageResponse);
    });

    const piblings = ["John", "Mark"];
    const niblings = [
      {
        id: 1,
        name: "Ann",
        isGirl: true,
        money: 0,
        cookies: []
      },
      {
        id: 2,
        name: "Amelie",
        isGirl: true,
        blackSheep: "medium-black-sheep",
        money: 0,
        cookies: []
      },
      {
        id: 3,
        name: "Peter",
        blackSheep: "ultra-black-sheep",
        money: 0,
        cookies: []
      }
    ];
</script>

<!--So App is parent to Home, Home to Pibling and Pibling to Nibling-->

<Home>
  <h3>This is the home of the Svelte Family</h3>
  <Pibling name={piblings[0]} niblings = {niblings}/>
  <Pibling name={piblings[1]} niblings = {niblings}/>
</Home>



