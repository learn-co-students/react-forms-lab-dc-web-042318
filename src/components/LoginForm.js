import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = ( event ) => {
    event.preventDefault();
    const {username, password} = this.state

    // const username = this.state.username
    // const password = this.state.password

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({username, password});
  };

  handleUsernameChange = event => {
    console.log('in username change', event.target.value)
    this.setState({username: event.target.value});
  };

  handlePasswordChange = event => {
    this.setState({password: event.target.value});
  };

  // handleInputChange = (event) => {
  //   const {name, value} = event.target    
    
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text"  name ="username" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;


// const HogTile = ({ name, handleClick }) => {


//   return( <li onClick={handleClick}> {name} </li>)
// }
