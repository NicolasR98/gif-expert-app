import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Tests on <AddCategory />', () => {
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});
	test('Component should display correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Component input should change', () => {
		const input = wrapper.find('input');
		const value = 'hello world';
		input.simulate('change', { target: { value } });
		const inputAfter = wrapper.find('input');

		expect(inputAfter.prop('value')).toBe(value);
	});

	test('Component should post the info when submit', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(setCategories).not.toHaveBeenCalled();
	});

	test('Component should call setCategories and clean the input', () => {
		const value = 'hello world';

		//1. simulate inputChange
		wrapper.find('input').simulate('change', { target: { value } });

		//2. simulate submit
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		//3. setCategories should be invoked once
		expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

		//4. input value should be ''
		expect(wrapper.find('input').prop('value')).toBe('');
	});
});
