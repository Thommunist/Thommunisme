<script>
	import Header from '$lib/header/Header.svelte';
	import '$lib/app.css';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<main class="flex min-h-screen w-full flex-col justify-center text-black dark:text-white">
	<div class="bg-backgroundLight dark:bg-backgroundDark">
		<Header />
		<div class="min-h-full max-w-[90%] px-20">
			<slot />
		</div>
	</div>
	<Footer />
</main>
