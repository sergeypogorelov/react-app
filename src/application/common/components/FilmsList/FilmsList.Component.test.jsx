import React from 'react';
import renderer from 'react-test-renderer';

import FilmsList from './FilmsList.Component';

test('Some name of the test.', () => {

    const props = {
        films: []
    };

    const component = renderer.create(
        <FilmsList films={props.films} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component.props.filmsNotLoaded = true;

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
});