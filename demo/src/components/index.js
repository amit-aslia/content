import React, { Component } from 'react';

class INdex extends Component {
  state = {
    value: '',
    mails: [],
    isError: false
  }

  mailValidation = mail => {
    const re = /\S+@\S+\.\S+/;
    return re.test(mail);
  }

  validate = (e) => {
    const { value } = e.target;
    const validate = this.mailValidation(this.state.value);
    if (validate) {
      this.setState({ mails: [...this.state.mails, value], value: '' })
      e.target.value = '';
    }
    else {
      this.setState({ isError: true });
    }
  };

  handleChange = (e) => {
    const { value } = e.target;
    if (value.indexOf(' ') > 0) {
      return this.validate(e);
    }
    else {
      this.setState({ value, isError: false });
    }
  };

  onKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      this.validate(event);
    }
  }

  deleteMail = (index) => {
    const { mails } = this.state;
    const updatedMails = mails.filter((mail, i) => i !== index);
    this.setState({ mails: updatedMails })
  }
  render() {
    const { isError, mails } = this.state;
    return (
      <div>
        <span style={{display: 'flex'}}>
          {mails.map((mail, index) =>
            <span >{mail}<span onClick={() => this.deleteMail(index)}>x</span></span>
          )}
          <input type="text" onKeyPress={this.onKeyPressHandler} onChange={this.handleChange} /></span>
        {isError ? <h3>This is an Error</h3> : null}
      </div>
    );
  }
}

export default INdex;