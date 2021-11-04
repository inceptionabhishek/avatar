import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Base from './Components/Base';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Base />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
