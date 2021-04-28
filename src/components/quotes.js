import React from 'react'

function Quotes() {
	return (
		<main className="mainQuotes">
			<div class="container">
				<div id="quote">
					Don't forget: life is a race, if you don't run fast, you'll get
					trampled
				</div>
				<div id="author">- Anonymous 🎭</div>
			</div>
		</main>
	)
}

export default Quotes

const url = 'https://api.quotable.io/random'
function generateQuote() {
	fetch(url)
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {
			writeQuote(data)
		})
		.catch(function (err) {
			console.log(err)
		})
}
// Repeat generateQuote() every 10 seconds
setInterval(generateQuote(), 10000)
//Note - 10000 milliseconds = 10

function writeQuote(data) {
	document.getElementById('quote').innerHTML = data.content
	document.querySelector('author').innerHTML = data.author
}
