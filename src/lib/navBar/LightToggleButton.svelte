<script lang="ts">
//@ts-nocheck
import { onMount } from "svelte";
import { getCookie } from "$lib/helpers/cookieThemes";
let classes = null;
let theme:HTMLElement;

function switchTheme() {
        if (document.documentElement.classList.contains("dark")) {
            setLight();
        } else {
            setDark();
        }
    }

    function setLight() {
        document.documentElement.classList.remove("dark");
        theme.innerHTML = "<i class=' fa-solid fa-moon group-hover:animate-spin'></i>";
        document.cookie = "theme=light";
        classes = "group text-zinc-300 h-full inline-flex items-center justify-center px-7";
    }

    function setDark() {
        document.documentElement.classList.add("dark");
        theme.innerHTML = "<i class='fa-regular fa-sun group-hover:animate-spin' style='--fa-animation-duration: 2s;'></i>";
        document.cookie = "theme=dark";
        classes = "group text-yellow-400 h-full inline-flex items-center justify-center px-7";
    }

    onMount(() => {
        let theme = getCookie("theme");

        if (!theme) {
            document.cookie = "theme=light";
        } else {
            if (theme == "light") setLight();
            if (theme == "dark") setDark();
        }
    });

</script>

<button bind:this={theme} type="none" class={classes} on:click={switchTheme}>
    <span class="text-headerLight dark:text-headerDark">
        Dark / Light
    </span>
</button>