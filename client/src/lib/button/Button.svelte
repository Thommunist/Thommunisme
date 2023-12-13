<script lang="ts">
	export let link = 'https://www.google.com';
	export let name: String;
	export let logo: any;
</script>

<a
	class="mobile:w-20 bg-buttons dark:bg-headerDark hover:bg-highlight group group m-2 flex h-20 w-20 flex-col items-center justify-evenly rounded-2xl
bg-opacity-80 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
	href={link}
	target="_blank"
>
	<i class={logo} />

	<p>
		{name}
	</p>
</a>
