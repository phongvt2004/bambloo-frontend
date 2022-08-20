import React from 'react';
import './Login.css'
import FacebookLogin from 'react-facebook-login';
import {FaFacebookF} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { update } from './reducer/action';

function Login(){
    const dispatch = useDispatch()

    const [loginInput, onchange] = useState({
        email: null,
        password: null
    })
    const responseFacebook = (response) => {
        console.log(response);
        console.log("fb logged in ");
        
    }
    const google = window.google;
    function handleCredentialResponse(response) {
        const decoded = jwt_decode(response.credential)
        console.log("Encoded JWT ID token: " + response.credential);
    
        for (var key in response)
            console.log(key);
        console.log("gg logged in ");
   
      }
    window.onload =  () => {
         
        const data = {
            email:"abc@gmail.com",
            password:"123",
            confirmPassword:"123",
            fullname:"tester",
            gender:"male",
            birthday:"01/01/2020"
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(data)
        };
        google.accounts.id.initialize({
            client_id: "378372494398-m350lb72amf1r1oph9af2cnleoive0ts.apps.googleusercontent.com",
            callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { type: "icon",size: "large" }  // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
        
    }
    const loginClickHandle = () => {
        console.log(loginInput.email);
        console.log(loginInput.password);
        axios.post('https://bambloo.herokuapp.com/auth/login', {
            email:loginInput.email,
            password:loginInput.password
          })
          .then(function (response) {   
            console.log("log in succesfully");
            console.log(response)
            dispatch(update(response))
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
    return (
    <div className='Login'>
       
        <form className='loginForm'>
            <label>Email: </label><br/>
            <input id="ie" type="email" onChange={emailupdate} placeholder='Type your email'/>
            <span id="b1"></span><br/>
            <label>Mật khẩu: </label><br/>
            <input id="ip"type="password" onChange={passupdate} placeholder='Type your password'/>
            <span id="border2"></span><br/>
        </form>
            <button className='loginCfrm' onClick={loginClickHandle}>Đăng nhập</button>
            <p><a href="/passForgot">Quên mật khẩu</a></p>
            <div className='otherLogin' children='loginForm'>
                <IconContext.Provider value={{size:"15px", className:"icon", color:"#ffffff"}}>
                <FacebookLogin
                    appId="792377525274888"
                    fields="name,email,picture"
                    scope='public_profile, email, user_birthday'
                    callback={responseFacebook}
                    cssClass="fbLogin"
                    autoLoad={false}
                    textButton=''
                    icon={<FaFacebookF/>}
                />
                </IconContext.Provider>
                <div id='buttonDiv'></div>
            </div>
    
    </div>
);}
export default Login;