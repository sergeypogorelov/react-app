import React from 'react';

import renderer from 'react-test-renderer';

import mainStore from '../../common/stores/mainStore';
import { SearchPage } from './SearchPage.Component';

jest.mock('filmsActions');

test('Component SearchPage works fine.', () => {

    const props = {
        films: [],

        filmsLoaded: false,
        filmsLoading: false,
        filmsNotLoaded: false,

        match: {
            params: {
                query: ''
            }
        },
        location: {
            search: ''
        },
        dispatch: mainStore.dispatch
    };

    let component = renderer.create(
        <SearchPage { ...props } />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    props.filmsNotLoaded = true;

    component = renderer.create(
        <SearchPage { ...props } />
    );

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});