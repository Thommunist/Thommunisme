<script>
	import NavBar from '$lib/navBar/NavBar.svelte';
	import SmallScreenNavBar from '$lib/navBar/SmallScreenNavBar.svelte';
</script>

<header class="flex fixed bg-headerLight dark:bg-headerDark h-28 w-full justify-center">
	<div class="flex justify-between items-center max-w-[80%] w-screen mx-7">
		<a class="hover:bg-highlight h-full inline-flex items-center justify-center px-7" href="/">
			<h1 class="logo text-6xl">T</h1>
		</a>

		<div class="mobile:flex hidden h-full">
			<NavBar />
		</div>

		<div class="mobile:hidden flex h-full">
			<SmallScreenNavBar />
		</div>
	</div>
</header>

<div class="h-20" />
