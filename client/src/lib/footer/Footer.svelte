<script>
	import FooterButton from "./FooterButton.svelte";

function copyRight() {
    return new Date().getFullYear();
}
</script>


<footer class="flex bg-headerLight dark:bg-headerDark h-fit h-32 w-full items-stretch overflow-auto realtive bottom-0">
<div class="flex flex-col justify-center items-start w-full py-2 px-7">
    <p>©2020 - {copyRight()} All Rights reserved</p>
</div >

<div class="flex flex-row justify-end items-center w-full px-7">
    <FooterButton link="https://twitter.com/partij_volks" logo="hover:animate-bounce px-2 fa-brands fa-xl fa-spin fa-twitter text-blue-500" />
    <FooterButton link="https://nl.linkedin.com/in/thom-sandbrink-834953137?original_referer=https%3A%2F%2Fwww.google.com%2F" logo="fa-spin px-2 fa-xl fa-brands fa-linkedin text-linkedin" />
</div>

</footer>




