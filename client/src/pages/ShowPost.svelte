<script>
    export let id;
    let post;
    import postsStore from "../stores/postsStore";
    post = postsStore.getPost(id);
</script>

<style>

</style>

<h1>{post.title}</h1>