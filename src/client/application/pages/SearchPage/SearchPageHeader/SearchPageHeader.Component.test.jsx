import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import renderer from 'react-test-renderer';

import SearchPageHeader from './SearchPageHeader.Component';

test('Component SearchPageHeader works fine.', () => {

    const props = {
        type: 'title',
        query: 'query'
    };

    let component = renderer.create(
        <SearchPageHeader { ...props } />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    props.type = 'director';
    props.query = 'query changed';

    component = renderer.create(
        <SearchPageHeader { ...props } />
    );

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});