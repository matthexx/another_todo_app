import React from 'react';
import ReactDOM from 'react-dom';
import Route from './route';


import './index.css';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
    <Route/>,
    document.getElementById('root'));


serviceWorker.unregister();
