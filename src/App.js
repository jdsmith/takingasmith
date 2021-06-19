import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./home/Home";
import RSVPForm from "./rsvp/RSVPForm";
import './App.css';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        #TakingaSmith
      </header>
      <Router>
        <Switch>
            <Route path="/rsvp" exact>
              <RSVPForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </main>
  );
}

export default App;
