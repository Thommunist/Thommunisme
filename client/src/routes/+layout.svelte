<script>
	import Header from '$lib/header/Header.svelte';
	import '$lib/app.css';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<main class="flex flex-col w-full min-h-screen justify-center text-black dark:text-white">
	<div class="flex flex-col min-h-screen items-center bg-backgroundLight dark:bg-backgroundDark">
		<Header />
		<div class="flex flex-grow min-h-full justify-center max-w-[90%] py-10 px-20 mt-10 ">
			<div class="max-w-full h-full">
				<slot />
			</div>
		</div>
	</div>

	<Footer />
</main>
