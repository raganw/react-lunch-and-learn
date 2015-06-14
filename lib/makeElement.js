'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

export default function makeElement(Element, props = {}) {
  let element = TestUtils.renderIntoDocument(
    <Element {...props} />
  );
  let node = ReactDOM.findDOMNode(element);
  return { element, node };
}
