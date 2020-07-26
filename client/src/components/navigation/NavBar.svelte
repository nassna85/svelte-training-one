<script>
    import { link } from "svelte-routing";
    import isAuthenticated from "../../stores/authStore";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">JsonPlaceholder</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/" use:link>Accueil</a>
            </li>
            <li class="nav-item">
                {#if $isAuthenticated}
                    <a class="nav-link" href="/articles" use:link>Articles</a>
                {:else}
                    <a class="nav-link" href="/login" use:link>Articles</a>
                {/if}
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="/login" use:link>Login</a>
            </li>
        </ul>
    </div>
</nav>