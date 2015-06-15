import { listElement, listItem } from './List.css';
import React, {Children, Component, PropTypes} from 'react';
import cx from 'classnames';

class List extends Component {
  renderItems(children) {
    return Children.map(
      children,
      (component) => (<li className={listItem}>{component}</li>)
    );
  }

  render() {
    const { children, className } = this.props;
    let classes = cx(className, listElement);

    return (
      <ul className={classes}>
        {this.renderItems(children)}
      </ul>
    );
  }
}

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

List.defaultProps = {
  children: [
    <h2>Item 1</h2>,
    <h2>Item 2</h2>,
    <h2>Item 3</h2>,
    <h2>Item 4</h2>,
    <h2>Item 5</h2>,
    <h2>Item 6</h2>
  ]
};

export default List;
