'use strict';

import React, { Component } from 'react';
import styles from './HelloWorld.scss';
import animationStyles from './animate.css';
import cx from 'classnames';

export default class HelloWorld extends Component {
  render() {
    let classes = cx(
      styles.content,
      animationStyles.rubberBand,
      animationStyles.animated,
      animationStyles.infinite
    );
    return (
      <div className={styles.root}>
        <div className={classes}>
          Hello World!
        </div>
      </div>
    );
  }
}
