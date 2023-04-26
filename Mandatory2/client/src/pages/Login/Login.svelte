<script>
    import { prevent_default } from "svelte/internal";
    import toastr from "toastr";

    let formData = {
    email: '',
    password: ''
    };
    let forgotPasswordEmail = '';
    let forgotPasswordFormData = {
        forgotPasswordCode: '',
        newPassword: ''
    }
    

    function handleSubmit() {
        if(formData.email === "" || formData.password === ""){
            toastr.warning("Please fill out all required fields.");
            return;
        }

    fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result =>{
        if (result.data) { 
            toastr.success("You have succesfully logged in.");
            setTimeout(function() {
                window.location.href = "/";
            }, 2000);
        } else {
            toastr.warning('Wrong email or password')
        }
        })
        .catch(error => {
        console.error(error);
        });
    }

    function handleResetPassword() {
        if(forgotPasswordFormData.newPassword === "" || forgotPasswordFormData.forgotPasswordCode === ""){
            toastr.warning("Please fill out the code and a new password.");
            return;
        }
        fetch('http://localhost:8080/api/password', {
        method: 'put',
        credentials: 'include',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(forgotPasswordFormData)
        })
        .then(response => response.json())
        .then(result =>{
        if (result.message) { 
            toastr.success("Success, we have changed your password");
        } else {
            toastr.warning('Something went wrong.')
        }
        })
        .catch(error => {
        console.error(error);
        });
    }

    function handleForgotPassword() {
        if(forgotPasswordEmail === ""){
            toastr.warning("Please fill out email.");
            return;
        }
        const body = JSON.stringify({ email: forgotPasswordEmail });
        fetch('http://localhost:8080/api/forgot-password', {
        method: 'POST',
        credentials: 'include',
        headers: {
        'Content-Type': 'application/json'
        },
        body: body
        })
        .then(response => response.json())
        .then(result =>{
        if (result.data) { 
            toastr.success("We have sent you an email.");
        } else {
            toastr.warning('Wrong email.')
        }
        })
        .catch(error => {
        console.error(error);
        });
    }


</script>
<h3>Log in</h3>
<form on:submit|preventDefault={handleSubmit}>
    <label for="email">Email</label>
    <input type="email" bind:value={formData.email}  aria-label="Email"/>

    <label for="password">Password</label>
    <input type="password" id="password" bind:value={formData.password}  aria-label="Password"/>

    <button type="submit">Login</button>
</form>
<h3>Forgot your password?</h3>
<p>Write your email below and we will send you a code</p>
<form on:submit|preventDefault={handleForgotPassword}>
    <label for="email">Email</label>
    <input type="email" bind:value={forgotPasswordEmail}  aria-label="Email"/>
    <button type="submit">Get a code</button>
</form>
<p>Please enter the code and a new password below</p>
<form on:submit|preventDefault={handleResetPassword}>
    <label for="number">Code</label>
    <input type="number" bind:value={forgotPasswordFormData.forgotPasswordCode}  aria-label="Number"/>
    <label for="password">Password</label>
    <input type="password" id="password" bind:value={forgotPasswordFormData.newPassword}  aria-label="Password"/>
    <button type="submit">Reset password </button>
</form>





