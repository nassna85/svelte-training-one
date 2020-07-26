<script>
    import {onMount} from "svelte";
    import postsAPI from "../services/postsAPI";
    export let id;
    let post = {};
    const fetchPost = async (id) => {
        try{
            post = await postsAPI.getPost(id);
        }catch(error){
            console.log(error.response);
        }
    }
    onMount(() => {
        fetchPost(id);
    })
</script>

<style>
    .single-post-container {
        margin: 50px 0;
        background-color: #f5f5f5;
        padding: 30px;
    }
</style>

<div class="container">
    <div class="single-post-container">
        <h1 class="mb-3">{post.title}</h1>
        <p>{post.body}</p>
    </div>
</div>