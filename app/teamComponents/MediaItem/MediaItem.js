'use strict';

import { mediaItem, mediaElement, mediaLabel } from './MediaItem.css';
import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import defaultImage from './defaultImage.jpg';

class MediaItem extends Component {

  static propTypes = {
    className: PropTypes.string,
    item: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired
  };

  static defaultProps = {
    item: (<img src={defaultImage} />),
    label: 'Default Label'
  };

  render() {
    const { className, item, label } = this.props;
    let classes = cx(className, mediaItem);

    return (null);
  }
}

export default MediaItem;
