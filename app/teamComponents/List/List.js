'use strict';

import { listElement, listItem } from './List.css';
import React, {Children, Component, PropTypes} from 'react';
import cx from 'classnames';

class List extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    children: [
      <h2>Item 1</h2>,
      <h2>Item 2</h2>,
      <h2>Item 3</h2>,
      <h2>Item 4</h2>,
      <h2>Item 5</h2>,
      <h2>Item 6</h2>
    ]
  };

  render() {
    const { children, className } = this.props;
    let listElementClassName = cx(className, listElement);

    var childElements = Children.map(children, function(child) {
      return <li className={listItem}>{child}</li>;
    });

    return (
      <ul className={listElementClassName}>
        {childElements}
      </ul>
    );
  }
}

export default List;
