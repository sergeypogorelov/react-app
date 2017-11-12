import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmsList from './FilmsList.Component';

configure({ adapter: new Adapter() });

test('Component FilmsList works fine.', () => {

    const props = {
        films: [],
        filmsLoading: true,
        filmsNotLoaded: false
    };

    const wrapper = mount(
        <FilmsList { ...props } />
    );

    expect(wrapper.text()).toEqual('Loading...');

    wrapper.setProps({
        films: [],
        filmsLoading: false,
        filmsNotLoaded: true
    });

    expect(wrapper.text()).toEqual('Something\'s wrong');
    
});