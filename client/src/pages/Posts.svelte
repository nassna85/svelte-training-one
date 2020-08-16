<script>
  import { onMount } from "svelte";
  import postsAPI from "../services/postsAPI";
  import PostItem from "../components/posts/PostItem.svelte";
  import Pagination, { getData } from "../components/Pagination.svelte";
  import postsStore from "../stores/postsStore";
  import { paginate, LightPaginationNav } from "svelte-paginate";
  import isAuthenticated from "../stores/authStore";
  import { navigate } from "svelte-routing";

  let posts = [];
  let search = "";

  const fetchAllPosts = async () => {
    try {
      console.log("coucouuu");
      posts = await postsAPI.getAllPosts();
      postsStore.setPosts(posts);
    } catch (error) {
      console.log(error.response);
    }
  };

  onMount(() => {
    if (!$isAuthenticated) return navigate("/login");
    fetchAllPosts();
  });

  const handleSearch = (e) => {
    search = e.target.value;
  };

  $: filteredPosts = posts.filter((p) => {
    p.title.toLowerCase().includes(search.toLowerCase());
  });
</script>

<style>

</style>

<div class="container">
  <h1>Liste de tous nos articles</h1>

  {#if posts.length === 0}
    <p>Loading...</p>
  {:else}
    <div class="form-group">
      <input
        type="text"
        onChange={handleSearch}
        value={search}
        class="form-control"
        placeholder="Rechercher ..." />
    </div>
    <div class="row">
      {#each posts as post}
        <div class="col-md-4">
          <PostItem {post} />
        </div>
      {/each}
    </div>
    <!-- <LightPaginationNav
                totalItems="{$postsStore.length}"
                pageSize="{pageSize}"
                currentPage="{currentPage}"
                limit="{1}"
                showStepOptions="{true}"
                on:setPage="{(e) => currentPage = e.detail.page}"
        /> -->
    <!--<Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                length={filteredPosts.length}
                onPageChanged={handlePageChange}
        />-->
  {/if}
</div>
