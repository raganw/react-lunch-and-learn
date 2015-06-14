'use strict';

import React from 'react/addons';
import MediaItem from '../MediaItem';
import { expect } from 'chai';
import makeElement from 'makeElement';
let { TestUtils } = React.addons;

describe('MediaItem', () => {
  it('is a <span /> element', () => {
    let {node} = makeElement(MediaItem);
    expect(node).to.be.an.instanceOf(HTMLDivElement);
  });

  describe('default state', () => {
    let {node} = makeElement(MediaItem);

    it('has an image element', () => {
      let imgChild = node.firstElementChild.firstElementChild;
      expect(imgChild).to.be.instanceOf(HTMLImageElement);
    });

    it('has a label that reads "Default Label"', () => {
      let labelChild = node.lastElementChild;
      expect(labelChild).to.be.an.instanceOf(HTMLDivElement);
      expect(labelChild.innerHTML).to.equal('Default Label');
    });
  });

  it('merges its className props', () => {
    let className = 'my-cool-class my-other-cool-class';
    let {node} = makeElement(MediaItem, {className});
    expect(node.className).to.have.string(className);
  });

  it('sets its label from its "label" props', () => {
    let {node} = makeElement(MediaItem, {label: 'Custom Label'});
    let labelChild = node.lastElementChild;
    expect(labelChild.innerHTML).to.equal('Custom Label');
  });

  it('sets its "media" element from its "item" props', () => {
    let {node} = makeElement(MediaItem, {item: (<h1>Test</h1>)});
    let mediaChild = node.firstElementChild.firstElementChild;
    expect(mediaChild.tagName).to.equal('H1');
    expect(mediaChild.innerHTML).to.equal('Test');
  });
});
