'use strict';

import React from 'react/addons';
import ElementButton from '../ElementButton';
import chai from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import { expect } from 'chai';
import makeElement from 'makeElement';
let { TestUtils } = React.addons;

describe('ElementButton', () => {
  it('is a <a/> element', () => {
    let {node} = makeElement(ElementButton);
    expect(node).to.be.an.instanceOf(HTMLAnchorElement);
  });

  describe('default state', () => {
    let {node} = makeElement(ElementButton);

    it('is not selected', () => {
      expect(node.className).to.not.have.string('isSelected');
    });

    it('has a href of "#"', () => {
      expect(node.attributes.getNamedItem('href').value).to.equal('#');
    });

    it('triggers an alert when clicked', () => {
      sinon.stub(window, 'alert');
      TestUtils.Simulate.click(node);
      expect(window.alert).to.have.been.calledWith('My Value');
      window.alert.restore();
    });

    it('has an <h1/> child that says "Click Me!"', () => {
      let child = node.firstElementChild;
      expect(child.tagName).to.equal('H1');
      expect(child.innerHTML).to.equal('Click Me!');
    });

  });

  it('merges its className props', () => {
    let className = 'my-cool-class my-other-cool-class';
    let {node} = makeElement(ElementButton, {className});
    expect(node.className).to.have.string(className);
  });

  it('is selected if passed the "isSelected" props', () => {
    let {node} = makeElement(ElementButton, {isSelected: true});
    expect(node.className).to.have.string('isSelected');
  });

  it('renders the children passed to it', () => {
    let element = TestUtils.renderIntoDocument(
      <ElementButton><strong>Custom Child</strong></ElementButton>
    );
    let node = React.findDOMNode(element);
    let child = node.firstElementChild;
    expect(child.tagName).to.equal('STRONG');
    expect(child.innerHTML).to.equal('Custom Child');
  });

  it('calls the "onClick" prop when clicked', () => {
    let stub = sinon.stub();
    let {node} = makeElement(ElementButton, {onClick: stub});
    TestUtils.Simulate.click(node);
    expect(stub).to.have.callCount(1);
  });

  it('calls the "onClick" prop with the "value" prop as an argument', () => {
    let stub = sinon.stub();
    let customValue = 'Custom Value';
    let {node} = makeElement(ElementButton, {onClick: stub, value: customValue});
    TestUtils.Simulate.click(node);
    expect(stub).to.have.been.calledWith(customValue);
  });

  it('sets the href if passed as props', () => {
    let customHref = '/foo/bar';
    let {node} = makeElement(ElementButton, {href: customHref});
    expect(node.attributes.getNamedItem('href').value).to.equal(customHref);
  });

});
