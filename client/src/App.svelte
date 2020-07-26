<script>
    import {setContext, getContext} from "svelte";
	import {Router, Link, Route} from "svelte-routing";
	import NavBar from "./components/navigation/NavBar.svelte";
	import Home from "./pages/Home.svelte";
	import Posts from "./pages/Posts.svelte";
	import ShowPost from "./pages/ShowPost.svelte";
	import Login from "./pages/Login.svelte";
	import isAuthenticated from "./stores/authStore";

	export let url = "";
</script>

<Router url="{url}">
	<NavBar />
	<p>Connecté : {$isAuthenticated}</p>
	<main>
	<div>
		<Route path="articles" component="{Posts}" />
		<Route path="login" component="{Login}" />
		<Route path="articles/:id" let:params>
			<ShowPost id={params.id} />
		</Route>
		<Route path="/"><Home /></Route>
	</div>
	</main>
</Router>