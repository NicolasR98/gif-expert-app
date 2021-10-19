import { shallow } from 'enzyme';
import React from 'react';
import { GifExpertApp } from '../GifExpertApp';

describe('Tests on <GifExpertApp />', () => {
    const wrapper = shallow(<GifExpertApp />)
    const categories = ['doom', 'warcraft'];

    test('Should display correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Should show a list of categories', () => {
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)    
    })
    
    
})
