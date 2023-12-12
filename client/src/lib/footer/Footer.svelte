<script>
	import FooterButton from './FooterButton.svelte';

	function copyRight() {
		return new Date().getFullYear();
	}
</script>

<footer
	class="bg-headerLight dark:bg-headerDark realtive bottom-0 flex h-fit h-32 w-full items-stretch overflow-auto"
>
	<div class="flex w-full flex-col items-start justify-center py-2 px-7">
		<p>©2020 - {copyRight()} All Rights reserved</p>
	</div>

	<div class="flex w-full flex-row items-center justify-end px-7">
		<FooterButton
			link="https://twitter.com/partij_volks"
			logo="hover:animate-bounce px-2 fa-brands fa-xl fa-twitter text-blue-500"
		/>
		<FooterButton
			link="https://nl.linkedin.com/in/thom-sandbrink-834953137?original_referer=https%3A%2F%2Fwww.google.com%2F"
			logo="px-2 fa-xl fa-brands fa-linkedin text-linkedin"
		/>
	</div>
</footer>
