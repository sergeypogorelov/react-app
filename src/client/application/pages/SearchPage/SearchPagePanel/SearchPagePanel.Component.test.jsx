import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import renderer from 'react-test-renderer';

import SearchPagePanel from './SearchPagePanel.Component';

test('Component SearchPagePanel works fine.', () => {

    const props = {
        films: [],
        filmsLoaded: true,

        sortType: 'pubdate'
    };

    let component = renderer.create(
        <SearchPagePanel { ...props } />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    props.filmsLoaded = false;

    component = renderer.create(
        <SearchPagePanel { ...props } />
    );

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});