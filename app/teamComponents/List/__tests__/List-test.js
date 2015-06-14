import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import List from '../List';
import { expect } from 'chai';
import makeElement from 'makeElement';
import filter from 'lodash/collection/filter';
import forEach from 'lodash/collection/forEach';

describe('List', () => {
  it('is a <ul/> element', () => {
    let {node} = makeElement(List);
    expect(node).to.be.an.instanceOf(HTMLUListElement);
  });

  describe('default state', () => {
    let node;
    beforeEach(() => {
      node = makeElement(List).node;
    });

    it('has 6 children', () => {
      expect(node.children.length).to.equal(6);
    });

    describe('children', () => {
      let children;
      beforeEach(() => {
        children = node.children;
      });

      it('are all "li" elements', () => {
        let liChildren = filter(children, ({nodeName}) => nodeName === 'LI');
        expect(liChildren.length).to.equal(children.length);
      });

      it('all contain an "h2" element', () => {
        let h2Elements = filter(children, ({firstElementChild}) => firstElementChild.nodeName === 'H2');
        expect(h2Elements.length).to.equal(children.length);
      });

      it('all have the correct innerHTML', () => {
        forEach(children, ({firstElementChild}, index) => {
          expect(firstElementChild.innerHTML).to.equal(`Item ${index + 1}`);
        });
      });
    });

  });

  it('merges its className props', () => {
    let className = 'my-cool-class my-other-cool-class';
    let {node} = makeElement(List, {className});
    expect(node.className).to.have.string(className);
  });

  describe('children', () => {
    let children;
    beforeEach(() => {
      let element = TestUtils.renderIntoDocument(
        <List>
          <strong id="child1">Custom Child 1</strong>
          <strong id="child2">Custom Child 2</strong>
        </List>
      );
      let node = ReactDOM.findDOMNode(element);
      children = node.children;
    });

    it('are all "li" elements', () => {
      let liChildren = filter(children, ({nodeName}) => nodeName === 'LI');
      expect(liChildren.length).to.equal(children.length);
    });

    it('wraps children props', () => {
      let firstGrandChild = children.item(0).firstElementChild;
      expect(firstGrandChild.nodeName).to.equal('STRONG');
      expect(firstGrandChild.id).to.equal('child1');
      let secondGrandChild = children.item(1).firstElementChild;
      expect(secondGrandChild.nodeName).to.equal('STRONG');
      expect(secondGrandChild.id).to.equal('child2');
    });

  });

});
