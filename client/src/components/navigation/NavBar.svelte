<script>
  import { link, navigate } from "svelte-routing";
  import isAuthenticated from "../../stores/authStore";

  const handleLogoutClick = () => {
    isAuthenticated.toggleAuth(false);
    navigate("/login");
  };
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">JsonPlaceholder</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/" use:link>Accueil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/articles" use:link>Articles</a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="/login" use:link>Login</a>
      </li>
      <li class="nav-item">
        <button class="btn btn-danger" on:click={handleLogoutClick}>
          Logout
        </button>
      </li>
    </ul>
  </div>
</nav>
