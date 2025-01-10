<script>
	import FooterButton from './FooterButton.svelte';

	function copyRight() {
		return new Date().getFullYear();
	}
</script>

<footer
	class="bg-headerLight dark:bg-headerDark realtive bottom-0 flex h-20 w-full items-stretch overflow-auto rounded-t-xl"
>
	<div class="flex w-full flex-col items-start justify-center py-2 px-7">
		<p>©2020 - {copyRight()} All Rights reserved</p>
	</div>

	<div class="flex w-full flex-row items-center justify-end px-7">
		<FooterButton
			link="https://nl.linkedin.com/in/thom-sandbrink-834953137?original_referer=https%3A%2F%2Fwww.google.com%2F"
			logo="px-2 fa-xl fa-brands fa-linkedin text-linkedin"
		/>
	</div>
</footer>
