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

        let preventDispatch = this.props.preventDispatch;
        let extraProps = { preventDispatch };

        return (
            <Switch>
                <Route path="/" exact render={ (props) => (<SearchPage {...props} data={extraProps} />) } />
                <Route path="/search/:query" render={ (props) => (<SearchPage {...props} data={extraProps} />) } />
                <Route path="/film/:name" render={ (props) => (<DetailsPage {...props} data={extraProps} />) } />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        );
    }

}