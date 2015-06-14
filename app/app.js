'use strict';

import './favicon.ico';
import './index.html';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/HelloWorld/HelloWorld';

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
