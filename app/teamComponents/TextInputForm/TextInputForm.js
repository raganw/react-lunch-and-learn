import { textInputForm, textInput, textInputFormSubmit } from './TextInputForm.css';
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class TextInputForm extends Component {

  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

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

TextInputForm.propTypes = {
  action: PropTypes.string.isRequired,
  className: PropTypes.string,
  submitButtonValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

TextInputForm.defaultProps = {
  action: '/submit',
  submitButtonValue: 'Go!',
  onSubmit: function(value) {
    alert(value);
  }
};

export default TextInputForm;
