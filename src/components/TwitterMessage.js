import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.updateMessage = this.updateMessage.bind(this);
  }

  updateMessage = message => {
    this.setState({ value: message.target.value });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.updateMessage}
          type="text"
          value={this.state.value}
        />
        <p>{this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
