import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = { username: '', password: '' };
    this.updateUser = this.updateUser.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  updateUser(event) {
    this.setState({ username: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  submitLogin(event) {
    event.preventDefault();
    if (this.state.password && this.state.username) {
      console.log('ok');
    }
  }

  render() {
    return (
      <form onSubmit={this.submitLogin}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.updateUser} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.updatePassword} />
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
