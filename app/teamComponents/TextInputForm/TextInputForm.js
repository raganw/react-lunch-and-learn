import { textInputForm, textInput, textInputFormSubmit } from './TextInputForm.css';
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class TextInputForm extends Component {

  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  handleInput(event) {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue } = this.state;
    const {
      action,
      className,
      submitButtonValue
    } = this.props;

    let classes = cx(className, textInputForm);

    return (
      <form
        action={action}
        className={classes}
        method="post"
        onSubmit={this.handleSubmit.bind(this)}>
        <input className={textInput}
               name="value"
               onChange={this.handleInput.bind(this)}
               type="text"
               value={inputValue}
          />
        <input className={textInputFormSubmit}
               type="submit"
               value={submitButtonValue}
          />
      </form>
    );
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
