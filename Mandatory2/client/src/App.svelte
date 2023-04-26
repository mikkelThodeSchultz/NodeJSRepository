<script>
    import { Router, Link, Route } from "svelte-navigator";
    import Home from "./pages/Home/Home.svelte";
    import Login from "./pages/Login/Login.svelte";
    import Signup from "./pages/Signup/Signup.svelte";
    import Secret from "./pages/Secret/Secret.svelte";
    import NotFound from "./pages/NotFound/NotFound.svelte";
    import { onMount } from "svelte";
    import toastr from "toastr";
    
    let isUserLoggedIn;
    
    const handleLogout = async () => {
        fetch("http://localhost:8080/api/logout", {
            method: "GET",
            credentials: "include"
        })
        toastr.success("Loggin out - No secret for you!");
        setTimeout(function() {
            location.href = "/"
        }, 2000);
    }

    const getSession = async () => {
        await fetch("http://localhost:8080/api/session",{
        method: "GET",
        credentials: "include"
        }).then(res => res.json())
        .then(result => {
            isUserLoggedIn = result.isUserLoggedIn;
        })
    };
    onMount(getSession)

</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        {#if isUserLoggedIn}
            <Link to="/" on:click={handleLogout}>Log out</Link>
            <Link to="/secret">Secret</Link>
        {:else}
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        {/if}
    </nav>
    <Route path="/">
        <Home/>
    </Route>
    <Route path="/login">
        <Login/>
    </Route>
    <Route path="/signup">    
        <Signup/>
    </Route>
    {#if isUserLoggedIn}
        <Route path="/secret">
            <Secret />
        </Route>
    {/if}
    <Route path="*">
        <NotFound/>
    </Route>
</Router>

