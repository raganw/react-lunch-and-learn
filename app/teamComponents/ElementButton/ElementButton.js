'use strict';

import styles from './ElementButton.css';
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class ElementButton extends Component {

  render() {
    const {
      children,
      className,
      href,
      isSelected
    } = this.props;

    const classes = cx(
      className,
      {
        [styles.root]: true
      }
    );

    return (null);
  }

}

ElementButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

ElementButton.defaultProps = {
  children: (<h1>Click Me!</h1>),
  href: '#',
  value: 'My Value',
  isSelected: false,
  onClick: function(value) {
    window.alert(value);
  }
};

export default ElementButton;
