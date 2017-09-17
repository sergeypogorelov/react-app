import './assets/img/ballet.jpg';
import './assets/img/island.jpg';
import './assets/img/wings.jpg';

import './assets/img/search-background.jpg';
import './assets/img/details-background.jpg';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SearchPage from './application/pages/SearchPage/SearchPage.Component';
import DetailsPage from './application/pages/DetailsPage/DetailsPage.Component';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={SearchPage} exact />
            <Route path="/search" component={SearchPage} />
            <Route path="/details" component={DetailsPage} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
);