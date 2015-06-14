'use strict';

import HelloWorld from '../HelloWorld';
import { expect } from 'chai';
import makeElement from 'makeElement';

describe('HelloWorld', () => {
  let node;

  beforeEach(() => {
    node = makeElement(HelloWorld).node;
  });

  it('is a <div/>', () => {
    expect(node).to.be.an.instanceOf(HTMLDivElement);
  });

  it('greets the user', () => {
    expect(node.innerHTML).to.have.string('Hello World');
  });

});
