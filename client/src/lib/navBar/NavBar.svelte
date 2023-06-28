<script lang="ts">
import NavBarItem from "./NavBarItem.svelte";
import LightToggleButton from "./LightToggleButton.svelte";
</script>

<div class="flex h-full">

    <nav class="items-center h-full w-fit flex">
        <NavBarItem link="/" name="Home"/>
        <NavBarItem link="/#portofolio" name="Portofolio"/>
        <NavBarItem link="/blog" name="Blog" />
        <NavBarItem link="/contact" name="Contact"/>
    </nav>

    <LightToggleButton/>
</div>

