import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import User from './components/user';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
function App() {
  return (
    <BrowserRouter>
      <Switch> 
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route path = "/login">
          <Login />
        </Route>
        <Route path = '/signup'>
          <Signup />
        </Route>
        <Route path = '/:username' component = {User} />
      </Switch>  
    </BrowserRouter>

  );
}

export default App;
