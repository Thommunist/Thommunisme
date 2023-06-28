<script lang="ts">
	import Button from '$lib/button/Button.svelte';

	function getAge() {
		const bithday = new Date('April 12, 1999 17:00:00');
		let ageDif = Date.now() - bithday.getTime();
		let ageDate = new Date(ageDif);

		return ageDate.getUTCFullYear() - 1970;
	}

	function studyTime() {
		const startStudy = new Date('August 31, 2020 17:00:00');
		let studyDif = Date.now() - startStudy.getTime();
		let studyDate = new Date(studyDif);

		return studyDate.getUTCFullYear() - 1970;
	}
</script>

<div class="">
	<div id="home" class="mobile:flex-row flex flex-col justify-between">
		<img class="ms-8 flex rounded-md mr-10" src="dutch.jpg" alt="Olifant" width="500" height="600" />

		<div class="flex flex-col">
			<div>
				<h1 class="text-3xl">Welcome on Thommunisme.nl</h1>


				<p>
					My name is Thom and I'am a {getAge()} years old dutch software engineer. In 2020 I started the study
					HBO-ICT on Saxion University of applied sciences. That was
					{studyTime()} years ago. Thommunisme.nl is a website about my software engineer journey. Feel
					free to contact me if you want to talk about tech or if you have a question.
				</p>
			</div>

			<div class="mobile:flex-row flex w-full flex-col justify-evenly my-5">
				<Button
					logo="group-hover:animate-bounce fa-brands fa-github fa-2x"
					link="https://github.com/Thommunist"
					name="GitHub"
				/>
				<Button
					logo="group-hover:animate-bounce fa-brands fa-discord fa-2x text-discord"
					link="https://discord.com/users/333649673116057600"
					name="Discord"
				/>
				<Button
					logo="group-hover:animate-bounce fa-regular fa-envelope fa-2x"
					link="mailto:1thom@hotmail.nl"
					name="E-Mail"
				/>
			</div>
		</div>
	</div>
</div>
