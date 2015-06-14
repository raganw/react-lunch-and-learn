import React from 'react';
import SVGElement from '../SVGElement';
import { expect } from 'chai';
import makeElement from 'makeElement';

const testSVG = `
<svg width="100%" height="100%" viewBox="0 0 100 100" id="custom-svg">
  <g>
    <rect x="40" y="40" width="20" height="20" fill="red" stroke-width="3" stroke="green"></rect>
  </g>
</svg>
`;

describe('SVGElement', () => {
  it('is a <span /> element', () => {
    let {node} = makeElement(SVGElement);
    expect(node.nodeName).to.equal('SPAN');
  });

  describe('default state', () => {
    let {node} = makeElement(SVGElement);

    it('has a SVG as a child', () => {
      let child = node.firstElementChild;
      expect(child).to.be.an.instanceOf(SVGSVGElement);
    });

    it('shows the socrata logo', () => {
      let child = node.firstElementChild;
      expect(child.id).to.equal('socrata-logo');
    });
  });

  it('merges its className props', () => {
    let className = 'my-cool-class my-other-cool-class';
    let {node} = makeElement(SVGElement, {className});
    expect(node.className).to.have.string(className);
  });

  it('sets its innerHTML to the "svg" prop', () => {
    let {node} = makeElement(SVGElement, {svg: testSVG});
    let child = node.firstElementChild;
    expect(child).to.be.an.instanceOf(SVGSVGElement);
    expect(child.id).to.equal('custom-svg');
  });
});
