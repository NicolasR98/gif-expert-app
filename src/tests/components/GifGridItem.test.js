import { shallow } from 'enzyme';
import react from 'react';
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests on <GifGridItem />', () => {
	const title = 'testTitle';
	const id = 1;
	const url = 'https://localhost/hey.jpg';
	const wrapper = shallow(<GifGridItem title={title} id={id} url={url} />);
	test('should show the component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should have a paragraph with title', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});

	test('the image should have the url as source and alt as title', () => {
		const img = wrapper.find('img');
		const imgSrc = img.prop('src');
		expect(imgSrc).toBe(url);
	});

	test('Should have the class "animate__backInRight"', () => {
		const expectedClassName = 'animate__backInRight';
		const div = wrapper.find('div');

		expect(div.hasClass(expectedClassName)).toEqual(true);
	});
});
