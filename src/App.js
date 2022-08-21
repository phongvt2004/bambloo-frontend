import React from 'react';
import NavBar from './Navbar';
import Home from './Home';
import Trend from './Trend';
import Course from './Course'
import Team from './Team';
import Register from './Register';
import Login from './Login';
import { Route , Routes, BrowserRouter} from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux/es/exports';
import { useState } from 'react';
import { userLogout } from './reducer/action';
export default function App() {
  const selector = useSelector((state) => state.userInfo.email);
  
  return (
    <div className="App">
      <NavBar email = {selector}/>
      <BrowserRouter>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Courses' element={<Course/>}/>
            <Route path='/Trend' element={<Trend/>}/>
            <Route path='/Team' element={<Team/>}/>
            <Route path='/Login' element={<Login/>}/>
            {/* <Route path='/Register' element={<Register/>} /> 
            <Route path='/Register' element={<Register/>}/>
            <Route path='/passForgot' element={<Register/>}/> */}
          </Routes>
        </div>  
      </BrowserRouter>
    </div> 
  );
}

