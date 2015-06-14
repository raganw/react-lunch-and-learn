import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ComponentHarness from '../ComponentHarness';
import { expect } from 'chai';
import makeElement from 'makeElement';

describe('ComponentHarness', () => {

  it('is a <ul/>', () => {
    let { node } = makeElement(ComponentHarness);
    expect(node).to.be.an.instanceOf(HTMLUListElement);
  });

});
