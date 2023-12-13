<script lang="ts">
	import { onMount } from 'svelte';
	import NavBarItem from './NavBarItem.svelte';

	let open = false;
	let dropdownMenu: HTMLElement | undefined = undefined;
	let icon: HTMLElement | undefined = undefined;

	function menu() {
		if (!dropdownMenu || !icon) return;
		if (open) {
			icon.innerHTML = "<i class='fa-solid fa-bars overscroll-auto'></i>";
			dropdownMenu.style.display = 'none';
			open = false;
		} else {
			icon.innerHTML = "<i class='fa-solid fa-grip-lines-vertical disable-overscroll'></i>";
			dropdownMenu.style.display = 'flex';
			open = true;
		}
	}
</script>

<div class="relative flex">
	<div
		bind:this={dropdownMenu}
		class="fixed inset-0 top-20 z-50 hidden h-full w-full flex-col justify-between bg-slate-800 opacity-95 dark:bg-slate-500"
	>
		<NavBarItem link="/" name="Home" />
		<NavBarItem link="/blog" name="Blog" />
		<NavBarItem link="/weather" name="Weather" />
		<NavBarItem link="/contact" name="Contact" />
	</div>

	<button
		class="relative top-0 flex h-20 items-center px-7 text-black dark:text-white"
		type="button"
		on:click={menu}
		bind:this={icon}
	>
		<span class="">
			<i class="fa-solid fa-bars" />
		</span>
	</button>
</div>
