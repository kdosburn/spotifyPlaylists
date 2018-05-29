import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Playlists extends Component {
	render() {
		return (
				<div>
					<h1> My Playlists Here: </h1>
					{this.props.playlists.map((playlist, i) => <li key={i}>{playlist.name}</li>)}
				</div>
			)
	}
}

Playlists.propTypes = {
	playlists: PropTypes.array.isRequired
}
