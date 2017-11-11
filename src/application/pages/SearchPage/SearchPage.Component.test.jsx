import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import mainStore from '../../common/stores/mainStore';
import { SearchPage } from './SearchPage.Component';

jest.mock('filmsActions');

configure({ adapter: new Adapter() });

test('Component SearchPage works fine.', () => {

    const props = {
        films: [],

        filmsLoaded: false,
        filmsLoading: false,
        filmsNotLoaded: false,

        match: {
            params: {
                query: 'header'
            }
        },
        location: {
            search: '?searchType=title&searchSort=rating'
        },
        dispatch: mainStore.dispatch
    };

    let wrapper = mount(
        <SearchPage { ...props } />
    );

    console.log(wrapper);

});