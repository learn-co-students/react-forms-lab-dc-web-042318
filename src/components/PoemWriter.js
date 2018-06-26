import React from "react";

const validatePoem = poem => {
  const poemLines = poem.split("\n").map(line => line.trim());
  if (poem && poemLines.length === 3) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    );
  } else {
    return false;
  }
};

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemText: "",
      isValid: false
    };
    this.updatePoem = this.updatePoem.bind(this);
    this.renderWarning = this.renderWarning.bind(this);
  }

  updatePoem = event => {
    const content = event.target.value;
    this.setState({
      poemText: content,
      isValid: validatePoem(content)
    });
  };

  renderWarning = () => {
    return (
      <div id="poem-validation-error" style={{ color: "red" }}>
        This poem is not written in the right structure!
      </div>
    );
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poemText}
          onChange={this.updatePoem}
        />
        {!this.state.isValid ? this.renderWarning() : null}
      </div>
    );
  }
}

export default PoemWriter;
