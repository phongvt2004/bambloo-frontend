import NavBar from './Navbar';
import Home from './Home';
import Trend from './Trend';
import Course from './Course'
import Team from './Team';

import Login from './Login';
import { Route , Routes, BrowserRouter} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Courses' element={<Course/>}/>
            <Route path='/Trend' element={<Trend/>}/>
            <Route path='/Team' element={<Team/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Home/>}/>
            <Route path='/passForgot' element={<Home/>}/>
          </Routes>
        </div>  
      </BrowserRouter>
    </div> 
  );
}

export default App;
