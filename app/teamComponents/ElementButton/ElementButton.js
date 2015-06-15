import styles from './ElementButton.css';
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class ElementButton extends Component {

  handleClick(event) {
    const { onClick, value } = this.props;
    event.preventDefault();
    onClick(value);
  }

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
        [styles.root]: true,
        [styles.isSelected]: isSelected
      }
    );

    return (
      <a className={classes}
         href={href}
         onClick={this.handleClick.bind(this)}>
        {children}
      </a>
    );
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
