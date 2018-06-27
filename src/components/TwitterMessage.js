import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };
  }

  //this.handleUserInput = this.handleUserInput.bind(this)

  handleUserInput = (event) => {
    this.setState( {
      input: event.target.value
    })
  }

  render() {
    console.log(this.state.input)
    return (
      //console.log(this.handleUserInput)
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleUserInput} value={this.state.input}/>
        <p>You have {this.props.maxChars - this.state.input.length} characters left!</p>
      </div>
    );
  }
}

export default TwitterMessage;
