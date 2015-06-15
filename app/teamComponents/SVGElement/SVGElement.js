'use strict';

import React, {Component, PropTypes} from 'react';
import defaultSVG from '!!babel-loader!string-loader!./DefaultSVG.svg';

class SVGElement extends Component {

  render() {
    const { className, svg } = this.props;
    const innerHTML = {
      __html: svg
    };

    return (
      <span className={className} dangerouslySetInnerHTML={innerHTML}></span>
    );
  }

}

SVGElement.propTypes = {
  svg: PropTypes.string.isRequired,
  className: PropTypes.string
};

SVGElement.defaultProps = {
  svg: defaultSVG
};


export default SVGElement;
