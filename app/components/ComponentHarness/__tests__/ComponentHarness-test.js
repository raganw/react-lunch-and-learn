'use strict';

import React from 'react/addons';
import ComponentHarness from '../ComponentHarness';
import { expect } from 'chai';
import makeElement from 'makeElement';
let { TestUtils } = React.addons;

describe('ComponentHarness', () => {

  it('is a <ul/>', () => {
    let { node } = makeElement(ComponentHarness);
    expect(node).to.be.an.instanceOf(HTMLUListElement);
  });

});
