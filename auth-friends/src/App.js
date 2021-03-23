import React from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

import { axiosWithAuth } from './utils/axiosWithAuth';
 
const App = () => {

  const history = useHistory();

  const logout = () => {
    axiosWithAuth()
    .post('http://localhost/api/logout')
    .then(() => {
      localStorage.removeItem('token')
      history.push('/login')
    });
  };

  return (
    <div className="App">
      <nav>
        <h2>Friends</h2>
        <ul>
          <li>
            <Link to='/'>Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to='/protected'>Friends</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <PrivateRoute exact path='/protected' component={Friends} />
        <Route path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
