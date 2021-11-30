import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import './App.css';
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Router>
            {/* Sidebar */}
            <Sidebar />
            <Switch>
              <Route exact path='/'>
                {/* Chat */}
                <Chat />
              </Route>
              <Route path='/rooms/:roomId'>
                {/* Chat */}
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
