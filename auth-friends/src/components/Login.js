import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    error: "",
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      },
      error: "",
    });
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => {
        console.log(err.response)
      })
  };

  render() {
    return (
          <div>
            <form onSubmit={this.login}>
              <input
              name='username'
              type='text'
              onChange={this.handleChange}
              value={this.state.credentials.username} />
              <input
              name='password'
              type='password'
              onChange={this.handleChange}
              value={this.state.credentials.password} />
              <button>Login</button>
            </form>
          </div>
        )
    }
}

export default Login;
