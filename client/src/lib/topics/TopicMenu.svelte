<script lang="ts">
	export let title: String
	export let dates: String
	export let img: string
	export let rounded: string
	export let text: String
	export let link: string
	export let linkText: String


</script>


<div
	class="flex flex-col bg-white w-md max-w-md h-fit my-6 mx-2 rounded-2xl dark:bg-slate-500 items-center"
>
<span class="flex bg-skillPost min-w-full p-4 rounded-t-2xl text-xl justify-between max-h-20">

	<div class="flex row ">
		<img class="max-h-fit {rounded}" src={img} alt="Logo"/>
		<h1 class="">{title}</h1>
	</div>
	<h1 class="flex flex-row min-w-fit">{dates}</h1>
</span>

	<p class="flex p-4 ">
		{text}
	</p>

	<span class="flex bg-skillPost min-w-full p-4 rounded-b-2xl text-xl justify-center max-h-10 items-center">
		<a class="hover:text-gray-300" href={link} target="_blank">{linkText}</a>
	</span>
</div>
