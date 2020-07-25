<script>
	import {Router, Link, Route} from "svelte-routing";
	import NavBar from "./components/navigation/NavBar.svelte";
	import Home from "./pages/Home.svelte";
	import Posts from "./pages/Posts.svelte";
	import ShowPost from "./pages/ShowPost.svelte";

	export let url = "";
</script>

<Router url="{url}">
	<NavBar />
	<main>
	<div>
		<Route path="articles" component="{Posts}" />
		<Route path="articles/:id" let:params>
			<ShowPost id={params.id} />
		</Route>
		<Route path="/"><Home /></Route>
	</div>
	</main>
</Router>