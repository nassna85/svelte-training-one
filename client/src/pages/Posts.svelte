<script>
    import {onMount} from "svelte";
    import postsAPI from "../services/postsAPI";
    import PostItem from "../components/posts/PostItem.svelte";
    let posts = [];
    const fetchAllPosts = async () => {
        try{
            posts = await postsAPI.getAllPosts();
        }catch(error){
            console.log(error.response);
        }
    }
    onMount(() => {
        fetchAllPosts();
    })

</script>

<style>

</style>
<div class="container">
    <h1>Liste de tous nos articles</h1>

    {#if posts.length === 0}
    <p>Loading...</p>
    {:else}
        <div class="row">
            {#each posts as post}
                <div class="col-md-4">
                    <PostItem post={post} />
                </div>
            {/each}
        </div>
    {/if}
</div>
