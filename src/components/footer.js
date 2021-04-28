import React from 'react'

function Footer() {
	let now = new Date()
	const date = now.toLocaleDateString()

	return (
		<main className="mainFooter">
			<section id="weather">
				<h1 id="temp"></h1>
				<section>
					<div id="description"></div>
					<div id="location"></div>
				</section>
			</section>
			<section id="timeContainer">
				<p className="dateText">
					<span id="date">{date}</span>
				</p>
			</section>
		</main>
	)
}

export default Footer

function weatherInfo(cityID) {
	var key = '7612f2547cbd752837c1454e3e34d400'
	fetch(
		'https://api.openweathermap.org/data/2.5/weather?id=' +
			cityID +
			'&appid=' +
			key
	)
		.then(function (resp) {
			return resp.json()
		}) // Convert data to json
		.then(function (data) {
			drawWeather(data)
		})
		.catch(function () {
			// catch any errors
		})
}

window.onload = function () {
	weatherInfo(2673730)
}

function drawWeather(d) {
	var celcius = Math.round(parseFloat(d.main.temp) - 273.15)
	var description = d.weather[0].description

	document.getElementById('description').innerHTML = d.weather[0].description
	document.getElementById('temp').innerHTML = celcius + '&deg;'
	document.getElementById('location').innerHTML = d.name
	if (description.indexOf('rain') > 0) {
		document.body.className = 'rainy'
	} else if (description.indexOf('cloud') > 0) {
		document.body.className = 'cloudy'
	} else if (description.indexOf('sunny') > 0) {
		document.body.className = 'sunny'
	}
}
