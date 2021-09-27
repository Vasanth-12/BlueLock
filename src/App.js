import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import SignIn from './components/signin';
import Login from './components/login';

function App() {
  return (
    <Router>
    <div className="App">
      
        <ul>
          <Link to='/login'> Login </Link>
        </ul>
        <ul>
          <Link to='/signin'> Sign In </Link>
        </ul>
        <Route path = '/login' exact strict component={Login} />
        <Route path = '/signin' exact strict component={SignIn} />
      
    </div>
    </Router>
  );
}

export default App;
