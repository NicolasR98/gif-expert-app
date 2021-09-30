import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Age of empires 2']);

	return (
		<>
			<h2>GifExpertApp</h2>
			<hr />
			<AddCategory setCategories={setCategories} />
			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};
