'use strict';

import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';

import ComponentHarness from './components/ComponentHarness/ComponentHarness';

let componentFiles = require.context('./teamComponents', true, /\.jsx?$/);

let components = componentFiles.keys().
  filter((key) => { return !/__tests__/.test(key); }).
  map((path) => {
    let name = /\/([^\/]+)\//.exec(path)[1];
    return {
      name,
      path,
      component: componentFiles(path)
    };
  });

React.render(
  <ComponentHarness components={components} />,
  document.getElementById('app')
);
