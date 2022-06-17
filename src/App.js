import NavBar from './Navbar';
import Home from './Home';
import Trend from './Trend';
import Course from './Course'
import Team from './Team'
import {logo} from './resource/logo.png'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <NavBar />
        <div className="content">
          <Switch>
              <Route exact path="/"> 
                <Home/>
              </Route>
              <Route path="/Trend"> 
                <Trend/>
              </Route>
              <Route path="/Course"> 
                <Course/>
              </Route>
              <Route path="/Team"> 
                <Team/>
              </Route>
          </Switch>
        </div>
      </div>
      </Router>
    </div> 
  );
}

export default App;
