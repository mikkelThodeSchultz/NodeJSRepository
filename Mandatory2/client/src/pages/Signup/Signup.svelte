<script>
    import toastr from "toastr";

    let formData = {
    name: '',
    email: '',
    password: ''
    };

    function handleSubmit() {
        if(formData.email === "" || formData.password === "" || formData.name === ""){
            toastr.warning("Please fill out all required fields.");
            return;
        }

    fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        credentials: 'include',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
        if (response.ok) {
            toastr.success("You have succesfully created an account.");
            setTimeout(function() {
                window.location.href = "/";
            }, 2000);
        } else {
            toastr.warning("the mail has already been taken.");
        }
        })
        .catch(error => {
        console.error(error);
        });
    }
</script>
<h3>Sign up</h3>
<form on:submit|preventDefault={handleSubmit}>
    <label for="name">Name</label>
    <input type="text" id="name" bind:value={formData.name} aria-label="Name"/>

    <label for="email">Email</label>
    <input type="email" id="name" bind:value={formData.email} aria-label="Email"/>

    <label for="password">Password</label>
    <input type="password" id="password" bind:value={formData.password} aria-label="Password"/>

    <button type="submit">Signup</button>
</form>