import User from './components/user';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch> 
        <Route path = '/:username' component = {User} />
      </Switch>  
    </BrowserRouter>

  );
}

export default App;
