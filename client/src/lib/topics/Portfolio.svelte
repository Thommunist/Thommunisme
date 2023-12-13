<script>
	import TopicMenu from './TopicMenu.svelte';
</script>

<h1 class="flex justify-center self-center text-5xl">Portfolio</h1>

<div class="@container place-items-center">
	<div id="portofolio" class="@xs:grid-cols-1 @3xl:grid-cols-2 @6xl:grid-cols-3 grid gap-5 justify-items-center">
		<TopicMenu
			rounded=""
			img="flame_coloured_trans.png"
			title="Flame"
			dates="2022 - now"
			text="Together with Pascal van Ginkel, other known as Midblep, I started a compagny named Flame Software. For more information check out the website."
			link="https://flamesoftware.nl/"
			linkText="FlameSoftware.nl"
		/>

		<TopicMenu
			rounded="rounded-full"
			img="saxion.png"
			title="Saxion"
			dates="2020 - now"
			text="In 2020 I have started the HBO-ICT course at Saxion University of Applied Science.
        In the past three years I have learned a lot and I'am excited to learn even more.
        The study has taught me how to code. But also how to work in a (Scrum) team."
			link="https://www.saxion.nl/"
			linkText="Saxion.nl"
		/>

		<TopicMenu
			rounded="rounded-full"
			img="logo_agrovision.png"
			title="AgroVision"
			dates="Sep - Oct 2021"
			text="With our student team we made a CO2 calculator website for AgroVision. This was a very intresting project because it was my first experience with the Svelte front-end framework."
			link="https://www.agrovision.com/nl"
			linkText="AgroVision.com"
		/>

		<TopicMenu
			rounded="rounded-full"
			img="Logo_Witteveen+Bos.png"
			title="Witteveen + Bos"
			dates="April - Juli 2022"
			text="At the end of the second year I made a user management system for Witteveen + Bos in Deventer. I learned a lot from this project, especialy in the back-end corner."
			link="https://www.witteveenbos.com/nl/"
			linkText="WitteveenBos.com"
		/>

		<TopicMenu
			rounded="rounded-full"
			img="Data2Track.png"
			title="Data2Track"
			dates="Feb 2023 - Juli 2023"
			text="For the third year internship I started at Data2Track. In this internship I made a proof of concept to detect changes in a Triplist (Json). This solution needed to be generic for different triplist. The proof of concept is written in Kotlin."
			link="https://www.d2t.nl/"
			linkText="Data2Tack.nl"
		/>

		<TopicMenu
			rounded="rounded-full"
			img="AgroIt.png"
			title="Agro-IT"
			dates="Sep 2023 - Jan 2024"
			text="After my internship I wanted to have a side job in the IT field. Thanks to a friend of mine I was invated to Agro-IT. At Agro-IT I helped to create an rVDM website for the Agro sector."
			link="https://agro-it.nl/"
			linkText="Agro-it.nl"
		/>

		<TopicMenu
			rounded="rounded-full"
			img="skills.png"
			title="Skills"
			dates=""
			text="In the past few years I have learned a lot on the IT subject"
			link="https://www.thommunisme.nl/"
			linkText="Thommunisme.nl"
		/>
	</div>
</div>
