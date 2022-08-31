import React from 'react';
import NavBar from './Navbar';
import Home from './Home';
import Trend from './Trend';
import Course from './Course'
import Team from './Team';
import Login from './Login';
import { Route , Routes, BrowserRouter} from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux/es/exports';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { userLogout } from './reducer/action';
// import { useDispatch } from 'react-redux/es/exports';

export default function App() {
  const selector = useSelector((state) => state.userInfo.email);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['keepMeSignin']);
  window.onload = () => {
    if (cookies.keepMeSignin !== true) console.log('logged out');
    else console.log('stayed');
  }
  return (
    <div className="App">
      <NavBar email = {selector !=="" ? selector : "none"}/>
      <BrowserRouter>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Course' element={<Course/>}/>
            <Route path='/Trend' element={<Trend/>}/>
            <Route path='/Team' element={<Team/>}/>
          </Routes>
        </div>  
      </BrowserRouter>
    </div> 
  );
}

