<script>
  import isAuthenticated from "../stores/authStore";
  import { navigate, Route } from "svelte-routing";

  export let path;
  export let component;
</script>

{#if $isAuthenticated}
  <Route {path} {component} />
{:else}{navigate('/login')}{/if}
