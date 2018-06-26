import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    return this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        {this.props.maxChars - this.state.value.length}
        <br />
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value} />
      </div>
    );
  }
}

export default TwitterMessage;
