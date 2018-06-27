import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: " ",
      isValid: true
    };
  }


  isPoemValid = () => {
    let str = this.state.content;
    let lines = str.split(/\r\n|\r|\n/);
    
    if (lines.length === 3 && 
        lines[0].split(" ").length === 5 &&
        lines[1].split(" ").length === 3 &&
        lines[2].split(" ").length === 5) 
    {
      return true;
      
    } else {
      return false;
    }
  };

  handleInput = event => {
    this.setState({
      content: event.target.value,
      isValid: this.isPoemValid()
    });
  };

  render() {
    //  console.log(this.state.content)
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.handleInput}
        />
        {!this.state.isValid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;
