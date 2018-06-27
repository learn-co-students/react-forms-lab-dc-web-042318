import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.validation = false;
    this.state = {
      content: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.validatePoem = this.validatePoem.bind(this);
  }

  validatePoem() {
    let formattedContent = this.state.content.split("\n");
    formattedContent = formattedContent.map(line =>
      line.trim().replace(/\s+/g, " ")
    );
    if (
      formattedContent.length === 3 &&
      formattedContent[0].split(" ").length === 5 &&
      formattedContent[1].split(" ").length === 3 &&
      formattedContent[2].split(" ").length === 5
    ) {
      return true;
    } else {
      return false;
    }
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.handleChange}
        />
        {this.validatePoem() ? (
          ""
        ) : (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        )}
      </div>
    );
  }
}

export default PoemWriter;
