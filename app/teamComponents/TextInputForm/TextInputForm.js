'use strict';

import { textInputForm, textInput, textInputFormSubmit } from './TextInputForm.css';
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class TextInputForm extends Component {

  static propTypes = {
    action: PropTypes.string.isRequired,
    className: PropTypes.string,
    submitButtonValue: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    action: '/submit',
    submitButtonValue: 'Go!',
    onSubmit: function(value) {
      alert(value);
    }
  };

  state = { inputValue: '' };

  render() {
    const {
      action,
      className,
      submitButtonValue
    } = this.props;

    let classes = cx(className, textInputForm);

    return (null);
  }
}

export default TextInputForm;
