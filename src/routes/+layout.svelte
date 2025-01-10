<script>
	import Header from '$lib/header/Header.svelte';
	import '$lib/app.css';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<main
	class="bg-backgroundLight dark:bg-backgroundDark flex min-h-screen w-full justify-center text-black dark:text-white"
>
	<div
		class="bg-backgroundLight flex w-[98%] max-w-[1800px] flex-col content-center items-center justify-center"
	>
		<Header />
		<div class="flex w-[80%] flex-col">
			<slot />
		</div>
		<Footer />
	</div>
</main>
