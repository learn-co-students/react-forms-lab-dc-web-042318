import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  updateUsername = event => {
    this.setState({ username: event.target.value });
  };

  updatePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.onSubmit();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input
              onChange={this.updateUsername}
              id="test-username"
              type="text"
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={this.updatePassword}
              id="test-password"
              type="password"
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
