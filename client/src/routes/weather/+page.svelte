<script script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	const apiKey = 'c93a6ce7cb7e1d00ea978291ff0519da';
	const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

	let city: string;
	let temp: number;
	let humidity: number;
	let windSpeed: number;

	onMount(async () => {
		if (!browser) return;

		city = await checkWeather('city', 'amsterdam');
		temp = Math.round(await checkWeather('temp', 'amsterdam'));
		humidity = Math.round(await checkWeather('humidity', 'amsterdam'));
		windSpeed = Math.round(await checkWeather('windSpeed', 'amsterdam'));
	});

	async function checkWeather(type: string, city: string) {
		const response = await fetch(apiUrl + city + '&appid=' + apiKey);
		var data = await response.json();

		switch (type) {
			case 'city': {
				return data.name;
			}
			case 'temp': {
				return data.main.temp;
			}
			case 'humidity': {
				return data.main.humidity;
			}
			case 'windSpeed': {
				return data.wind.speed;
			}
		}
	}
</script>

<div
	class="max-w-96 my-16 mx-auto flex w-[90%] flex-col rounded-lg bg-gradient-to-tl from-teal-800
via-teal-500 to-green-200 p-5 text-center text-white"
>
	<div class="flex w-full content-between items-center">
		<input
			class="size text-black mr-4 flex h-14 rounded-lg border-none
		bg-[#ebfffc] px-3 py-6 outline-none"
			type="text"
			placeholder="enter city name"
			spellcheck="false"
			value={city}
		/>

		<!-- <button
		on:click={checkWeather("city", city)}
			class="order-none flex h-16 w-16
		cursor-pointer items-center justify-center rounded-full bg-[#ebfffc] outline-none"
		>
			<img class="flex w-4" src="weatherPics/search.png" alt="Search button" />
		</button> -->
	</div>

	<div class="flex flex-col items-center">
		<img class="mt-[30px] flex w-[170px]" src="weatherPics/rain.png" alt="weather" />
		<h1 class="flex text-[80px] font-medium">{temp}°C</h1>
		<h2 class="flex text-[45px] font-normal">{city}</h2>
	</div>

	<div class="mt-[50px] flex items-center justify-between px-[20px]">
		<div class="flex items-center text-left">
			<img class="mr-[10px] w-[40px]" src="weatherPics/humidity.png" alt="humidity" />
			<div class="mt-[-6px] text-[28px]">
				<p>{humidity}%</p>
				<p>Humidity</p>
			</div>
		</div>
		<div class="flex items-center text-left">
			<img class="mr-[10px] w-[40px]" src="weatherPics/wind.png" alt="wind" />
			<div class="mt-[-6px] text-[28px]">
				<p>{windSpeed} km/h</p>
				<p>Wind speed</p>
			</div>
		</div>
	</div>
</div>
