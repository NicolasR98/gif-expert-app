import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
	const [gifs, setGifs] = useState([]);

	useEffect(() => {
		getGifs();
	}, []);

	const getGifs = async () => {
		const url =
			'https://api.giphy.com/v1/gifs/search?q=age+of+empires&limit=10&api_key=nKqbfWjdlPnOusoIhA9I5Fbs0q4YBvID';
		const resp = await fetch(url);
		const { data } = await resp.json();

		const gifs = data.map((gif) => {
			return {
				id: gif.id,
				title: gif.title,
				url: gif.images?.downsized_medium.url,
			};
		});
		setGifs(gifs);
	};

	return (
		<div>
			<h3>{category}</h3>
			<ol className="card-container">
				{gifs.map((gif) => (
					<GifGridItem key={gif.id} {...gif} />
				))}
			</ol>
		</div>
	);
};
