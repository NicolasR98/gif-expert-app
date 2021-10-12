import { shallow } from 'enzyme';
import react from 'react';
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests on <GifGridItem />', () => {
	test('should show the component correctly', () => {
		const wrapper = shallow(<GifGridItem />);
		expect(wrapper).toMatchSnapshot();
	});
});
