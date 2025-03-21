import logo  from './resource/logo.png'
import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import AccountPopUp from './AccountPopUp';
import { useDispatch } from 'react-redux';
import {userLogout} from './reducer/action'
Header.defaultProps = {
    email : "none"
}
// 
function Header(props) {
    const dispatch = useDispatch();
        // const path = this.props.location.pathname.slice(1); 
    const [popUp, changeState] = useState(false);
    const [loggedIn, setLoggedinTrigger] = useState(props.email !== "none");
    // const LoginButton = <a href='/Login' className="accBtn"></a>;
     const google = window.google;
        function handleCredentialResponse(response) {
            const decoded = jwt_decode(response.credential)
            console.log("Encoded JWT ID token: " + response.credential);
        
            console.log(response.select_by);
            for (var key in response)
                console.log(key);
            console.log("gg logged in ");
       
          }
    const loginButtonContent = (props.email !== "none") ? props.email : "Đăng Nhập"
    return ( 
        <nav className = "navbar" >
            <img className = "logo" alt = "Bambloo Logo" src = { logo } >
            </img> 
            {/* <h1 className = "part" alt = "web-part" id = "web-part" > { path } </h1>  */}
            <div className = "links" >
                <a href = "/" > Trang chủ </a> 
                <a href = "/Trend" > Xu hướng </a> 
                <a href = "/Course" > Khóa học </a> 
                <a href = "/Team" > Phản hồi đến chúng tôi </a>
                <div class="searchBox">
                    <input class="searchInput"type="text" name="" placeholder="Search"/>
                    <button class="searchButton" href="#">
                        <i class="material-icons">
                            search
                        </i>    
                    </button>
                </div>
              <button className='accBtn' onClick={() => {
                if (loggedIn === true) {
                    console.log(props.email);
                    if (props.email !== "none") 
                    {
                        console.log("profile");
                        dispatch(userLogout());
                        setLoggedinTrigger(false)
                    }
                    else changeState(true);
                }
                else changeState(true);
              }}>{loginButtonContent}</button>               
            </div> 
            <AccountPopUp trigger = {popUp} setTrigger = {changeState} setLoggedinTrigger = {setLoggedinTrigger}></AccountPopUp>
        </nav>
    );
}

export default Header;