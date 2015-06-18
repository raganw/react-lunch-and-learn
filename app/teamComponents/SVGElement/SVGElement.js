'use strict';

import React, {Component, PropTypes} from 'react';
import defaultSVG from '!!babel-loader?optional=runtime&stage=0!string-loader!./DefaultSVG.svg';

class SVGElement extends Component {

  static propTypes = {
    svg: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    svg: defaultSVG
  };

  render() {
    const { className, svg } = this.props;
    let html = {__html: svg};
    return <span className={className} dangerouslySetInnerHTML={html} />;
  }

}

export default SVGElement;
