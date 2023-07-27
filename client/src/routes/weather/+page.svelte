<script lang="ts">
const apiKey = "c93a6ce7cb7e1d00ea978291ff0519da";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

let city =  checkWeather("city");
let temp =  checkWeather("temp");
let humidity = checkWeather("humidity");
let windSpeed = checkWeather("windSpeed");

async function checkWeather(type: string){
	const response = await fetch(apiUrl + '&appid=${apiKey}');
	const response1 = await fetch("https://api.openweathermap.org/data/2.5/weather?q=germany&appid=c93a6ce7cb7e1d00ea978291ff0519da");
	var data = await response.json()

	console.log(data)

	switch(type){
		case "city": {
			return data.name
		}
		case "temp": {
			return data.main.temp
		}
		case "humidity": {
			return data.main.humidity
		}
		case "windSpeed": {
			return data.wind.speed
		}

	}
}

</script>


<div class="flex flex-col  w-[90%] max-w-96 rounded-lg my-16 mx-auto p-5 text-center
bg-gradient-to-tl from-teal-800 via-teal-500 to-green-200 text-white">

	<div class="flex w-full items-center content-between">
		<input class="flex border-none outline-none bg-[#ebfffc] h-14 rounded-lg
		px-3 py-6 mr-4 size" type="text" placeholder="enter city name" spellcheck="false" />

		<button class="order-none outline-none bg-[#ebfffc] rounded-full
		w-16 h-16 cursor-pointer flex items-center justify-center">
		<img class="flex w-4" src="weatherPics/search.png" alt="Search button">
		</button>
	</div>

	<div class="flex flex-col items-center">
		<img class="flex w-[170px] mt-[30px]" src="weatherPics/rain.png"  alt="weather">
		<h1 class="flex text-[80px] font-medium">{temp}°C</h1>
		<h2 class="flex text-[45px] font-normal">{city}</h2>
	</div>

	<div class="flex items-center justify-between px-[20px] mt-[50px]">
		<div class="flex items-center text-left">
			<img class="w-[40px] mr-[10px]" src="weatherPics/humidity.png" alt="humidity">
			<div class="text-[28px] mt-[-6px]">
				<p>{humidity}%</p>
				<p>Humidity</p>
			</div>
		</div>
		<div class="flex items-center text-left">
			<img class="w-[40px] mr-[10px]" src="weatherPics/wind.png" alt="wind">
			<div class="text-[28px] mt-[-6px]">
				<p>{windSpeed}km/h</p>
				<p>Wind speed</p>
			</div>
		</div>
	</div>
</div>

