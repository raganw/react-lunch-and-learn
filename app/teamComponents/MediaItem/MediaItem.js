'use strict';

import { mediaItem, mediaElement, mediaLabel } from './MediaItem.css';
import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

function unpack(arr) {
  return arr.map(function(itm) { return itm - 33; }).map(String.fromCharCode).join('');
}

class MediaItem extends Component {

  static propTypes = {
    className: PropTypes.string,
    item: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired
  };

  static defaultProps = {
    item: (<iframe allowFullScreen frameBorder="0" height="768" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" width="1024"></iframe>),
    label: unpack(JSON.parse('[147,82,132,157,93,65,85,86,149,141,84,154,65,147,118,109,134,123]'))
  };

  render() {
    const { className, item, label } = this.props;
    let classes = cx(className, mediaItem);

    return (
      <div className={classes}>
        <div className={mediaElement}>
          {this.props.item}
        </div>
        <div className={mediaLabel}>
          {this.props.label}
        </div>
      </div>
    );
  }
}

export default MediaItem;
