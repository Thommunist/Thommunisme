<script>
	import Header from '$lib/header/Header.svelte';
	import '$lib/app.css';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<main
	class="flex min-h-screen w-full justify-center text-black dark:text-white bg-backgroundLight dark:bg-backgroundDark"
>
	<div class="flex flex-col w-[98%] max-w-[1800px] items-center justify-center content-center bg-backgroundLight">
		<Header />
		<div class="flex flex-col w-[80%]">
			<slot />
		</div>
		<Footer />
	</div>
</main>
