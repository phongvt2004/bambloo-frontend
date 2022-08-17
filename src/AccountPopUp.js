import React, { useEffect } from 'react';
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import jwt_decode from 'jwt-decode'
import "./AccountPopUp.css"
function AccountPopUp(props){
    const [pageSelected, changePage] = useState("login");
    const [colorbtn, changecolor] = useState({fs :"white", sc: "#61B6FF"})
    function handleCredentialResponse(response) {
        const decoded = jwt_decode(response.credential)
        console.log("Encoded JWT ID token: " + response.credential);
    
        console.log(response.select_by);
        for (var key in response)
            console.log(key);
        console.log("gg logged in ");
   
      }
    window.onload = () =>{
        if (pageSelected === "login"){
            console.log("load google button");
            const google = window.google;
            google.accounts.id.initialize({
                client_id: "378372494398-m350lb72amf1r1oph9af2cnleoive0ts.apps.googleusercontent.com",
                callback: handleCredentialResponse,
            });
            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { type: "icon",size: "large" }  // customization attributes
            );
        }
    }
    

    const handleClick = (e) => {
        changePage(e.target.id)
        const tmp = colorbtn.fs
        changecolor({
            fs : colorbtn.sc,
            sc : tmp
        })
    }
    
    return (props.trigger) ? (
    <div className="PopUp" >
        <button onClick={() => {
            props.setTrigger(false);
        }}>close</button>
        {props.children}
        <div className="header">
            <button id="login" onClick={handleClick} style = {{"background" : colorbtn.fs, "color" : colorbtn.sc}}>Đăng nhập</button>
            <button id="register" onClick={handleClick} style = {{"background" : colorbtn.sc, "color" : colorbtn.fs}}>Đăng kí</button>
        </div>
        <div className="forms">
            {pageSelected === "login" ? <Login/> : <Register/>}

        </div>
    </div>
) : "" ;}
export default AccountPopUp;