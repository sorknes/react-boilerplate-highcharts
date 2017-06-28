/*  ------------------------------------------------
./src/index.js
---------------------------------------------------- */


import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

// stylesheets
require('./scss/main.scss');

render(<App />, document.querySelector('#app'));
