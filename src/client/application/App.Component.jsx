import '../assets/img/ballet.jpg';
import '../assets/img/island.jpg';
import '../assets/img/wings.jpg';

import '../assets/img/search-background.jpg';
import '../assets/img/details-background.jpg';

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchPage from './pages/SearchPage/SearchPage.Component';
import DetailsPage from './pages/DetailsPage/DetailsPage.Component';
import NotFoundPage from './pages/NotFound/NotFoundPage.Component';

export default class App extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/" component={SearchPage} exact />
                <Route path="/search/:query" component={SearchPage} />
                <Route path="/film/:name" component={DetailsPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        );
    }

}