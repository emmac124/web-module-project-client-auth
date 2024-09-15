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
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err.response)
      })
  };

  render() {
    return (
            <form onSubmit={this.login}>
              <label htmlFor='username'>Username</label>
              <input
              id='username'
              name='username'
              type='text'
              onChange={this.handleChange}
              value={this.state.credentials.username} />
              <label htmlFor='password'>Password</label>
              <input
              id='password'
              name='password'
              type='password'
              onChange={this.handleChange}
              value={this.state.credentials.password} />
              <button>Login</button>
            </form>
        )
    }
}

export default Login;

// FUNCTIONAL COMPONENT

// import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
// import axios from "axios";

// const initialFormValues = {
//   username: '', 
//   password: ''
// }

// const Login = () => {

//   const [formValues, setFormValues] = useState(initialFormValues);
//   const { push } = useHistory();
  
//   const handleChange = (e) => {
//     setFormValues({ ...setFormValues, 
//       [e.target.name]: e.target.value
//       })
//   };

//   const login = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:5000/api/login", formValues)
//       .then(res => {
//         console.log(res)
//         localStorage.setItem('token', res.data.payload);
//         push("/friends");
//       })
//       .catch(err => {
//         console.log(err.response)
//       })
//   };

//     return (
//             <form onSubmit={login}>
//               <label htmlFor='username'>Username</label>
//                 <input
//                 id='username'
//                 name='username'
//                 type='text'
//                 onChange={handleChange}
//                 value={formValues.username} />
//               <label htmlFor='password'>Password</label>
//                 <input
//                 id='password'
//                 name='password'
//                 type='password'
//                 onChange={handleChange}
//                 value={formValues.password} />
//               <button>Login</button>
//             </form>
//         );
// }

// export default Login;