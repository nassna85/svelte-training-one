<script>
    import {link} from "svelte-routing";
    export let post;
</script>

<style>
    .card-post {
        margin-bottom: 30px;
    }
    .card {
        background-color: #f5f5f5;
    }
</style>
<div class="card-post">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text">{post.body.substring(1, 20)}...</p>
            <a href={"articles/" + post.id} class="card-link" use:link>Voir plus</a>
        </div>
    </div>
</div>