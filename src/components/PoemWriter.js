import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemText: "",
      valid: false
    };
  }

  handleChange = e => {
    this.setState(
      {
        poemText: e.target.value
      },
      () => {
        this.checkPoem();
      }
    );
  };

  checkPoem = () => {
    let poem = this.state.poemText.split(/[\n]/);
    if (poem.length === 3) {
      let lineOne = poem[0].trim().split(/[\s]/).length;
      let lineTwo = poem[1].trim().split(/[\s]/).length;
      let lineThree = poem[2].trim().split(/[\s]/).length;
      if (lineOne === 5 && lineTwo === 3 && lineThree === 5) {
        this.setState({
          valid: true
        });
        return;
      }
    }
    this.setState({
      valid: false
    });
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handleChange}
          value={this.state.poemText}
        />
        {!this.state.valid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;
