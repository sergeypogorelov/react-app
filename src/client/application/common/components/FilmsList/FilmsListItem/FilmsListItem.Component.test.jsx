import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import renderer from 'react-test-renderer';

import FilmsListItem from './FilmsListItem.Component';

test('Component FilmsListItem works fine.', () => {

    const props = {
        item: {
            name: 'name',
            image: 'image',
            title: 'title',
            year: 'year',
            genre: 'genre'
        }
    };

    const component = renderer.create(
        <Router>
            <FilmsListItem { ...props } />
        </Router>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});