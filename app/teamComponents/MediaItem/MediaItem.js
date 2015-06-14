import { mediaItem, mediaElement, mediaLabel } from './MediaItem.css';
import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import defaultImage from './defaultImage.jpg';

class MediaItem extends Component {

  render() {
    const { className, item, label } = this.props;
    let classes = cx(className, mediaItem);

    return (null);
  }
}

MediaItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired
};

MediaItem.defaultProps = {
  item: (<img src={defaultImage} />),
  label: 'Default Label'
};

export default MediaItem;
