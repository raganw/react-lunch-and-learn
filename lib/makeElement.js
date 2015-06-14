'use strict';

import React from 'react/addons';
let { TestUtils } = React.addons;

export default function makeElement(Element, props = {}) {
  let element = TestUtils.renderIntoDocument(
    <Element {...props} />
  );
  let node = React.findDOMNode(element);
  return { element, node };
}
