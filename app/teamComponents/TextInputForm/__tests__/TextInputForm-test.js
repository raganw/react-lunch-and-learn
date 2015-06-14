'use strict';

import React from 'react/addons';
import TextInputForm from '../TextInputForm';
import { expect } from 'chai';
import chai from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import makeElement from 'makeElement';
let { TestUtils } = React.addons;
let { filter } = Array.prototype;

function getChildInput(node, type) {
  return node.children::filter(child => child.type === type)[0];
}

describe('TextInputForm', () => {
  it('is a <form /> element', () => {
    let {node} = makeElement(TextInputForm);
    expect(node).to.be.an.instanceOf(HTMLFormElement);
  });

  it('has a text input with name "value"', () => {
    let {node} = makeElement(TextInputForm);
    let textInput = getChildInput(node, 'text');
    expect(textInput).to.be.an.instanceOf(HTMLInputElement);
    expect(textInput.name).to.equal('value');
  });

  describe('default state', () => {
    let {node} = makeElement(TextInputForm);

    it('has a submit button that says "Go!"', () => {
      let submitButton = getChildInput(node, 'submit');
      expect(submitButton).to.be.an.instanceOf(HTMLInputElement);
      expect(submitButton.value).to.equal('Go!');
    });

    it('shows an alert when submitted', () => {
      sinon.stub(window, 'alert');
      TestUtils.Simulate.submit(node);
      expect(window.alert).to.have.callCount(1);
      expect(window.alert).to.have.been.calledWith('');
      window.alert.restore();
    });

    it('has a submit method of "post"', () => {
      expect(node.method).to.equal('post');
    });

    it('has a submit action of "/submit"', () => {
      expect(node.attributes.getNamedItem('action').value).to.equal('/submit');
    });

  });

  it('merges its className props', () => {
    let className = 'my-cool-class my-other-cool-class';
    let {node} = makeElement(TextInputForm, {className});
    expect(node.className).to.have.string(className);
  });

  it('ensures the text input is what has been entered', () => {
    let input = 'Test Input';
    let {node} = makeElement(TextInputForm);
    let textInput = getChildInput(node, 'text');
    TestUtils.Simulate.change(textInput, {target: {value: input}});
    expect(textInput.value).to.equal(input);
  });

  it('calls its "onSubmit" props on submit', () => {
    let stub = sinon.stub();
    let {node} = makeElement(TextInputForm, {onSubmit: stub});
    TestUtils.Simulate.submit(node);
    expect(stub).to.have.callCount(1);
    expect(stub).to.have.been.calledWith('');
  });

  it('calls its "onSubmit" with what has been entered in the text input', () => {
    let input = 'Test Input';
    let stub = sinon.stub();
    let {node} = makeElement(TextInputForm, {onSubmit: stub});
    let textInput = getChildInput(node, 'text');
    TestUtils.Simulate.change(textInput, {target: {value: input}});
    TestUtils.Simulate.submit(node);
    expect(stub).to.have.been.calledWith(input);
  });

  it('calls "preventDefault" on the submit event', () => {
    let mockEvent = {preventDefault: sinon.stub()};
    let {node} = makeElement(TextInputForm, {onSubmit: sinon.stub()});
    TestUtils.Simulate.submit(node, mockEvent);
    expect(mockEvent.preventDefault).to.have.callCount(1);
  });

  it('resets the text input to an empty string after submit', () => {
    let {node} = makeElement(TextInputForm, {onSubmit: sinon.stub()});
    let textInput = getChildInput(node, 'text');
    TestUtils.Simulate.submit(node);
    expect(textInput.value).to.equal('');
  });

});
