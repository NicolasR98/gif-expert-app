import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => {
	const category = 'Warcaft';

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('Should display correctly', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});
	test('should show the correct component and match with the snapshot', () => {
		const gifs = [
			{
				id: '123',
				title: 'gif example',
				url: 'http://localhost/gifs/gif_example.gif',
			},
		];
		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('p').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
