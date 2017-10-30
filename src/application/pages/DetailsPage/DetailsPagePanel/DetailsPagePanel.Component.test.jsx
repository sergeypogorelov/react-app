import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import renderer from 'react-test-renderer';

import DetailsPagePanel from './DetailsPagePanel.Component';

test('Component DetailsPagePanel works fine.', () => {
    
    const props = {
        filmLoaded: true,
        film: {
            director: 'John Smith'
        }
    };

    let component = renderer.create(
        <DetailsPagePanel { ...props } />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    props.filmLoaded = false;

    component = renderer.create(
        <DetailsPagePanel { ...props } />
    );

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});