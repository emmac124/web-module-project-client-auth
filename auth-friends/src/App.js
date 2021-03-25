import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import FriendForm from './components/FriendForm';
 
const App = () => {

  return (
    <div className="App">
        <h2>Friends List!</h2>
        <Switch>
          <PrivateRoute path='/friends/add-new' component={FriendForm} />
          <PrivateRoute path='/friends' component={Friends} />
          <Route path='/' component={Login} />
        </Switch>
    </div>
  );
}

export default App;
