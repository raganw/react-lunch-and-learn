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

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  onSubmit = (event) => {
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
    event.preventDefault();
  }

  render() {
    const {
      action,
      className,
      submitButtonValue
    } = this.props;

    let classes = cx(className, textInputForm);
    return (
      <form action="/submit" onSubmit={this.onSubmit} className={classes} method="post">
        <input className={textInput} name="value" type="text" value={this.state.inputValue} onChange={this.onInputChange} />
        <input className={textInputFormSubmit} type="submit" value={submitButtonValue} />
      </form>
    );
  }
}

export default TextInputForm;
