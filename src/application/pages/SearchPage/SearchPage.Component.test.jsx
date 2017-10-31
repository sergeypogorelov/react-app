import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';

import filmsActionsMock from '../../common/actions/__mocks__/filmsActions';
import filmsActions from '../../common/actions/filmsActions';

import { SearchPage } from './SearchPage.Component';

jest.mock('../../common/actions/filmsActions', () => jest.fn());
filmsActions.mockImplementation(() => filmsActionsMock);

test('Component SearchPage works fine.', () => {

    const props = {
        films: [],

        filmsLoaded: false,
        filmsLoading: false,
        filmsNotLoaded: false
    };

    let component = renderer.create(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <SearchPage { ...props } />
        </MemoryRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});