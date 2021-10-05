import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import List from './Components/List';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={List} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
