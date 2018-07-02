import React from "react";
import PropTypes from 'prop-types';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text"
        value = {this.state.message}
        onChange={this.handleMessage}
        />
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number,
};

TwitterMessage.defaultProps = {
  maxChars: 140,
}

export default TwitterMessage;
