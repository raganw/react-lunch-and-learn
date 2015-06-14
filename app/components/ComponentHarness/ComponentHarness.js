'use strict';

import { componentContainer, componentItem, componentList } from './_ComponentHarness.scss';
import React, {Component, PropTypes} from 'react';

class ComponentHarness extends Component {

  static propTypes = {
    components: PropTypes.array.isRequired
  };

  static defaultProps = {
    components: []
  };

  renderComponents(components) {

    return components.map(({ name, component: Item }, index) => {
      return (
        <li className={componentItem} key={index}>
          <h1>{name}</h1>
          <div className={componentContainer}>
            <Item />
          </div>
        </li>
      );
    });
  }

  render() {
    const { components } = this.props;

    return (
      <ul className={componentList}>
        {this.renderComponents(components)}
      </ul>
    );
  }
}

export default ComponentHarness;
