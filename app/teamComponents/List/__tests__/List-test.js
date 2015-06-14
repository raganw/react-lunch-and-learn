'use strict';

import React from 'react/addons';
import List from '../List';
import { expect } from 'chai';
import makeElement from 'makeElement';
let { TestUtils } = React.addons;
let { filter, forEach } = Array.prototype;

describe('List', () => {
  it('is a <ul/> element', () => {
    let {node} = makeElement(List);
    expect(node).to.be.an.instanceOf(HTMLUListElement);
  });

  describe('default state', () => {
    let {node} = makeElement(List);
    it('has 6 children', () => {
      expect(node.children.length).to.equal(6);
    });

    describe('children', () => {
      let children = node.children;

      it('are all "li" elements', () => {
        let liChildren = children
          ::filter(({nodeName}) => nodeName === 'LI');
        expect(liChildren.length).to.equal(children.length);
      });

      it('all contain an "h2" element', () => {
        let h2Elements = children
          ::filter(({firstElementChild}) => firstElementChild.nodeName === 'H2');
        expect(h2Elements.length).to.equal(children.length);
      });

      it('all have the correct innerHTML', () => {
        children::forEach(({firstElementChild}, index) => {
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
    let element = TestUtils.renderIntoDocument(
      <List>
        <strong id="child1">Custom Child 1</strong>
        <strong id="child2">Custom Child 2</strong>
      </List>
    );
    let node = React.findDOMNode(element);
    let children = node.children;

    it('are all "li" elements', () => {
      let liChildren = children
        ::filter(({nodeName}) => nodeName === 'LI');
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
