import React from 'react'

import Quotes from '../components/quotes'

function Body() {
	return (
		<main className="mainBody">
			<section className="spotifyContainer">
				<iframe
					src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn"
					width="300"
					height="380"
					frameborder="0"
					allowtransparency="true"
					allow="encrypted-media"
					className="spotify"
				></iframe>
			</section>
			<Quotes />
		</main>
	)
}

export default Body
