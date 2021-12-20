
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav className="navigation">
          <ul>
              <Link to="/" className="navigation-tab">ToDoList🕒</Link>
              <Link to="/Done" className="navigation-tab">Done✔️</Link>
              <Link to="/UnDone" className="navigation-tab">UnDone❌</Link>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/Done">
          </Route>
          <Route exact path="/UnDone">
          </Route>
          <Route exact path="/">
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
