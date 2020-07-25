<script>
    import { link } from "svelte-routing";
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
                <a class="nav-link" href="/articles" use:link>Articles</a>
            </li>
        </ul>
    </div>
</nav>