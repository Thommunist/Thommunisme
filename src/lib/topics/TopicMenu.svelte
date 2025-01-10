<script lang="ts">
	export let title: String;
	export let dates: String;
	export let img: string;
	export let rounded: string;
	export let text: String;
	export let link: string;
	export let linkText: String;
</script>

<div
	class="w-md my-6 mx-2 flex h-fit max-w-md flex-col items-center justify-center rounded-2xl bg-white dark:bg-slate-700"
>
	<span
		class="bg-skillPost dark:bg-headerDark flex h-20 max-h-fit min-w-full justify-between rounded-t-2xl p-4 text-xl"
	>
		<img class="{rounded} max-h-12" src={img} alt="Logo" />
		<h1 class="">{title}</h1>
		<h1 class="">{dates}</h1>
	</span>

	<p class="flex p-4 ">
		{text}
	</p>

	<span
		class="bg-skillPost dark:bg-headerDark flex max-h-10 min-w-full items-center justify-center rounded-b-2xl p-4 text-xl"
	>
		<a class="hover:text-gray-300" href={link} target="_blank">{linkText}</a>
	</span>
</div>
