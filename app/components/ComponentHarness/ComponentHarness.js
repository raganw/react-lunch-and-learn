import { componentContainer, componentItem, componentList } from './_ComponentHarness.scss';
import React, {Component, PropTypes} from 'react';

class ComponentHarness extends Component {

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

ComponentHarness.propTypes = {
  components: PropTypes.array.isRequired
};

ComponentHarness.defaultProps = {
  components: []
};

export default ComponentHarness;
