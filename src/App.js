import NavBar from './Navbar';
import Home from './Home';
import Trend from './Trend';
import Course from './Course'
import Team from './Team'
import background1 from './resource/background1.png'
import { Route, Router, Routes, BrowserRouter} from 'react-router-dom';
// import {logo} from './resource/logo.png'
// import { BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/COurses' element={<Course/>}/>
            <Route path='/Trend' element={<Trend/>}/>
            <Route path='/Team' element={<Team/>}/>
          </Routes>
        </div>  
      </BrowserRouter>
      <div className="background">
                <img src={background1} id="BackgroundImg" alt="img" />
      </div>
    </div> 
  );
}

export default App;
