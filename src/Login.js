import React from 'react';
import './Login.css'

import {FaFacebookF} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { update } from './reducer/action';
import {auth} from "./firebase-config"
import { signInWithPopup } from 'firebase/auth';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
// import {ggLogo} from './resource/Google_G_Logo.svg'
import { useCookies } from 'react-cookie';


const ggLogo = 
<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="google-icon">
    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
        <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
        <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
        <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
        <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
    </g>
</svg>
function Login(){
    
    // var firebase = require('firebase');
    // var firebaseui = require('firebaseui');

    const dispatch = useDispatch()

    const [loginInput, onchange] = useState({
        email: null,
        password: null
    })
    const loginClickHandle = () => {
        axios.post('https://bambloo.herokuapp.com/auth/login', {
            email:loginInput.email,
            password:loginInput.password
          })
          .then(function (response) {   
            console.log("log in succesfully");
            console.log(response)
            dispatch(update(response))
            document.cookie = "userId=" + response.data.userId;
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }
    const emailupdate = (e) => {
        onchange({
            email: e.target.value,
            password: loginInput.password
        })
    }
    const passupdate = (e) => {
        onchange({
            email: loginInput.email,
            password: e.target.value
        })
    }
    const ticked = (e) => {
        console.log(e.target.checked);
    }
    const fbLogin = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error)});

    }
    const ggLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
       .then((response) => {console.log(response)})
    }
    return (
    <div className='Login'>
       
        <form className='loginForm'>
            <label>Email: </label><br/>
            <input id="ie" type="email" onChange={emailupdate} placeholder='Type your email'/>
            <span id="b1"></span><br/>
            <label>Mật khẩu: </label><br/>
            <input id="ip"type="password" onChange={passupdate} placeholder='Type your password'/>
            <span id="border2"></span><br/>
            <div className="keepsignin">
                <input type="checkbox" placeholder='Duy trì đăng nhập' onChange={ticked}></input>
                <p>Duy trì đăng nhập</p>
            </div>

        </form>
            <button className='loginCfrm' onClick={loginClickHandle}>Đăng nhập</button>
            <p><a href="/passForgot">Quên mật khẩu</a></p>
            <div className='otherLogin' children='loginForm'>
                <IconContext.Provider value={{size:"15px", className:"icon", color:"#ffffff"}}>
                {/* <div className='fbLogin' onClick = {fbLogin}></div> */}
                {/* <div className='ggLogin' onClick = {ggLogin}>{ggLogo}</div> */}
                <div class="google-btn" onClick={ggLogin}>
                    <div class="google-icon-wrapper">
                        {ggLogo}
                    </div>
                    <p className="btn-text"><b>Sign in with google</b></p>
                </div>
                <div class="fb-btn" onClick={fbLogin}>
                    <div class="fb-icon-wrapper">
                        <FaFacebookF/>
                    </div>
                    <p className="btn-text"><b>Sign in with Facebook</b></p>
                </div>
                <div className="keepsignin">
                    <input type="checkbox" placeholder='Duy trì đăng nhập' onChange={ticked}></input>
                    <p>Duy trì đăng nhập</p>
                </div>
                    
                </IconContext.Provider>
            </div>
    
    </div>
);}
export default Login;