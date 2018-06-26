import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweetValue: ""
    };
  }

  handleChange = e => {
    console.log(e);
    this.setState({
      tweetValue: e.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>{this.props.maxChars - this.state.tweetValue.length}</strong>
        <input
          type="text"
          value={this.state.tweetValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TwitterMessage;
