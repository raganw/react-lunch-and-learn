import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

export default function makeElement(Element, props = {}) {
  let element = TestUtils.renderIntoDocument(
    <Element {...props} />
  );
  let node = ReactDOM.findDOMNode(element);
  return { element, node };
}
