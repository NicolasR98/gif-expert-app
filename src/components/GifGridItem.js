import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, id, url }) => {
	return (
		<div className="card  animate__animated animate__backInRight" key={id}>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

GifGridItem.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	url: PropTypes.string.isRequired,
};
