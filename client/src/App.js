import './App.css';

import Container from './components/Container';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">

    <Router>
    <Switch>
    <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "/type">
            <Container/>
        </Route>
        
        <Route path = "*">
          <NotFound/>
        </Route>
      
    </Switch>
    </Router>
  </div>
  )  
}

export default App;
