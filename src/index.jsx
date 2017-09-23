import './assets/img/ballet.jpg';
import './assets/img/island.jpg';
import './assets/img/wings.jpg';

import './assets/img/search-background.jpg';
import './assets/img/details-background.jpg';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchPage from './application/pages/SearchPage/SearchPage.Component';
import DetailsPage from './application/pages/DetailsPage/DetailsPage.Component';
import NotFoundPage from './application/pages/NotFound/NotFoundPage.Component';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={SearchPage} exact />
            <Route path="/search/:query" component={SearchPage} />
            <Route path="/film/:name" component={DetailsPage} />
            <Route path="*" component={NotFoundPage} />
        </Switch>
    </Router>,
    document.getElementById('app')
);