<script>
  import isAuthenticated from "../stores/authStore";
  import { navigate } from "svelte-routing";
  const handleLoginClick = () => {
    isAuthenticated.toggleAuth(true);
    navigate("/articles");
  };
</script>

<style>

</style>

<div class="container">
  <h3>Page Login</h3>

  <button class="btn btn-success" on:click={handleLoginClick}>
    Login Test
  </button>
</div>
