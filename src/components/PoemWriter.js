import React from "react";



class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      isValid: true
    };
  }

  isValidPoem(poem){
    const poemLines = poem.split("\n").map(line => line.trim());
    const isRightAmountOfLines = poemLines.length === 3;
  
    if(poem && isRightAmountOfLines) {
      console.log(poemLines)
      return (
        poemLines[0].split(" ").length === 5 &&
        poemLines[1].split(" ").length === 3 &&
        poemLines[2].split(" ").length === 5
      )
    } else {
      return false
    }
  }

  

  setPoemContent = (event) => {
    this.setState({
      content: event.target.value,
      isValid: this.isValidPoem(this.state.content)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent} />
        {!this.state.isValid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
        ): null } 
      </div>
    );
  }
}

export default PoemWriter;
