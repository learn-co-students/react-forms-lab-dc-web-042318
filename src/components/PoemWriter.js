import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = { poem: '', valid: false };
    this.handleChange = this.handleChange.bind(this);
    this.checkIfValid = this.checkIfValid.bind(this);
  }

  handleChange(event) {
    this.setState({ poem: event.target.value });
  }

  checkIfValid() {
    const lines = this.state.poem.split('\n');
    const splitLines = lines.map(line => line.split(' '));
    const validLines = splitLines.map(line => line.filter(word => Boolean(word)));
    if (
      validLines.length === 3 &&
      validLines[0].length === 5 &&
      validLines[1].length === 3 &&
      validLines[2].length === 5
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} />
        {this.checkIfValid() ? (
          ''
        ) : (
          <div id="poem-validation-error" style={{ color: 'red' }}>
            'This poem is not written in the right structure!'
          </div>
        )}
      </div>
    );
  }
}

export default PoemWriter;
