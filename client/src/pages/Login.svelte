<script>
    import isAuthenticated from "../stores/authStore";
    const handleLoginClick = () => {
        console.log({first: $isAuthenticated})
        isAuthenticated.toggleAuth(true);
        console.log({afterClick: $isAuthenticated})
    }
</script>

<style>

</style>

<div class="container">
    <h3>Page Login</h3>

    <button class="btn btn-success" on:click={handleLoginClick}>Login Test</button>
</div>