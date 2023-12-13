<script>
	import NavBar from '$lib/navBar/NavBar.svelte';
	import SmallScreenNavBar from '$lib/navBar/SmallScreenNavBar.svelte';
</script>

<header class="bg-headerLight dark:bg-headerDark flex h-28 w-full justify-center">
	<div class="mx-7 flex w-screen max-w-[80%] items-center justify-between">
		<a class="inline-flex h-full items-center justify-center px-7" href="/">
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
