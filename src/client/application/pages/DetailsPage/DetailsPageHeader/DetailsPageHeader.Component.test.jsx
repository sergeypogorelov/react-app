import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import renderer from 'react-test-renderer';

import DetailsPageHeader from './DetailsPageHeader.Component';

test('Component DetailsPageHeader works fine.', () => {

    const props = {
        filmLoaded: true,
        film: {
            name: 'name',
            image: 'image',
            title: 'title',
            year: 'year',
            genre: 'genre'
        }
    };

    let component = renderer.create(
        <Router>
            <DetailsPageHeader { ...props } />
        </Router>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    props.filmLoaded = false;

    component = renderer.create(
        <Router>
            <DetailsPageHeader { ...props } />
        </Router>
    );

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});