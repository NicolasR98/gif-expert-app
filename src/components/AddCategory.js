import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = ({ target: { value: key } }) => setInputValue(key);

	const handleAdd = (value) => setCategories((cats) => [value, ...cats]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const isValidInput = inputValue.trim().length > 2;

		if (isValidInput) {
			handleAdd(inputValue);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add Category</h2>
			<input type="text" value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
