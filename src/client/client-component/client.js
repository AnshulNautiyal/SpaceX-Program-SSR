import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../server-component/Home';

ReactDOM.hydrate(
    <BrowserRouter >
        <Route exact path="/" render={() => <Home data={window.__APP_INITIAL_STATE__}/>} />
    </BrowserRouter>
, document.getElementById('root'));