import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import renderer from 'react-test-renderer';

import mainStore from '../../common/stores/mainStore';
import { DetailsPage } from './DetailsPage.Component';

jest.mock('filmsActions');

test('Component DetailsPage works fine.', () => {

    const props = {
        film: [],
        
        filmLoaded: false,
        filmLoading: false,
        filmNotLoaded: false,

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
        <Router>
            <DetailsPage { ...props } />
        </Router>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    props.filmNotLoaded = true;
    props.filmsNotLoaded = true;

    component = renderer.create(
        <Router>
            <DetailsPage { ...props } />
        </Router>
    );

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});